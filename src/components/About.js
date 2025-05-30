import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './About.scss';
import Me from '../assets/me_nb.jpg';

const About = () => {
  return (
    <section id="about" className="about-section section">
      <Container>
        <Row>
          <Col lg={12}>
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              About Me
            </motion.h2>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col lg={6}>
            <motion.div
              className="about-image"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img src={Me} alt="Profile" />
            </motion.div>
          </Col>
          <Col lg={6}>
            <motion.div
              className="about-content"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3>Mohamed Aziz Laifi</h3>
              <p>
                I am a Software Engineering student at ISI with a passion for artificial intelligence and competitive programming. 
                Through hands-on projects and continuous learning, I've developed skills in modern web technologies, 
                machine learning, and problem-solving.
              </p>
              <hr/>
              <p>
                I love exploring AI innovations, participating in programming contests, and building solutions that make a difference. 
                Always eager to learn new technologies and tackle challenging problems that push the boundaries of what's possible.
              </p>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
