import React from 'react';


export default function Contact() {

  const emailLogo = '../../../assets/icons/email.png';
  const calendarLogo = '../../../assets/icons/calendly.png';
  const twitterLogo = '../../../assets/icons/twitter.png';
  const briseidaContactPg = '../../../assets/images/contact-pg-img.png';
  return (
    <section>
      <ul>

        <li>
          <img src={emailLogo} alt="email logo"/><br/>
          <a href="mailto:bpagador@gmail.com" target="_blank" rel="noreferrer">Email Me</a>
        </li>

        <li>
          <img src={calendarLogo} alt="calendly logo"/><br/>
          <a href="https://calendly.com/bpagador" target="_blank" rel="noreferrer">Schedule Time w/ Me</a>
        </li>

        <li>
          <img src={twitterLogo} alt="email logo"/><br/>
          <a href="https://twitter.com/BriseidaPagador" target="_blank" rel="noreferrer">Tweet @ Me</a>
        </li>
      </ul>

      <section>
        <img src={briseidaContactPg} alt="Briseida working at her desk"></img>
      </section>
      

    </section>


  );
}
