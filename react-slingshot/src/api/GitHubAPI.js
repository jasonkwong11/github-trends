class GithubApi {
  static getAllRepos(language) {
    let dateFrom = (new Date()).toISOString().slice(0, 10);
    let languageQuery = language ? `+language:${language}` : "";

    return fetch(`https://api.github.com/search/repositories?q=created:>=${dateFrom + languageQuery}&sort=stars&order=desc&per_page=10`)
      .then(response => response.json())
      .then(json => json.items);
  }
}

export default GithubApi;
