import React from 'react';
import { TIngredient } from '@/utils/types';

type TSwitch = {
  children: JSX.Element[];
  element: TIngredient | TIngredient[];
};

function Switch({ element, children }: TSwitch) {
  let renderComponent;

  if (Array.isArray(element)) {
    renderComponent = element.length > 0 ? children[0] : children[1];
  } else {
    renderComponent = element ? children[0] : children[1];
  }

  return <>{renderComponent}</>;
}

export default Switch;
