import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Achievements from './components/Achievements';
import Loader from './components/Loader'; // <--- Make sure this is here

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const MIN_LOADING_TIME = 1000; // 1 second
    const startTime = Date.now();
  
    const handleLoad = () => {
      const allImages = Array.from(document.querySelectorAll('img'));
      let loadedCount = 0;
  
      const finishLoading = () => {
        const timeElapsed = Date.now() - startTime;
        const delay = Math.max(0, MIN_LOADING_TIME - timeElapsed);
        setTimeout(() => setLoading(false), delay);
      };
  
      if (allImages.length === 0) {
        finishLoading();
        return;
      }
  
      allImages.forEach((img) => {
        if (img.complete) {
          loadedCount++;
        } else {
          img.onload = img.onerror = () => {
            loadedCount++;
            if (loadedCount === allImages.length) {
              finishLoading();
            }
          };
        }
      });
  
      if (loadedCount === allImages.length) {
        finishLoading();
      }
    };
  
    const timeout = setTimeout(handleLoad, 2000); // slight delay for React to render
  
    return () => clearTimeout(timeout);
  }, []);
  

  return (
    <div className="App">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Container>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Hero />
              <About />
              <Projects />
              <Skills />
              <Experience />
              <Achievements />
              <Contact />
            </motion.div>
          </Container>
        </>
      )}
    </div>
  );
}

export default App;
