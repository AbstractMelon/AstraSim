import React, { ReactNode, useRef } from 'react';
import useDraggable from '../hooks/useDraggable';
import styles from '../styles/DraggableBox.module.css';

type DraggableBoxProps = {
  children: ReactNode;
};

const DraggableBox: React.FC<DraggableBoxProps> = ({ children }) => {
  const { position, dragStart, dragging, dragEnd } = useDraggable();
  const boxHeaderRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (boxHeaderRef.current && boxHeaderRef.current.contains(e.target as Node)) {
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
      {children}
    </div>
  );
};

export default DraggableBox;
    