import React, { Component } from 'react';
import ReposListContainer from '../containers/ReposListContainer';
import SearchButton from '../components/SearchButton';

class TrendingRepos extends Component {
  render() {
    return (
      <div className="container">
        <h1>Today's Trending Repos</h1>
        <ReposListContainer />
        <SearchButton />
      </div>
    );
  }
}

export default TrendingRepos;
