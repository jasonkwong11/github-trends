import React, { Component } from 'react';
import { connect } from 'react-redux';

const ReposList = ({repos}) => {
  return (
    <h1> {repos.length} </h1>
  );
}

const mapStateToProps = (state) => {
  return {
    repos: state.repos
  };
};

const ReposListContainer = connect(mapStateToProps)(ReposList);

export default ReposListContainer;
