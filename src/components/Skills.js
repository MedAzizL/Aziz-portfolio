import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './Skills.scss';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Python'},
      { name: 'JavaScript'},
      { name: 'TypeScript'},
      { name: 'Java'},
      { name: 'PHP'},
      { name: 'C++'},
    ],
  },
  {
    title: 'AI & Machine Learning',
    skills: [
      { name: 'FastAPI'},
      { name: 'RAG'},
      { name: 'LLM'},
      { name: 'Machine Learning'},
      { name: 'NLP'},
    ],
  },
  {
    title: 'Frontend & Backend',
    skills: [
      { name: 'React'},
      { name: 'Next.js'},
      { name: 'Angular'},
      { name: 'Node.js'},
      { name: 'NestJS'},
      { name: 'Laravel'},
      { name: 'Spring Boot'},
    ],
  },
  {
    title: 'Databases & Tools',
    skills: [
      { name: 'MySQL'},
      { name: 'SQL'},
      { name: 'NoSQL'},
      { name: 'Git'},
      { name: 'GitHub'},
      { name: 'Docker'},
      { name: 'Azure'},
    ],
  },
  {
    title: 'Mobile & Other',
    skills: [
      { name: 'JWT'},
      { name: 'UML'},
      { name: 'Scrum'},
      { name: 'Tailwind CSS'},
      { name: 'Bootstrap'},
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section section">
      <Container>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Skills & Expertise
        </motion.h2>
        <Row>
          {skillCategories.map((category, categoryIndex) => (
            <Col lg={4} md={6} key={categoryIndex} className="mb-4">
              <motion.div
                className="skills-category"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              >
                <h3>{category.title}</h3>
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      className="skill-item"
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                    >
                      <div className="skill-info">
                        <span className="skill-icon">{skill.icon}</span>
                        <span className="skill-name">{skill.name}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
