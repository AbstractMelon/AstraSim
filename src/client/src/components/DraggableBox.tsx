import React, { ReactNode, useRef } from 'react';
import useDraggable from '../hooks/useDraggable';
import styles from '../styles/DraggableBox.module.css';

type DraggableBoxProps = {
  children: ReactNode;
  onMouseDown: (e: React.MouseEvent<HTMLDivElement>) => void;
};

const DraggableBox: React.FC<DraggableBoxProps> = ({ children, onMouseDown }) => {
  const { position, dragStart, dragging, dragEnd } = useDraggable();

  return (
    <div
      className={`${styles.draggableBox} ${dragging ? styles.dragging : ''}`}
      style={{ left: position.x, top: position.y }}
      onMouseDown={dragStart}
      onMouseUp={dragEnd}
    >
      <div onMouseDown={onMouseDown}>
        {children}
      </div>
    </div>
  );
};

export default DraggableBox;
