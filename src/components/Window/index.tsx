import React, { Component } from 'react';

import styles from './Window.module.css';

type Coords = {
  top: number;
  left: number;
};

interface IProps {
  title: string;
  top: number;
  left: number;
  onSave: (coords: Coords) => void;
  onClose: () => void;
}

class Window extends Component<IProps> {
  private mainEl = React.createRef<HTMLDivElement>();
  private headerEl = React.createRef<HTMLDivElement>();
  private shiftX!: number;
  private shiftY!: number;

  drag = (event: MouseEvent) => {
    const TOP_LIMIT = 24;
    const left = event.pageX - this.shiftX;
    let top = event.pageY - this.shiftY;

    if (top < TOP_LIMIT) {
      top = TOP_LIMIT;
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

    this.props.onSave({
      top: parseInt(this.mainEl.current!.style.top, 10),
      left: parseInt(this.mainEl.current!.style.left, 10)
    });
  };

  startDrag = (event: React.MouseEvent) => {
    if (event.button !== 0) return;

    this.shiftX = event.clientX - this.mainEl.current!.getBoundingClientRect().left;
    this.shiftY = event.clientY - this.mainEl.current!.getBoundingClientRect().top;

    document.addEventListener('mousemove', this.drag);
    document.addEventListener('mouseup', this.stopDrag);
  };

  componentWillUnmount() {
    this.clear();
  }

  render() {
    const { title, children, top, left, onClose } = this.props;
    return (
      <div className={styles.main} ref={this.mainEl} style={{ top, left }}>
        <div className={styles.header} ref={this.headerEl} onMouseDown={this.startDrag}>
          <h2 className={styles.title} draggable="false">
            {title}
          </h2>
          <div className={styles.decor} />
          <button className={styles.close} onClick={onClose} />
        </div>
        <div className={styles.body}>{children}</div>
      </div>
    );
  }
}

export default Window;
