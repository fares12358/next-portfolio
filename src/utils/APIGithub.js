
export const getDataFromGithub = async () => {
  const GITHUB_TOKEN= process.env.NEXT_PUBLIC_API_KEY; // Use environment variable for token
  const username = 'fares12358';
  const headers = { Authorization: `token ${GITHUB_TOKEN}` };

  const fetchWithErrorHandling = async (url) => {
    const response = await fetch(url, { headers });
    if (!response.ok) {
      throw new Error(`Failed to fetch from ${url}: ${response.statusText}`);
    }
    return await response.json();
  };

  try {
    // Fetch user account details
    const userAccount = await fetchWithErrorHandling(`https://api.github.com/users/${username}`);

    // Fetch user repositories
    const repositories = await fetchWithErrorHandling(`https://api.github.com/users/${username}/repos`);

    // Fetch commits for each repository
    const commitCounts = await Promise.all(
      repositories.map(async (repo) => {
        const commits = await fetchWithErrorHandling(`https://api.github.com/repos/${username}/${repo.name}/commits`);
        return {
          repoName: repo.name,
          commitCount: commits.length, // Count of commits
        };
      })
    );

    // Calculate total commits
    const totalCommits = commitCounts.reduce((total, repo) => total + repo.commitCount, 0);

    return [userAccount, totalCommits]; // Final result
  } catch (error) {
    throw new Error('Failed to fetch data from GitHub');
  }
};
