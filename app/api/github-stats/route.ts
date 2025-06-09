const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

export async function GET() {
  try {
    const username = "elcascavel";

    const headers: HeadersInit = GITHUB_TOKEN
      ? { Authorization: `token ${GITHUB_TOKEN}` }
      : {};

    const [userResponse, reposResponse] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`, { headers }),
      fetch(`https://api.github.com/users/${username}/repos?per_page=100`, {
        headers,
      }),
    ]);

    if (!userResponse.ok || !reposResponse.ok) {
      throw new Error("Failed to fetch GitHub data");
    }

    const userData = await userResponse.json();
    const reposData = await reposResponse.json();

    const totalStars = reposData.reduce(
      (sum: number, repo: any) => sum + repo.stargazers_count,
      0
    );
    const totalForks = reposData.reduce(
      (sum: number, repo: any) => sum + repo.forks_count,
      0
    );

    return new Response(
      JSON.stringify({
        totalStars,
        totalForks,
        publicRepos: userData.public_repos,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "s-maxage=600, stale-while-revalidate",
        },
      }
    );
  } catch (err: unknown) {
    console.error(err);
    return new Response(
      JSON.stringify({ error: "Failed to load GitHub stats" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
