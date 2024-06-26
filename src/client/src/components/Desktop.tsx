import React, { useContext } from 'react';
import AppWindow from './AppWindow';
import { AppContext } from '../context/AppContext';
import styles from '../styles/Desktop.module.css';

const Desktop: React.FC = () => {
  const { apps } = useContext(AppContext);

  return (
    <div className={styles.desktop}>
      {apps.map((app: { name: string; content: string; }, index: React.Key | null | undefined) => (
        <AppWindow key={index} app={app} />
      ))}
    </div>
  );
};

export default Desktop;
