import React, { useContext } from 'react';
import styles from '../styles/Desktop.module.css';

import {AppInfoType} from '../AppAPI';
import icon from './icon.png';

export const AppInfo: AppInfoType = {
  name: 'Welcome',
  icon: icon
} 

const Welcome: React.FC = () => {

  return (
    <div className={styles.desktop}>
        <p>Hello world!</p>
    </div>
  );
};

export default Welcome;
