import React from 'react';
import PropTypes from 'prop-types';
import ingredientPropTypes from '@/utils/prop-types';

function Switch({ element, children }) {
  let renderComponent;

  if (Array.isArray(element)) {
    renderComponent = element.length > 0 ? children[0] : children[1];
  } else {
    renderComponent = element ? children[0] : children[1];
  }

  return <>{renderComponent}</>;
}

export default Switch;

Switch.propTypes = {
  element: PropTypes.oneOfType([
    PropTypes.arrayOf(ingredientPropTypes).isRequired,
    ingredientPropTypes.isRequired,
  ]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
    PropTypes.elementType,
  ]),
};
