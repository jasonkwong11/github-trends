import React, {PropTypes} from 'react';
import ReposRow from './ReposRow';
import {fetchRepos} from '../actions';

class ReposList extends React.Component {
  
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.dispatch(fetchRepos());
  }

  render() {
    let {repos} = this.props;

    return (
      <div className="table-responsive">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Avatar</th>
              <th>Fullname</th>
              <th>Stars</th>
              <th>Language</th>
            </tr>
          </thead>
          <tbody>
            {repos.map(repos =>
              <ReposRow key={repos.id} repos={repos} />
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

ReposList.propTypes = {
  dispatch: PropTypes.func.isRequired,
  repos: PropTypes.array.isRequired,
};

export default ReposList;
