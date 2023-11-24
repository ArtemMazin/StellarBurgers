import React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // с помощью этого метода меняем стейт компонента при возникновении ошибки:
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  // с помощью этого метода логируем информацию об ошибке:
  componentDidCatch(error, info) {
    console.log('Возникла ошибка!', error, info);
  }

  render() {
    if (this.state.hasError) {
      // если возникла ошибка, сообщаем об этом пользователю в специальном компоненте:
      return (
        <section>
          <h1>Что-то пошло не так...</h1>
          <p>В приложении произошла ошибка. Пожалуйста, перезагрузите страницу.</p>
        </section>
      );
    }
    // если всё работает штатно, рендерим дочерние компоненты
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
    PropTypes.elementType,
  ]).isRequired,
};

export default ErrorBoundary;
