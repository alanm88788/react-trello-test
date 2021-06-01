// @flow
import React from "react";
import styles from "./quote-item.module.scss";

const getBackgroundColor = (isDragging, isGroupedOver, authorColors) => {
  if (isDragging) {
    return authorColors.soft;
  }

  if (isGroupedOver) {
    return "#ebecf0";
  }

  return "#ffffff";
};

const getBorderColor = (isDragging, authorColors) =>
  isDragging ? authorColors.hard : "transparent";

function getStyle(provided, style) {
  if (!style) {
    return provided.draggableProps.style;
  }

  return {
    ...provided.draggableProps.style,
    ...style,
  };
}

function QuoteItem(props) {
  const { quote, isDragging, isGroupedOver, provided, style, isClone, index } =
    props;

  return (
    <a
      className={styles.container}
      href={quote.author.url}
      isClone={isClone}
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      style={{
        ...getStyle(provided, style),
        borderColor: getBorderColor(props.isDragging, quote.author.colors),
        backgroundColor: getBackgroundColor(
          isDragging,
          isGroupedOver,
          quote.author.colors
        ),
        boxShadow: isDragging ? "2px 2px 1px #a5adba" : "none",
      }}
      data-is-dragging={isDragging}
      data-testid={quote.id}
      data-index={index}
      aria-label={`${quote.author.name} quote ${quote.content}`}
    >
      <img
        src={quote.author.avatarUrl}
        alt={quote.author.name}
        className={styles.avatar}
      />
      {isClone ? <div className={styles.cloneBadge}>Clone</div> : null}
      <div className={styles.content}>
        <div className={styles.blockQuote}>{quote.content}</div>
        <div className={styles.footer}>
          <small
            colors={quote.author.colors}
            className={styles.author}
            style={{
              color: quote.author.colors,
              backgroundColor: quote.author.colors.soft,
            }}
          >
            {quote.author.name}
          </small>
          <small className={styles.quoteId}>id:{quote.id}</small>
        </div>
      </div>
    </a>
  );
}

export default React.memo(QuoteItem);
