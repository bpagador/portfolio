import React from 'react';
import Main from '../App/Main';

export default function BonusTracks() {

  const businessTribune = 'https://pamplinmedia.com/but/239-news/474740-383671-coding-while-distant';
  const alchemyCodeLab = 'https://www.alchemycodelab.com/blog/alchemy-remote-learners-in-the-news';
  const pdxwitScholarship = 'https://www.pdxwit.org/blog/2020/7/1/pdxwit-awards-5-investinginyou-scholarships-to-members-of-the-community';
  const speakersBureau = 'https://www.pdxwit.org/speakers-bureau';
  const workFromHome = '../../../assets/images/work-from-home.jpg';
  const pdxwitLogo = '../../../assets/images/pdxwit.png';

  return (
    <Main>
      <section>
        <h2>Bonus Tracks</h2>
        <ul>

          <li>
            <img 
              src={pdxwitLogo}
              alt="email logo"/><br/>
          
            <a 
              href={pdxwitScholarship} 
              target="_blank" 
              rel="noreferrer">
            PDXWIT Scholarship | </a>

            <a 
              href={speakersBureau} 
              target="_blank" 
              rel="noreferrer">
            Speakers Bureau</a>

            <p>
              {'The PDX Women in Tech community has been a pivotal part of my growth as a Software Developer. I was recently awarded the #InvestingInYou Scholarship and am a member of PDXWIT\'s Speakers Bureau.'}
            </p>
          </li>

          <br/>

          <li>
            <img 
              src={workFromHome} 
              alt="email logo"
              width="300"
              height="300"
            /><br/>
          
            <a 
              href={businessTribune} 
              target="_blank" 
              rel="noreferrer">
            Coding While Distant | </a>

            <a href={alchemyCodeLab} 
              target="_blank" 
              rel="noreferrer">
            Alchemy Code Lab Spotlight</a>

            <p>
              {'Featured in the Business Tribune, alongside peers and teammates, sharing our experiences as developers impacted by the remote, work-from-home paradigm. I\'m featured last, there are plenty of typos to make you giggle and audibly sigh, including a misspelling of my name; however, it is an important--though brief and incomplete--glimpse into my lived experience as an immigrant developer in today\'s America. Tread lightly.'} 
            </p>
            <br/>

          </li>

        </ul>
  
      </section>
    </Main>
  );
}
