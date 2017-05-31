class GithubApi {
  static getAllRepos() {
    let dateFrom = (new Date()).toISOString().slice(0, 10);

    return fetch(`https://api.github.com/search/repositories?q=created:>=${dateFrom}&sort=stars&order=desc&per_page=10`)
      .then(response => response.json())
      .then(json => json.items);
  }
}

export default GithubApi;
