import React from 'react';
import Main from '../App/Main';


export default function Contact() {

  const emailLogo = '../../../assets/icons/email.png';
  const calendarLogo = '../../../assets/icons/calendly.png';
  const twitterLogo = '../../../assets/icons/twitter.png';
  const briseidaContactPg = '../../../assets/images/contact-pg-img.png';
  return (
    <Main > 
      <section>
        <ul>

          <li>
            <img src={emailLogo} alt="email logo" width="40" height="40"/><br/>
            <a href="mailto:bpagador@gmail.com" target="_blank" rel="noreferrer">Email Me</a>
          </li>

          <br/>

          <li>
            <img src={calendarLogo} alt="calendly logo" width="35" height="35"/><br/>
            <a href="https://calendly.com/bpagador" target="_blank" rel="noreferrer">Schedule Time w/ Me</a>
          </li>

          <br/>

          <li>
            <img src={twitterLogo} alt="email logo" width="40" height="40"/><br/>
            <a href="https://twitter.com/BriseidaPagador" target="_blank" rel="noreferrer">Tweet @ Me</a>
          </li>
        </ul>

        <section>
          <img src={briseidaContactPg} alt="Briseida working at her desk" width="510" height="340"/>
        </section>
      

      </section>
    </Main>


  );
}
