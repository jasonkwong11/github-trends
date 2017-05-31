import { connect } from 'react-redux';
import ReposList from '../components/ReposList';

const mapStateToProps = (state) => {
  return {
    repos: state.repos
  };
};

const ReposListContainer = connect(mapStateToProps)(ReposList);

export default ReposListContainer;
