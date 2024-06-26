import React from 'react';
import styles from '../styles/Button.module.css';
import { FaPlane } from 'react-icons/fa';


const CreateFlightButton: React.FC = () => {
  const handleCreateFlight = () => {
  };

  return (
    <button className={styles.button} onClick={handleCreateFlight}>
      <FaPlane className={styles.icon} />
      Create Flight
    </button>
  );
};

export default CreateFlightButton;
