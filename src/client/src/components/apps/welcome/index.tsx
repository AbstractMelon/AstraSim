import React, { useContext } from 'react';
import styles from '../styles/Desktop.module.css';

const Welcome: React.FC = () => {

  return (
    <div className={styles.desktop}>
        <p>Hello world!</p>
    </div>
  );
};

export default Welcome;
