import React, { Component } from 'react';

import styles from './Window.module.css';

interface IProps {
  title: string;
  top: number;
  left: number;
}
interface IState {
  shift: any;
}

class Window extends Component<IProps, IState> {
  private mainEl = React.createRef<HTMLDivElement>();
  private headerEl = React.createRef<HTMLDivElement>();

  state = {
    shift: { x: 0, y: 0 }
  };

  drag = (event: any) => {
    const { shift } = this.state;

    const left = event.pageX - shift.x;
    let top = event.pageY - shift.y;

    if (top < 24) {
      top = 24;
    }

    this.mainEl.current!.style.left = `${left}px`;
    this.mainEl.current!.style.top = `${top}px`;
    this.headerEl.current!.style.cursor = 'grabbing';
  };

  clear = () => {
    document.removeEventListener('mousemove', this.drag);
    document.removeEventListener('mouseup', this.stopDrag);
  };

  stopDrag = () => {
    this.headerEl.current!.style.cursor = 'grab';
    this.clear();
  };

  startDrag = (event: any) => {
    if (event.button !== 0) return;

    const x = event.clientX - this.mainEl.current!.getBoundingClientRect().left;
    const y = event.clientY - this.mainEl.current!.getBoundingClientRect().top;

    this.setState({
      shift: { x, y }
    });

    document.addEventListener('mousemove', this.drag);
    document.addEventListener('mouseup', this.stopDrag);
  };

  componentWillUnmount() {
    this.clear();
  }

  render() {
    const { title, children, top, left } = this.props;
    return (
      <div className={styles.main} ref={this.mainEl} style={{ top, left }}>
        <div className={styles.header} ref={this.headerEl} onMouseDown={this.startDrag}>
          <h2 className={styles.title} draggable="false">
            {title}
          </h2>
          <div className={styles.decor} />
          <button className={styles.close} />
        </div>
        <div className={styles.body}>{children}</div>
      </div>
    );
  }
}

export default Window;
