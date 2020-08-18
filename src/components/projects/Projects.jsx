import React from 'react';
import Main from '../App/Main';
import ProjectCard from './ProjectCard';


export default function Projects() {

  const affirmE = '../../../assets/images/affirme-1.jpg';
  const cryptoStimulus = '../../../assets/images/crypto.jpg';
  const githubLogo = '../../../assets/icons/github-2.png';
  
  return (
    <Main >
      <div>
        <h2>Projects</h2>

        <ProjectCard
          title="FetchArt"
          website="https://fetch-art.netlify.app/"
          logo="/assets/images/fetchART.jpg"
          github="https://github.com/fetch-ART"
        >
          <p>FetchART recognizes our information overconsumption and aims to give the “power of scroll” a new meaning.</p>
        </ProjectCard>

        {/* Convert the rest of these cards */}

        <section>
          <h3>Affirm.e</h3>
          <img src={affirmE} alt="affirm.e logo" width="200" height="200"/>
          <p>The need for affirmations of our existence, of our health, and our worth are more important than ever--that is the ultimate goal of the Affirm.e Twitterbot.</p>
          <img src={githubLogo} alt="github logo" width="30" height="30"/> 
        </section>

        <section>
          <h3>CryptoStimulus</h3>
          <img src={cryptoStimulus} alt="cryptoStimulus logo" width="500" height="200"/>
          <p>With wealth redistribution in mind, CryptoStimulus hosts a growing database of grassroots organizations from which the user can filter and select favorites. </p>
          <img src={githubLogo} alt="github logo" width="30" height="30"/> 
        </section>
          
      </div>
    </Main>
  );
}
