import React from 'react';
import styles from '../styles/Button.module.css';
import { FaUserCheck } from 'react-icons/fa';

const AssignClientsButton: React.FC = () => {
  const handleAssignClients = () => {
  };

  return (
    <button className={styles.button} onClick={handleAssignClients}>
      <FaUserCheck className={styles.icon} />
      Assign Clients
    </button>
  );
};

export default AssignClientsButton;
