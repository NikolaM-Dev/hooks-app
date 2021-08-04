import { useEffect, useState } from 'react';

const Message = () => {
  const [coors, setCoors] = useState({ x: 0, y: 0 });
  const { x, y } = coors;

  useEffect(() => {
    const mouseMove = (evt) => {
      const coors = { x: evt.x, y: evt.y };
      setCoors(coors);
    };

    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  return (
    <>
      <h3>Eres genial</h3>
      <p>
        x: {x}, y: {y}
      </p>
    </>
  );
};

export default Message;
