import React from 'react';
import styles from './styles/Header.module.scss';

const Header = () => {
  return (
    <header
      style={{
        padding: '20px 0',
        lineHeight: '1.5em',
        color: '#aeadad',
        textAlign: 'center',
      }}
      className={styles.header}
    >
      <h1>Todo App</h1>
    </header>
  );
}

export default Header