import React from 'react';
import styles from '../styles/Button.module.css';
import { FaList } from 'react-icons/fa';

const FlightListButton: React.FC = () => {
  const handleFlightList = () => {
  };

  return (
    <button className={styles.button} onClick={handleFlightList}>
      <FaList className={styles.icon} />
      Flight List
    </button>
  );
};

export default FlightListButton;
