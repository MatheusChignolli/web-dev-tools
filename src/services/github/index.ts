import {
  getReleasesFromRepoRequest,
  getReleasesFromRepoResponse,
} from './interfaces'

const path = 'https://api.github.com'
const headers = {
  Accept: 'application/vnd.github.v3+json',
  Authorization: `token ${process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN}`,
}

const githubServices = {
  repoConfig: {
    owner: 'MatheusChignolli',
    repo: 'web-dev-tools',
  },
  async getReleasesFromRepo({
    owner,
    repo,
  }: getReleasesFromRepoRequest): Promise<getReleasesFromRepoResponse[]> {
    return await fetch(`${path}/repos/${owner}/${repo}/releases`, {
      headers,
    }).then((res) => res.json())
  },
}

export default githubServices
