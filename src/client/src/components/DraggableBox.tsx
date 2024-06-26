import React, { ReactNode, useRef } from 'react';
import useDraggable from '../hooks/useDraggable';
import styles from '../styles/DraggableBox.module.css';

type DraggableBoxProps = {
  children: ReactNode;
  onHeaderMouseDown: (e: React.MouseEvent<HTMLDivElement>) => void;
};

const DraggableBox: React.FC<DraggableBoxProps> = ({ children, onHeaderMouseDown }) => {
  const { position, dragStart, dragging, dragEnd } = useDraggable();

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).dataset.header) {
      dragStart(e);
    }
  };

  return (
    <div
      className={`${styles.draggableBox} ${dragging ? styles.dragging : ''}`}
      style={{ left: position.x, top: position.y }}
      onMouseDown={handleMouseDown}
      onMouseUp={dragEnd}
    >
      <div>
        {children}
      </div>
    </div>
  );
};

export default DraggableBox;
