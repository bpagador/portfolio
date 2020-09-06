import React from 'react';
import Main from '../App/Main';
import ProjectCard from './ProjectCard';
import styles from './Projects.css';
import crypto from '../../../assets/images/crypto.jpg';
import affirme from '../../../assets/images/affirme-1.jpg';
import fetchart from '../../../assets/images/fetchART.jpg';
import florafile from '../../../assets/images/leaf-world.png';


export default function Projects() {
  return (
    <Main>
      <h2>[ projects ]</h2>

      <div className={styles.projectList}>
        <ProjectCard
          title="FloraFile"
          website="https://florafile.netlify.app/"
          logo={florafile}
          github="https://github.com/GOATDreamTeam"
        >
          <p>
            {'Fullstack / Frontend-heavy open-access plant encyclopedia made for botanists and plant newbies alike. App is web-responsive + mobile-friendly and has site-wide Color Blind accessibility ("Check for Monochrome") and provides "top search" suggestions to the user.'}
          </p>
        </ProjectCard>
        
        <ProjectCard
          title="FetchArt"
          website="https://fetch-art.netlify.app/"
          logo={fetchart}
          github="https://github.com/fetch-ART"
        >
          <p>
            {'Fullstack visual meditation space counterpointing "doomsday scrolling" through the power of emotions. Targets vast image API and implements user models + auth routes to save user preferences.'} 
          </p>
        </ProjectCard>

        <ProjectCard
          title="Affirm.e"
          website="https://twitter.com/affirm_e"
          logo={affirme}
          github="https://github.com/Affirm-e/affirmations-project"
        >
          <p>
          Backend application posting daily affirmations to a twitterbot. Data is scraped and seeded to a database, then sifted through randomization/verification logic to project unique, non-repeating Quotes for inspiration. Twilio enables SMS messaging to the user. 
          </p>
        </ProjectCard>

        <ProjectCard
          title="CryptoStimulus"
          website="https://cryptostimulus.github.io/Project-Week-cryptoStimulus/"
          logo={crypto}
          github="https://github.com/cryptoStimulus/Project-Week-cryptoStimulus"
        >
          <p>
          Fullstack wealth redistribution site connecting users to grassroots organizations in PDX and surrounding areas. User can filter and save orgs to a Favorites list. 
          </p>
        </ProjectCard>
      </div>
    </Main>
  );
}
