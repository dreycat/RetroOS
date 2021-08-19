import { Component, createRef } from 'react';

import { withTransition } from '../../hocs/withTransition';
import { getStorageData } from '../../utils/getStorageData';
import { ICoords } from '../../interfaces';
import { Apps } from '../../types';
import styles from './Window.module.css';

interface IProps {
  name: Apps;
  label: string;
  onClose: () => void;
  defaultPosition: ICoords;
}

class Window extends Component<IProps> {
  private mainEl = createRef<HTMLDivElement>();
  private headerEl = createRef<HTMLDivElement>();
  private shiftX = 0;
  private shiftY = 0;

  startDrag = (event: React.MouseEvent) => {
    if (event.button !== 0) return;

    this.shiftX = event.clientX - this.mainEl.current!.getBoundingClientRect().left;
    this.shiftY = event.clientY - this.mainEl.current!.getBoundingClientRect().top;

    document.addEventListener('mousemove', this.drag);
    document.addEventListener('mouseup', this.stopDrag);

    this.calculateIndex();
  };

  drag = (event: MouseEvent) => {
    const TOP_LIMIT = 24;
    const left = event.pageX - this.shiftX;
    let top = event.pageY - this.shiftY;

    if (top < TOP_LIMIT) {
      top = TOP_LIMIT;
    }

    this.applyCoords({ top, left });
    this.headerEl.current!.style.cursor = 'grabbing';
  };

  stopDrag = () => {
    this.headerEl.current!.style.cursor = 'grab';
    this.savePosition();
    this.clear();
  };

  clear = () => {
    document.removeEventListener('mousemove', this.drag);
    document.removeEventListener('mouseup', this.stopDrag);
  };

  calculateIndex = () => {
    const { name } = this.props;
    const raw = localStorage.getItem('z_index');

    if (raw) {
      const data = JSON.parse(raw);
      const indexes: number[] = Object.values(data);
      const maxIndex = Math.max(...indexes);
      const index = maxIndex + 1;

      this.saveIndex({ ...data, [name]: index });
      this.applyIndex(index);
    } else {
      const index = 100;

      this.saveIndex({ [name]: index });
      this.applyIndex(index);
    }
  };

  setPositionFromStorage = () => {
    const coords = getStorageData<ICoords>(`${this.props.name}_window_coords`, this.props.defaultPosition);
    this.applyCoords(coords);
  };

  savePosition = () => {
    localStorage.setItem(
      `${this.props.name}_window_coords`,
      JSON.stringify({
        top: parseInt(this.mainEl.current!.style.top, 10),
        left: parseInt(this.mainEl.current!.style.left, 10),
      })
    );
  };

  saveIndex = (data: object) => {
    localStorage.setItem('z_index', JSON.stringify(data));
  };

  applyIndex = (index: number) => {
    if (this.mainEl.current) {
      this.mainEl.current.style.zIndex = `${index}`;
    }
  };

  applyCoords = ({ left, top }: ICoords) => {
    this.mainEl.current!.style.left = `${left}px`;
    this.mainEl.current!.style.top = `${top}px`;
  };

  componentDidMount() {
    this.setPositionFromStorage();
    this.calculateIndex();
  }

  componentWillUnmount() {
    this.clear();
  }

  render() {
    const { label, children, onClose, name } = this.props;
    return (
      <div
        className={styles.main}
        ref={this.mainEl}
        onContextMenu={(e) => e.preventDefault()}
        onClick={this.calculateIndex}
      >
        <div className={styles.header} ref={this.headerEl} onMouseDown={this.startDrag}>
          <h2 className={styles.name} draggable="false">
            {label}
          </h2>
          <div className={styles.decor} />
          <button
            className={styles.close}
            onClick={onClose}
            autoFocus
            type="button"
            aria-label={`close ${name} application`}
          />
        </div>
        <div className={styles.body}>{children}</div>
      </div>
    );
  }
}

export default withTransition(300, 'window')(Window);
