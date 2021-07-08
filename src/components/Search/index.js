import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import { withRouter } from 'react-router-dom';
import styles from './index.module.scss';

class Search extends Component {
  handleFormSubmit = function ({ query }) {
    this.props.onSubmit(query);
  };

  renderInput(field) {
    // This styling is going to be BAF because the figma component wasn't an 'input' type
    return (
      <input
        className={styles.internalText}
        type="text"
        placeholder="Search"
        {...field.input}
      />
    );
  }

  render() {
    const { handleSubmit } = this.props;
    // it's not broken is bokeh.
    return (
      <form
        className={styles.search}
        onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}
      >
        <div className={styles.inputWrapper}>
          <Field name="query" component={this.renderInput} />
        </div>
      </form>
    );
  }
}

Search = reduxForm({
  form: 'search',
})(Search);

Search = withRouter(Search);

export default Search;
