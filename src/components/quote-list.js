// @flow
import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import QuoteItem from "./quote-item";
import styles from "./quote-item.module.scss";

const getBackgroundColor = (isDraggingOver, isDraggingFrom) => {
  if (isDraggingOver) {
    return "#ffebe6";
  }
  if (isDraggingFrom) {
    return "#e6fcff";
  }
  return "#ebecf0";
};

const InnerQuoteList = React.memo(function InnerQuoteList(props) {
  return props.quotes.map((quote, index) => (
    <Draggable key={quote.id} draggableId={quote.id} index={index}>
      {(dragProvided, dragSnapshot) => (
        <QuoteItem
          key={quote.id}
          quote={quote}
          isDragging={dragSnapshot.isDragging}
          isGroupedOver={Boolean(dragSnapshot.combineTargetFor)}
          provided={dragProvided}
        />
      )}
    </Draggable>
  ));
});

const InnerList = (props) => {
  const { quotes, dropProvided } = props;
  const title = props.title ? (
    <h4 className={styles.title}>{props.title}</h4>
  ) : null;

  return (
    <div>
      {title}
      <div ref={dropProvided.innerRef} className={styles.dropZone}>
        <InnerQuoteList quotes={quotes} />
        {dropProvided.placeholder}
      </div>
    </div>
  );
};

export default function QuoteList(props) {
  const {
    ignoreContainerClipping,
    internalScroll,
    scrollContainerStyle,
    isDropDisabled,
    isCombineEnabled,
    listId = "LIST",
    listType,
    style,
    quotes,
    title,
    useClone,
  } = props;

  return (
    <Droppable
      droppableId={listId}
      type={listType}
      ignoreContainerClipping={ignoreContainerClipping}
      isDropDisabled={isDropDisabled}
      isCombineEnabled={isCombineEnabled}
      renderClone={
        useClone
          ? (provided, snapshot, descriptor) => (
              <QuoteItem
                quote={quotes[descriptor.source.index]}
                provided={provided}
                isDragging={snapshot.isDragging}
                isClone
              />
            )
          : null
      }
    >
      {(dropProvided, dropSnapshot) => (
        <div
          className={styles.wrapper}
          style={{
            ...style,
            backgroundColor: getBackgroundColor(
              dropSnapshot.isDraggingOve,
              Boolean(dropSnapshot.draggingFromThisWith)
            ),
            opacity: isDropDisabled ? 0.5 : "inherit",
          }}
          {...dropProvided.droppableProps}
        >
          {internalScroll ? (
            <div
              className={styles.scrollContainer}
              style={scrollContainerStyle}
            >
              <InnerList
                quotes={quotes}
                title={title}
                dropProvided={dropProvided}
              />
            </div>
          ) : (
            <InnerList
              quotes={quotes}
              title={title}
              dropProvided={dropProvided}
            />
          )}
        </div>
      )}
    </Droppable>
  );
}
