import React from 'react';
import styles from './Projects.css';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
const ProjectCard = (props) => (
  <section className={styles.ProjectCard}>
    <header>
      <a href={props.website} target="_blank" rel="noreferrer">
        <h2>{props.title}</h2>
      </a>
      <a href={props.github} target="_blank" rel="noreferrer">
        <img src="/assets/icons/github-2.png" alt="" width="30" height="30" />
        <span>View source</span>
      </a>
    </header>
    <a href={props.website} target="_blank" rel="noreferrer">
      <img src={props.logo} alt={props.title} width="200" height="200" />
    </a>
    { props.children }
  </section>
);

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default ProjectCard;
