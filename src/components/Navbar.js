import React, { useState, useEffect } from 'react';
import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import './Navbar.scss';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavItemClick = () => {
    setExpanded(false);
  };

  return (
    <BootstrapNavbar 
      expand="lg" 
      fixed="top"
      className={`custom-navbar ${scrolled ? 'scrolled' : ''}`}
      expanded={expanded}
      onToggle={(expanded) => setExpanded(expanded)}
    >
      <Container>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            {['home', 'about', 'projects', 'skills', 'experience', 'competitions' ,'contact'].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Nav.Link 
                  as={Link} 
                  to={item}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="nav-link"
                  onClick={handleNavItemClick}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Nav.Link>
              </motion.div>
            ))}
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
