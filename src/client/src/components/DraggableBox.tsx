import React, { ReactNode } from 'react';
import useDraggable from '../hooks/useDraggable';
import styles from '../styles/DraggableBox.module.css';

type DraggableBoxProps = {
  children: ReactNode;
};

const DraggableBox: React.FC<DraggableBoxProps> = ({ children }) => {
  const { position, dragStart, dragging, dragEnd } = useDraggable();

  return (
    <div
      className={`${styles.draggableBox} ${dragging ? styles.dragging : ''}`}
      style={{ left: position.x, top: position.y }}
      onMouseDown={dragStart}
      onMouseUp={dragEnd}
    >
      {children}
    </div>
  );
};

export default DraggableBox;
