import { useState, useCallback, MouseEvent } from 'react';

type Position = {
  x: number;
  y: number;
};

const useDraggable = () => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);

  const dragStart = useCallback((event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragging(true);
    const startX = event.clientX - position.x;
    const startY = event.clientY - position.y;

    const onMouseMove = (event: MouseEvent) => {
      setPosition({
        x: event.clientX - startX,
        y: event.clientY - startY,
      });
    };

    const onMouseUp = () => {
      setDragging(false);
      window.removeEventListener('mousemove', onMouseMove as any);
      window.removeEventListener('mouseup', onMouseUp);
    };

    window.addEventListener('mousemove', onMouseMove as any);
    window.addEventListener('mouseup', onMouseUp);
  }, [position]);

  const dragEnd = () => setDragging(false);

  return { position, dragStart, dragging, dragEnd };
};

export default useDraggable;
