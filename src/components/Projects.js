import React from 'react';
import { Container, Card, Carousel } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.scss';
import AzureAiChat from '../assets/projects/azure ai chat.png';
import LightRag from '../assets/projects/light rag.png';
import Diabete from '../assets/projects/diabete.png';
import ResearchHub from '../assets/projects/researchhub.jpg';

const projects = [
  {
    title: 'Azure-AI-Chatbot',
    description: 'A real-time chat application with Azure OpenAI integration featuring conversational interface with context-aware intelligent responses and Azure OpenAI configuration with secure environment variables management.',
    image: AzureAiChat,
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Azure OpenAI', 'React', 'API Routes'],
    github: 'https://github.com/MedAzizL/Azure-ai-chatbot',
    live: 'https://azure-ai-chatbot.vercel.app',
  },
  {
    title: 'Light RAG - Document Assistant AI',
    description: 'An intelligent document processing system with automatic document import via smart chunking, vector search and semantic search in uploaded documents via TF-IDF embeddings, and conversational interface with RAG for queries based on document content.',
    image: LightRag,
    technologies: ['Python', 'React', 'ChromaDB', 'TF-IDF', 'FastAPI', 'Next.js', 'TypeScript'],
    github: 'https://github.com/MedAzizL/light-rag-system',
  },
  {
    title: 'Diabetes Prediction Application with Machine Learning',
    description: 'Advanced machine learning application for diabetes prediction with data preprocessing and optimization including missing value imputation, data standardization, and hyperparameter optimization. Features algorithm implementation and modern Streamlit interface with interactive visualizations.',
    image: Diabete,
    technologies: ['Python', 'Streamlit', 'Scikit-learn', 'Pandas', 'NumPy', 'Plotly', 'Git', 'Machine Learning'],
    github: 'https://github.com/MedAzizL/Diabetes-prediction-project',
    live: 'https://medazizl-diabetes-prediction-project-appapp-jhctis.streamlit.app/',
  },
  {
    title: 'ResearchHub - Academic Research Management Platform',
    description: 'Comprehensive research management platform with RESTful APIs using Spring Boot and Spring Security, responsive Angular interface with Angular Material, and AI integration with Python FastAPI service for PDF analysis and automated classification.',
    image: ResearchHub,
    technologies: ['Angular', 'Spring Boot', 'Spring Security', 'JWT', 'MySQL', 'TypeScript', 'Python', 'FastAPI', 'NLP'],
    github: 'https://github.com/MedAzizL/ResearchHub-Management-System',
    frontend: 'https://github.com/MedAzizL/Front-end-researchhub',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section section">
      <Container>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>
        <Carousel interval={null} indicators={true}>
          {projects.map((project, index) => (
            <Carousel.Item key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="project-card mx-auto" style={{ maxWidth: '800px' }}>
                  <div className="project-image">
                    <Card.Img variant="top" src={project.image} />
                    <div className="project-links">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" title="Backend Repository">
                        <FaGithub />
                      </a>
                      {project.frontend && (
                        <a href={project.frontend} target="_blank" rel="noopener noreferrer" title="Frontend Repository">
                          <FaGithub />
                        </a>
                      )}
                      {project.live && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer" title="Live Demo">
                          <FaExternalLinkAlt />
                        </a>
                      )}
                    </div>
                  </div>
                  <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>
                    <div className="technologies">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
};

export default Projects;
