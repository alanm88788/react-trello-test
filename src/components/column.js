// @flow
import React, { Component } from "react";
import { Draggable } from "react-beautiful-dnd";
import QuoteList from "../primatives/quote-list";
import styles from "./column.module.scss";

export default class Column extends Component {
  render() {
    const title = this.props.title;
    const quotes = this.props.quotes;
    const index = this.props.index;
    return (
      <Draggable draggableId={title} index={index}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            className={styles.container}
            {...provided.draggableProps}
          >
            <div
              className={styles.header}
              style={{
                backgroundColor: pshot.isDragging ? "#e3fcef" : "#ebecf0",
              }}
            >
              <h4
                className={styles.title}
                isDragging={snapshot.isDragging}
                {...provided.dragHandleProps}
                aria-label={`${title} quote list`}
              >
                {title}
              </h4>
            </div>
            <QuoteList
              listId={title}
              listType="QUOTE"
              style={{
                backgroundColor: snapshot.isDragging ? "#e3fcef" : null,
              }}
              quotes={quotes}
              internalScroll={this.props.isScrollable}
              isCombineEnabled={Boolean(this.props.isCombineEnabled)}
              useClone={Boolean(this.props.useClone)}
            />
          </div>
        )}
      </Draggable>
    );
  }
}
