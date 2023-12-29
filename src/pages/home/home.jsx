import React from 'react';
import styles from './home.module.css';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import BurgerIngredients from '@/components/burger-ingredients/burger-ingredients';
import BurgerConstructor from '@/components/burger-constructor/burger-constructor';
import { useResize } from '@/hooks/useResize';
import BurgerOrder from '@/components/burger-constructor/burger-order/burger-order';
import MobileMenu from '@/components/mobile-menu/mobile-menu';
import { useOutletContext } from 'react-router-dom';
import BurgerComponents from '@/components/burger-constructor/burger-components/burger-components';

function Home() {
  const { isMobile } = useResize();

  const [isConstructorOpen] = useOutletContext();

  return (
    <main className={`${styles.content} ${isMobile ? 'pl-2 pr-2' : 'pl-5 pr-5'} container`}>
      <DndProvider backend={HTML5Backend}>
        {isMobile ? (
          <>
            <BurgerIngredients />
            <BurgerOrder />

            <MobileMenu isMenuOpen={isConstructorOpen} title="Заказ">
              <BurgerComponents />
            </MobileMenu>
          </>
        ) : (
          <>
            <BurgerIngredients />
            <BurgerConstructor />
          </>
        )}
      </DndProvider>
    </main>
  );
}

export default Home;
