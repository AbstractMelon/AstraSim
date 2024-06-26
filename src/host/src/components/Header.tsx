import React from 'react';
import styles from '../styles/Header.module.css';
import { FaHome } from 'react-icons/fa'; 

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <FaHome className={styles.icon} />
      <h1 className={styles.title}>Astra OS Host Dashboard</h1>
    </header>
  );
};

export default Header;
