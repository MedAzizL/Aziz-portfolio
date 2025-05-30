import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin} from 'react-icons/fa';
import { SiCodeforces } from 'react-icons/si';
import { TypeAnimation } from 'react-type-animation';
import './Hero.scss';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <Container>
        <Row className="align-items-center">
          <Col lg={10} className="mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="hero-title">
                Hi, I'm <span className="highlight">Aziz</span>
              </h1>
              <div className="hero-subtitle">
                <TypeAnimation
                  sequence={[
                    'Software Engineering Student',
                    2000,
                    'Competitive Programmer', 
                    2000,
                    'AI Enthusiast',
                    2000,
                  ]}
                  wrapper="h2"
                  speed={50}
                  style={{ 
                    fontSize: '1.5rem',
                    display: 'inline-block',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                  repeat={Infinity}
                />
              </div>
              <p className="hero-text">
                I am a software engineering student at ISI with a passion for artificial intelligence. 
                I am seeking a summer internship to enhance my skills and contribute to real-world projects within an innovative company.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="social-links"
            >
              <a href="https://github.com/MedAzizL" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/aziz-laifi-b62383258/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://codeforces.com/profile/Azayez" target="_blank" rel="noopener noreferrer" className="codeforces-icon">
                <SiCodeforces />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <a href="#contact" className="cta-button">
                Get In Touch
              </a>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
