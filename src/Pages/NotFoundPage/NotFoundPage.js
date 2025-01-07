import React from 'react';
import styles from './NotFoundPage.module.css';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>404!</h1>
      <p className={styles.message}>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className={styles.link}>Go Back to Home</Link>
    </div>
  );
};
