import React, { Component } from 'react';

import styles from './Icon.module.css';

type Coords = {
  top: number;
  left: number;
};

interface IProps {
  title: string;
  top: number;
  left: number;
  onSave: (coords: Coords) => void;
  onClick: () => void;
}

class Icon extends Component<IProps> {
  private mainEl = React.createRef<HTMLDivElement>();
  private documentWidth!: number;
  private documentHeight!: number;
  private initTop!: number;
  private initLeft!: number;
  private shiftX!: number;
  private shiftY!: number;

  drag = (event: MouseEvent) => {
    const TOP_LIMIT = 32;
    const LEFT_LIMIT = 8;
    const RIGHT_LIMIT = this.documentWidth - 92;
    const BOTTOM_LIMIT = this.documentHeight - 68;

    let left = event.pageX - this.shiftX;
    let top = event.pageY - this.shiftY;

    if (top < TOP_LIMIT) {
      top = TOP_LIMIT;
    }
    if (top > BOTTOM_LIMIT) {
      top = BOTTOM_LIMIT;
    }
    if (left < LEFT_LIMIT) {
      left = LEFT_LIMIT;
    }
    if (left > RIGHT_LIMIT) {
      left = RIGHT_LIMIT;
    }

    this.mainEl.current!.style.left = `${left}px`;
    this.mainEl.current!.style.top = `${top}px`;
    this.mainEl.current!.style.cursor = 'grabbing';
  };

  stopDrag = () => {
    this.mainEl.current!.style.cursor = 'pointer';
    this.clear();
    this.props.onSave({
      top: parseInt(this.mainEl.current!.style.top, 10),
      left: parseInt(this.mainEl.current!.style.left, 10)
    });
  };

  startDrag = (event: React.MouseEvent) => {
    if (event.button !== 0) return;

    this.documentWidth = document.documentElement.getClientRects()[0].width;
    this.documentHeight = document.documentElement.getClientRects()[0].height;

    this.initTop = this.mainEl.current!.getBoundingClientRect().top;
    this.initLeft = this.mainEl.current!.getBoundingClientRect().left;

    this.shiftX = event.clientX - this.mainEl.current!.getBoundingClientRect().left;
    this.shiftY = event.clientY - this.mainEl.current!.getBoundingClientRect().top;

    document.addEventListener('mousemove', this.drag);
    document.addEventListener('mouseup', this.stopDrag);
  };

  clear = () => {
    document.removeEventListener('mousemove', this.drag);
    document.removeEventListener('mouseup', this.stopDrag);
  };

  handleOpen = () => {
    const { top, left } = this.mainEl.current!.getBoundingClientRect();
    if (this.initTop === top && this.initLeft === left) {
      this.props.onClick();
    }
  };

  componentWillUnmount() {
    this.clear();
  }

  render() {
    const { title, top, left } = this.props;
    return (
      <div
        className={styles.main}
        ref={this.mainEl}
        style={{ top, left }}
        onMouseDown={this.startDrag}
        onClick={this.handleOpen}
        onContextMenu={e => e.preventDefault()}
      >
        {this.props.children}
        <span className={styles.title}>{title}</span>
      </div>
    );
  }
}

export default Icon;
