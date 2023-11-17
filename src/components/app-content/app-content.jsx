/* eslint-disable implicit-arrow-linebreak */
import React from 'react';
import styles from './app-content.module.css';
import Tabs from './burger-ingredients/tabs/tabs';
import DATA from '../../utils/data';

function AppContent() {
  const buns = React.useMemo(
    () => DATA.filter((item) => item.type === 'bun' && item),
    [DATA.length],
  );
  const sauces = React.useMemo(
    () => DATA.filter((item) => item.type === 'sauce' && item),
    [DATA.length],
  );
  const main = React.useMemo(
    () => DATA.filter((item) => item.type === 'main' && item),
    [DATA.length],
  );

  return (
    <main className={`${styles.content} pl-5 pr-5`}>
      <section className={styles.ingredients}>
        <h1 className="text text_type_main-large pt-10 pb-5">Соберите бургер</h1>
        <Tabs />
        <ul>
          <li>
            <h2>Булки</h2>
            <ul>
              {buns.map((item) => (
                <li key={item._id}>
                  <img src={item.image} alt={item.name} />
                  <div>{item.price}</div>
                  <h3>{item.name}</h3>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <h2>Соусы</h2>
            <ul>
              {sauces.map((item) => (
                <li key={item._id}>
                  <img src={item.image} alt={item.name} />
                  <div>{item.price}</div>
                  <h3>{item.name}</h3>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <h2>Начинки</h2>
            <ul>
              {main.map((item) => (
                <li key={item._id}>
                  <img src={item.image} alt={item.name} />
                  <div>{item.price}</div>
                  <h3>{item.name}</h3>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </section>
      {/* <section></section> */}
    </main>
  );
}

export default AppContent;
