import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import {fetchRepos} from '../actions';

class SearchButton extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.dispatch(fetchRepos(this.refs.searchTerm.value));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          ref="searchTerm"
          type="text"
          name="searchTerm"
          placeholder="Language Search..."
        />
        <button
          className="btn btn-primary"
          type="submit"
          >
          Search
        </button>
      </form>
    );
  }
}
SearchButton.propTypes = {
  dispatch : PropTypes.func.isRequired
}

export default connect()(SearchButton);
