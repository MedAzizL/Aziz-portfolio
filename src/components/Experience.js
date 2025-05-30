import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './Experience.scss';

const experiences = [
  {
    title: 'Intern Engineer',
    company: 'CodeCooperation',
    period: '07/2024 - 09/2024',
    description: [
      'MVP of SaveThePlate platform development using NextJS, NestJS, Prisma, JWT, TypeScript, and Agile Scrum methodology.',
      'Merchant dashboard: An interface for restaurants and suppliers to publish offers with photos, set prices, and manage stock.',
      'Customer area: An interface for browsing and reserving food offers with geolocation support.',
      'Authentication: Secure login system via magic link and user role management.',
    ],
  },
  {
    title: 'Final Year Project',
    company: 'Tunisie Telecom',
    period: '02/2023 - 06/2023',
    description: [
      'Subscribers and stock management application using Laravel, PHP, MySQL, Bootstrap, jQuery, MVC, SCRUM, UML.',
      'User authentication and management: Developed a secure system for registration, login, and user role management.',
      'Operations and material management: Monitored technical operations, material usage, and associated data for each intervention.',
      'Attachment and invoice generation: Automated the creation of PDF documents for monthly stock tracking and billing.',
    ],
  },
];

const education = [
  {
    degree: 'Engineer\'s degree in software engineering',
    school: 'Higher institute of computer science',
    period: '09/2023 - Present',
    description: 'Ariana, Tunisia',
  },
  {
    degree: 'National license in computer Science',
    school: 'Higher institute of computer science',
    period: '09/2020 - 06/2023',
    description: 'Ariana, Tunisia',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section section">
      <Container>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Experience & Education
        </motion.h2>
        
        <Row>
          <Col lg={7}>
            <div className="timeline experience-timeline">
              <h3>Professional Experience</h3>
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="timeline-item"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4>{exp.title}</h4>
                    <h5>{exp.company}</h5>
                    <p className="period">{exp.period}</p>
                    <ul>
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </Col>
          
          <Col lg={5}>
            <div className="timeline education-timeline">
              <h3>Education</h3>
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="timeline-item"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4>{edu.degree}</h4>
                    <h5>{edu.school}</h5>
                    <p className="period">{edu.period}</p>
                    <p>{edu.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Experience;
