import { useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import CardList from './card-list';
import styles from './board.module.scss';

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

const reorderCardMap = ({ cardMap, source, destination }) => {
  const current = [...cardMap[source.droppableId]];
  const next = [...cardMap[destination.droppableId]];
  const target = current[source.index];

  if (source.droppableId === destination.droppableId) {
    return {
      cardMap: {
        ...cardMap,
        [source.droppableId]: reorder(current, source.index, destination.index),
      },
    };
  }

  current.splice(source.index, 1);
  next.splice(destination.index, 0, target);

  return {
    cardMap: {
      ...cardMap,
      [source.droppableId]: current,
      [destination.droppableId]: next,
    },
  };
};

const Board = ({ initial }) => {
  const [columns, setColumns] = useState(initial);
  const [ordered, setOrdered] = useState(Object.keys(initial));

  const onDragEnd = (result) => {
    const { source, destination, type } = result;

    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId && source.index === destination.index) {
      return;
    }

    if (type === 'COLUMN') {
      const newOrdered = reorder(ordered, source.index, destination.index);
      setOrdered(newOrdered);
      return;
    }

    const data = reorderCardMap({
      cardMap: columns,
      source,
      destination,
    });

    setColumns(data.cardMap);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId='board' type='COLUMN' direction='horizontal'>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps} className={styles.container}>
            {ordered.map((key, index) => (
              <CardList key={key} index={index} title={key} cards={columns[key]} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Board;
