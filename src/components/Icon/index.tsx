import React, { Component } from 'react';

import styles from './Icon.module.css';

interface IProps {
  title: string;
  top: number;
  left: number;
}
interface IState {
  shift: any;
}

class Icon extends Component<IProps, IState> {
  private mainEl = React.createRef<HTMLDivElement>();
  private documentWidth!: number;
  private documentHeight!: number;

  state = {
    shift: { x: 0, y: 0 }
  };

  drag = (event: any) => {
    const { shift } = this.state;

    const TOP_LIMIT = 32;
    const LEFT_LIMIT = 8;
    const RIGHT_LIMIT = this.documentWidth - 92;
    const BOTTOM_LIMIT = this.documentHeight - 68;

    let left = event.pageX - shift.x;
    let top = event.pageY - shift.y;

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

  clear = () => {
    document.removeEventListener('mousemove', this.drag);
    document.removeEventListener('mouseup', this.stopDrag);
  };

  stopDrag = () => {
    this.mainEl.current!.style.cursor = 'pointer';
    this.clear();
  };

  startDrag = (event: any) => {
    if (event.button !== 0) return;

    const { width, height } = document.documentElement.getClientRects()[0];
    this.documentWidth = width;
    this.documentHeight = height;

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
    const { title, top, left } = this.props;
    return (
      <div className={styles.main} ref={this.mainEl} style={{ top, left }} onMouseDown={this.startDrag}>
        <button>test</button>
        <span>{title}</span>
      </div>
    );
  }
}

export default Icon;
