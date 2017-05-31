import GithubApi from '../api/GithubAPI';

function receiveRepos(json){
  return {
    type: 'RECEIVE_POSTS',
    repos: json
  };
}

export function fetchRepos() {
  return dispatch => {
    return GithubApi.getAllRepos()
      .then(json => dispatch(receiveRepos(json)));
  };
}
