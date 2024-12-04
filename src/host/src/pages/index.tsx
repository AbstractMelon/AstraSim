import React from 'react';
import styles from '../styles/HomeScreen.module.css';
import CreateFlightButton from '../components/CreateFlightButton';
import FlightListButton from '../components/FlightListButton';
import AssignClientsButton from '../components/AssignClientsButton';
import Header from '../components/Header';

const HomeScreen: React.FC = () => {
  return (
    <>
    <Header />
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Welcome to Astrasim!</h1>
        <div className={styles.buttonContainer}>
          <CreateFlightButton />
          <FlightListButton />
          <AssignClientsButton />
        </div>
      </div>
    </div>
    </>
  );
};

export default HomeScreen;
