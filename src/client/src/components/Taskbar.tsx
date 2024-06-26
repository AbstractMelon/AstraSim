import React, { useContext } from 'react';
import styles from '../styles/Taskbar.module.css';
import { AppContext } from '../context/AppContext';
import { RiGridFill } from 'react-icons/ri';

const Taskbar: React.FC = () => {
  const { apps, setApps } = useContext(AppContext);

  const openApp = () => {
    const appName = window.prompt('Enter the app name:', 'New App');
    if (!appName) return; 

    const appContent = window.prompt('Enter the app content:', 'New content here');
    if (!appContent) return; 

    const newApp = { name: appName, content: appContent };
    setApps([...apps, newApp]);
  };

  return (
    <div className={styles.taskbar}>
      <div className={styles.startButton} onClick={openApp}>
        <RiGridFill /> Start app
      </div>
    </div>
  );
};

export default Taskbar;
