import React from 'react';
import styles from './Projects.css';
import PropTypes from 'prop-types';
import github from '../../../assets/icons/github-2.png';

// eslint-disable-next-line react/prop-types
const ProjectCard = (props) => (
  <div className={styles.ProjectCard}>
    <h2>
      <a className={styles.titleLink} href={props.website} target="_blank" rel="noreferrer">
        {props.title}
      </a>
    </h2>
    {props.children}
    <a className={styles.projectImgContainer} href={props.website} target="_blank" rel="noreferrer">
      <img src={props.logo} alt={props.title} className={styles.projectImg} />
    </a>
    <a className={styles.githubLink} href={props.github} target="_blank" rel="noreferrer">
      <img src={github} alt="" />
      <p>View source</p>
    </a>
  </div>
);

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default ProjectCard;
