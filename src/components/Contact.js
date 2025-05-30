import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Socials from './Socials';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.scss';

const Contact = () => {
  return (
    <section id="contact" className="contact-section section">
      <Container>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>
        
        <motion.p
          className="contact-description"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          I'm always open to discussing new opportunities, collaborations, or just having a friendly chat about technology and programming.
        </motion.p>

        <Row className="justify-content-center">
          <Col lg={10} xl={8}>
            <motion.div
              className="contact-info-grid"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="info-item">
                <div className="icon-wrapper">
                  <FaEnvelope className="icon" />
                </div>
                <div className="info-content">
                  <h4>Email</h4>
                  <a href="mailto:azizlaifi123@gmail.com" className="contact-link">
                    azizlaifi123@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="info-item">
                <div className="icon-wrapper">
                  <FaPhone className="icon" />
                </div>
                <div className="info-content">
                  <h4>Phone</h4>
                  <a href="tel:+21693921036" className="contact-link">
                    (+216) 93 921 036
                  </a>
                </div>
              </div>
              
              <div className="info-item">
                <div className="icon-wrapper">
                  <FaMapMarkerAlt className="icon" />
                </div>
                <div className="info-content">
                  <h4>Location</h4>
                  <p>Ariana, Tunisia</p>
                </div>
              </div>
            </motion.div>
          </Col>
        </Row>

        <motion.div
          className="social-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3>Connect with me</h3>
          <Socials />
        </motion.div>
      </Container>
    </section>
  );
};

export default Contact;
