import React from 'react';
import styles from './mobile-menu.module.css';
import PropTypes from 'prop-types';

function MobileMenu({ isMenuOpen, title, children }) {
  return (
    <div className={`${styles.menu} ${isMenuOpen && styles.menu_open}`}>
      <h2 className="text text_type_main-medium pl-2 pr-2 pt-4 pb-4">{title}</h2>
      {children}
    </div>
  );
}

export default MobileMenu;

MobileMenu.propTypes = {
  title: PropTypes.string.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
    PropTypes.elementType,
  ]),
};
