import React, { useEffect, useState } from 'react';
import styles from '../styles/Footer.module.css';
import {AppInfoType} from '../AppAPI';

import icon from './icon.png';

export const AppInfo: AppInfoType = {
  name: 'Clock',
  icon: icon
} 

const Clock: React.FC = () => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.footer}>
      <div className={styles.time}>{time}</div>
    </div>
  );
};

export default Clock;
