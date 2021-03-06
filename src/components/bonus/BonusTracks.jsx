import React from 'react';
import Main from '../App/Main';
import styles from './BonusTracks.css';
import wfh from '../../../assets/images/work-from-home.jpg';
import pdxwit from '../../../assets/images/pdxwit.png';

export default function BonusTracks() {
  const businessTribune =
        'https://pamplinmedia.com/but/239-news/474740-383671-coding-while-distant';
  const alchemyCodeLab =
        'https://www.alchemycodelab.com/blog/alchemy-remote-learners-in-the-news';
  const pdxwitScholarship =
        'https://www.pdxwit.org/blog/2020/7/1/pdxwit-awards-5-investinginyou-scholarships-to-members-of-the-community';
  const speakersBureau = 'https://www.pdxwit.org/speakers-bureau';

  return (
    <Main>
      <h2>[ bonus tracks ]</h2>
      <ul className={styles.bonusList}>
        <li className={styles.bonusItem}>
          <img src={pdxwit} alt="" />
          <div className={styles.bonusContent}>
            <p>
              <strong>
                <a href={pdxwitScholarship} target="_blank" rel="noreferrer">
                                    PDXWIT Scholarship
                </a>{' '}
                                and member of the{' '}
                <a href={speakersBureau} target="_blank" rel="noreferrer">
                                    Speakers Bureau
                </a>
              </strong>
            </p>

            <p>
              {`The PDX Women in Tech community has been a pivotal part of my growth as
                            a Software Developer. I was recently awarded the #InvestingInYou
                            Scholarship and am a member of PDXWIT's Speakers Bureau.`}
            </p>
          </div>
        </li>

        <li className={styles.bonusItem}>
          <img
            src={wfh}
            alt="Comic with caption, 'I can't remember–do I work at home or do I live at work?'"
          />
          <div className={styles.bonusContent}>
            <p>
              <strong>
                <a href={businessTribune} target="_blank" rel="noreferrer">
                                    Coding While Distant
                </a>{' '}
                                (with spotlight in{' '}
                <a href={alchemyCodeLab} target="_blank" rel="noreferrer">
                                    Alchemy in the News
                </a>
                                )
              </strong>
            </p>
            <p>
              {`Featured in the Business Tribune, alongside peers and teammates, sharing
                            our experiences as developers impacted by the remote, work-from-home
                            paradigm. I'm featured last, there are plenty of typos to make you
                            giggle and audibly sigh, including a misspelling of my name; however, it
                            is an important–though brief and incomplete–glimpse into my lived
                            experience as an immigrant developer in today's America. Tread lightly.`}
            </p>
          </div>
        </li>
      </ul>
    </Main>
  );
}
