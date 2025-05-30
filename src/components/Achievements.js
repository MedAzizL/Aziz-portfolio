import React from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './Achievements.scss';

import IsiContest from '../assets/achievements/isi contest.jpg';
import SupcomContest from '../assets/achievements/supcom_contest.jpg';
import Must from '../assets/achievements/must.jpg';
import Catforces from '../assets/achievements/catforces.png';
import Icont from '../assets/achievements/icont.jpg';

const achievements = [
  {
    title: 'Catforces Competition',
    image: Catforces,
  },
  {
    title: "ACM SUP'COM Code Builders",
    image: SupcomContest,
  },
  {
    title: 'MUST Programming Contest',
    image: Must,
  },
  {
    title: 'ISI Programming Contest',
    image: IsiContest,
  },
  {
    title: 'ICONT Competition',
    image: Icont,
  },
];

const Achievements = () => {
  return (
    <section id="competitions" className="achievements-section section">
      <Container>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Competitions
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="achievements-slider-container"
        >
          <div className="achievements-slider">
            <div className="slider-track">
              {/* Duplicate the achievements array for seamless infinite scroll */}
              {[...achievements, ...achievements, ...achievements].map((achievement, index) => (
                <div key={index} className="achievement-slide">
                  <img 
                    className="achievement-image"
                    src={achievement.image}
                    alt={achievement.title}
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Achievements;
