import React from 'react';
import Main from '../App/Main';
import ProjectCard from './ProjectCard';
import styles from './Projects.css';
import crypto from '../../../assets/images/crypto.jpg';


export default function Projects() {
  return (
    <Main>
      <h2>[ projects ]</h2>

      <div className={styles.projectList}>
        <ProjectCard
          title="FetchArt"
          website="https://fetch-art.netlify.app/"
          logo="/assets/images/fetchART.jpg"
          github="https://github.com/fetch-ART"
        >
          <p>
                        FetchART recognizes our information overconsumption and aims to give the
                        “power of scroll” a new meaning.
          </p>
        </ProjectCard>

        <ProjectCard
          title="Affirm.e"
          website="https://twitter.com/affirm_e"
          logo="/assets/images/affirme-1.jpg"
          github="https://github.com/Affirm-e/affirmations-project"
        >
          <p>
                        The need for affirmations of our existence, of our health, and our worth are
                        more important than ever--that is the ultimate goal of the Affirm.e
                        Twitterbot.
          </p>
        </ProjectCard>

        <ProjectCard
          title="CryptoStimulus"
          website="https://cryptostimulus.github.io/Project-Week-cryptoStimulus/"
          logo={crypto}
          github="https://github.com/cryptoStimulus/Project-Week-cryptoStimulus"
        >
          <p>
                        With wealth redistribution in mind, CryptoStimulus hosts a growing database
                        of grassroots organizations from which the user can filter and select
                        favorites.
          </p>
        </ProjectCard>
      </div>
    </Main>
  );
}
