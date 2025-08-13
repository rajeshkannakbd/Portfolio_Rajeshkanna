import React from 'react';
import Header from "./Components/Header/Header";
import TopContainer from "./Components/Top-container/TopContainer";
import './App.css';
import SkillContainer from './Components/Skill-container/SkillContainer';
import ProjectContainer from './Components/Project-Container/ProjectContainer';
import ExperienceContainer from './Components/Experience-container/ExperienceContainer';
import Contact from './Components/Contact.jsx/Contact';

function App() {
  return (
    <>
      <Header />
      <TopContainer />
      <SkillContainer />
      <ProjectContainer />
      <ExperienceContainer/>
      <Contact />
    </>
  );
}

export default App;
