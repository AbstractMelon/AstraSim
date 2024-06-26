import React from 'react';
import styles from '../styles/Taskbar.module.css';

const Taskbar: React.FC = () => {
  return (
    <div className={styles.taskbar}>
      <div className={styles.startButton}>Start</div>
    </div>
  );
};

export default Taskbar;
