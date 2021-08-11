import { Component } from 'react';
import type { ComponentType } from 'react';
import { CSSTransition } from 'react-transition-group';

interface IWithOpenProps {
  isOpen: boolean;
}

export const withTransition =
  (timeout: number, classNames: string) =>
  <P extends object>(WrappedComponent: ComponentType<P>) =>
    class withTransition extends Component<P & IWithOpenProps> {
      render() {
        const { isOpen, ...props } = this.props;
        return (
          <CSSTransition in={isOpen} timeout={timeout} classNames={classNames} unmountOnExit>
            <WrappedComponent {...(props as P)} />
          </CSSTransition>
        );
      }
    };
