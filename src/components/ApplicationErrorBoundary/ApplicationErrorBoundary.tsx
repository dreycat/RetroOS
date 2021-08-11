import { Component } from 'react';

import { ReactComponent as ErrorIcon } from './images/error.svg';
import styles from './ApplicationErrorBoundary.module.css';

export class ApplicationErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={styles.main}>
          <ErrorIcon width={80} height={80} />
          <h2>Error!</h2>
        </div>
      );
    }

    return this.props.children;
  }
}
