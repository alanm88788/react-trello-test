import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import Card from './card';
import styles from './card-list.module.scss';

const CardList = ({ title, cards, index }) => {
  return (
    <Draggable draggableId={title} index={index}>
      {(provided) => (
        <div ref={provided.innerRef} {...provided.draggableProps} className={styles.container}>
          <div className={styles.header}>
            <h1 {...provided.dragHandleProps}>{title}</h1>
          </div>

          <Droppable droppableId={title} type='CARD'>
            {(dropProvided) => (
              <div {...dropProvided.droppableProps} className={styles.list}>
                <div ref={dropProvided.innerRef} className={styles.dropZone}>
                  {cards.map((card, index) => (
                    <Draggable key={card.id} draggableId={card.id} index={index}>
                      {(dragProvided, dragSnapshot) => (
                        <Card key={card.id} card={card} isDragging={dragSnapshot.isDragging} provided={dragProvided} />
                      )}
                    </Draggable>
                  ))}
                  {dropProvided.placeholder}
                </div>
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
};

export default CardList;
