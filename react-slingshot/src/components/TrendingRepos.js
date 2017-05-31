import React, { Component } from 'react';
import ReposListContainer from '../containers/ReposListContainer'

class TrendingRepos extends Component {
  render() {
    return (
      <div className="container">
        <h1>Today's Trending Repos</h1>
        <ReposListContainer />
      </div>
    );
  }
}

export default TrendingRepos;
