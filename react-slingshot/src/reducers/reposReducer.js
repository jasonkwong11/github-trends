import initialState from './initialState';

export default function reposReducer(state = initialState.repos, action) {
  switch (action.type) {
    case 'RECEIVE_POSTS':
      return action.repos;
    default:
      return state;
  }
}
