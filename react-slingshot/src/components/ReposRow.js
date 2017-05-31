import React, {PropTypes} from 'react';

class ReposRow extends React.Component {
  render() {
    const {repos} = this.props;

    return (
      <tr>
        <td>
          <img src={repos.owner.avatar_url} width="25" height="25" />
        </td>
        <td>
          {repos.full_name}
        </td>
        <td>
          {repos.stargazers_count}
        </td>
        <td>
          {repos.language}
        </td>
      </tr>
    );
  }
}

ReposRow.propTypes = {
  repos: PropTypes.object.isRequired
};

export default ReposRow;
