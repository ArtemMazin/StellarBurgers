import React from 'react';

type TProps = {
  children?: React.ReactNode;
};

type TState = {
  hasError: boolean;
};

class ErrorBoundary extends React.Component<TProps, TState> {
  constructor(props: TProps) {
    super(props);
    this.state = { hasError: false };
  }

  // с помощью этого метода меняем стейт компонента при возникновении ошибки:
  static getDerivedStateFromError(): TState {
    return { hasError: true };
  }

  // с помощью этого метода логируем информацию об ошибке:
  componentDidCatch(error: Error, info: React.ErrorInfo) {
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

export default ErrorBoundary;
