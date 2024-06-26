import React, { useContext } from 'react';
import styles from '../styles/Taskbar.module.css';
import { AppContext } from '../context/AppContext';
import { RiGridFill } from 'react-icons/ri'; 
import App from 'next/app';
import { allowedNodeEnvironmentFlags } from 'process';

const Taskbar: React.FC = () => {
  const { apps, setApps } = useContext(AppContext);

  const openApp = () => {
    console.log("Opening app: " + App)
    const newApp = { name: 'New App', content: 'New content here' };
    setApps([...apps, newApp]);
    console.log("App openened!")
    alert("App here")
  };

  return (
    <div className={styles.taskbar}>
      <div className={styles.startButton} onClick={openApp}>
        <RiGridFill /> Start
      </div>
      {/*
      <button className={styles.changeTimeButton} onClick={openApp}>
        <RiGridFill /> Open App
      </button>
      */}
    </div>
  );
};

export default Taskbar;
