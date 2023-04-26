import React from 'react';
import styles from './styles.module.scss';
import worm from './worm.svg';

const Worm = () => {
  return <img className={styles.root} src={worm} />;
};

export default Worm;
