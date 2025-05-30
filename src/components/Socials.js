import React from 'react';
import { Container } from 'react-bootstrap';
import { FaGithub, FaLinkedin} from 'react-icons/fa';
import { SiCodeforces } from 'react-icons/si';
import './Socials.scss';

const Socials = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-content">
          <div className="social-links">
            <a href="https://github.com/MedAzizL" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/aziz-laifi-b62383258/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://codeforces.com/profile/Azayez" target="_blank" rel="noopener noreferrer" className="codeforces-icon">
              <SiCodeforces />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Socials;
