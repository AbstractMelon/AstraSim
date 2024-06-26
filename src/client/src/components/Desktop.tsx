import React, { useContext } from 'react';
import AppWindow from './AppWindow';
import { AppContext } from '../context/AppContext';
import styles from '../styles/Desktop.module.css';


const Desktop: React.FC = () => {
  const { apps } = useContext(AppContext);

  return (
    <div className={styles.desktop}>
      {/* {apps.map((app, index) => (
        <AppWindow key={index} app={app} />
      ))} */}
      {apps.map((app, index) => (
        <AppWindow key={index} app={app} />
      ))}
      {/*
      <AppWindow app={{
              name: 'Test',
              content: 'Hello world!'
          }} />
        */}
    </div>
  );
};

export default Desktop;
