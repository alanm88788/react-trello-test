import React from 'react';
import styles from './card.module.scss';

const Card = ({ card, isDragging, provided }) => {
  return (
    <a
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      ref={provided.innerRef}
      style={provided.draggableProps.style}
      className={`${styles.card} ${isDragging && styles.dragging}`}
    >
      {card.content}
    </a>
  );
};

export default React.memo(Card);
