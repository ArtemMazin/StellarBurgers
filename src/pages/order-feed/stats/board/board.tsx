import React from 'react';
import styles from './board.module.css';

const Board = () => {
  return (
    <div className={styles.board}>
      <div>
        <h2 className="mb-6 text text_type_main-medium">Готовы:</h2>
        <ul className={`${styles.numbers} ${styles.numbers_accent}`}>
          <li>
            <span className="text text_type_digits-default">034533</span>
          </li>
          <li>
            <span className="text text_type_digits-default">034533</span>
          </li>
          <li>
            <span className="text text_type_digits-default">034533</span>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="mb-6 text text_type_main-medium">В работе:</h2>
        <ul className={styles.numbers}>
          <li>
            <span className="text text_type_digits-default">034538</span>
          </li>
          <li>
            <span className="text text_type_digits-default">034538</span>
          </li>
          <li>
            <span className="text text_type_digits-default">034538</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Board;
