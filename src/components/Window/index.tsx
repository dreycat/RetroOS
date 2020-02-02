import React, { Component } from 'react';

import withTransition from '../../hocs/withTransition';
import { Coords } from '../../interfaces/coords';
import styles from './Window.module.css';
import getStarogeData from '../../utils/getStarogeData';

interface IProps {
  name: string;
  onClose: () => void;
  defaultPosition: Coords;
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

  setPosition = () => {
    const { top, left } = getStarogeData<Coords>(
      `${this.props.name.toLowerCase()}_window_coords`,
      this.props.defaultPosition
    )();
    this.mainEl.current!.style.left = `${left}px`;
    this.mainEl.current!.style.top = `${top}px`;
  };

  savePosition = () => {
    localStorage.setItem(
      `${this.props.name.toLowerCase()}_window_coords`,
      JSON.stringify({
        top: parseInt(this.mainEl.current!.style.top, 10),
        left: parseInt(this.mainEl.current!.style.left, 10)
      })
    );
  };

  stopDrag = () => {
    this.headerEl.current!.style.cursor = 'grab';
    this.savePosition();
    this.clear();
  };

  startDrag = (event: React.MouseEvent) => {
    if (event.button !== 0) return;

    this.shiftX = event.clientX - this.mainEl.current!.getBoundingClientRect().left;
    this.shiftY = event.clientY - this.mainEl.current!.getBoundingClientRect().top;

    document.addEventListener('mousemove', this.drag);
    document.addEventListener('mouseup', this.stopDrag);
  };

  componentDidMount() {
    this.setPosition();
  }

  componentWillUnmount() {
    this.clear();
  }

  render() {
    const { name, children, onClose } = this.props;
    return (
      <div className={styles.main} ref={this.mainEl} onContextMenu={e => e.preventDefault()}>
        <div className={styles.header} ref={this.headerEl} onMouseDown={this.startDrag}>
          <h2 className={styles.name} draggable="false">
            {name}
          </h2>
          <div className={styles.decor} />
          <button className={styles.close} onClick={onClose} />
        </div>
        <div className={styles.body}>{children}</div>
      </div>
    );
  }
}

export default withTransition(300, 'window')(Window);
