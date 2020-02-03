import React from 'react';
import { CSSTransition } from 'react-transition-group';

interface IWithOpenProps {
  isOpen: boolean;
}

export default (timeout: number, classNames: string) => <P extends object>(WrappedComponent: React.ComponentType<P>) =>
  class withTransition extends React.Component<P & IWithOpenProps> {
    render() {
      const { isOpen, ...props } = this.props;
      return (
        <CSSTransition in={isOpen} timeout={timeout} classNames={classNames} unmountOnExit>
          <WrappedComponent {...(props as P)} />
        </CSSTransition>
      );
    }
  };
