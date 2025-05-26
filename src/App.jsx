import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Recommendations from './components/Recommendations'
import RecommendationForm from './components/RecommendationForm'
import './App.css'

const App = () => {
  return (
    <>
      <Header />
      <AboutMe />
      <Skills />
      <Projects />
      <Recommendations />
      <RecommendationForm />
      <footer>
        <a href="#home">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-up-circle-fill arrow" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z"/>
          </svg>
        </a>
      </footer>
    </>
  );
};

export default App
