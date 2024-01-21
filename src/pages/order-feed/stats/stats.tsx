import React from 'react';
import styles from './stats.module.css';
import Board from './board/board';

const Stats = () => {
  return (
    <section className={styles.stats}>
      <Board />
      <div>
        <h2 className="text text_type_main-medium">Выполнено за все время:</h2>
        <div className="text text_type_digits-large">28 752</div>
      </div>
      <div>
        <h2 className="text text_type_main-medium">Выполнено за сегодня:</h2>
        <div className="text text_type_digits-large">138</div>
      </div>
    </section>
  );
};

export default Stats;
