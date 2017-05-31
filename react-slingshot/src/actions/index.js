import GithubApi from '../api/GithubAPI';

function receiveRepos(json){
  return {
    type: 'RECEIVE_POSTS',
    repos: json
  };
}

export function fetchRepos(language) {
  return dispatch => {
    return GithubApi.getAllRepos(language)
      .then(json => dispatch(receiveRepos(json)));
  };
}
