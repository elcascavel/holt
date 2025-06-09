"use client";

import { useEffect, useState } from "react";
import StatsGrid from "../components/ui/stats";
import { IconActivity } from "@tabler/icons-react";
import type { Stats } from "../lib/types/common";

export default function GitHubStats() {
  const [stats, setStats] = useState<Stats[]>([]);
  const [loading, setLoading] = useState(true);

  const skeletonStats = Array(2).fill({ icon: "", text: "" });

  useEffect(() => {
    async function fetchStats() {
      try {
        const [githubResponse, wakatimeResponse, commitsResponse] =
          await Promise.all([
            fetch("/api/github-stats"),
            fetch("/api/wakatime"),
            fetch("/api/commits"),
          ]);

        if (!githubResponse.ok) throw new Error("Failed to fetch GitHub stats");
        if (!wakatimeResponse.ok)
          throw new Error("Failed to fetch WakaTime stats");
        if (!commitsResponse.ok) throw new Error("Failed to fetch commits");

        const [githubData, wakatimeData, latestCommits] = await Promise.all([
          githubResponse.json(),
          wakatimeResponse.json(),
          commitsResponse.json(),
        ]);

        const mainLang = wakatimeData.data.languages?.[0] || {
          name: "N/A",
          percent: "0",
        };

        const combinedStats = [
          {
            icon: "github",
            text: (
              <div className="flex flex-col gap-4">
                <p>
                  On GitHub, I was starred{" "}
                  <span className="font-bold text-drac-marcelin-400">
                    {githubData.totalStars}
                  </span>{" "}
                  times, and forked{" "}
                  <span className="font-bold text-drac-marcelin-400">
                    {githubData.totalForks}
                  </span>
                  , across{" "}
                  <span className="font-bold text-drac-marcelin-400">
                    {githubData.publicRepos}
                  </span>{" "}
                  public repos.
                </p>
                <div>
                  {latestCommits.map((commit) => (
                    <div
                      key={commit.sha}
                      className="flex items-center gap-1 mb-1 overflow-hidden min-w-0"
                    >
                      <span className="font-bold whitespace-nowrap flex-shrink-0">
                        {commit.repo}:
                      </span>{" "}
                      <a
                        href={commit.href}
                        className="hover:text-drac-marcelin-500 transition-colors truncate"
                        target="_blank"
                        rel="noopener noreferrer"
                        title={commit.message}
                      >
                        {commit.message}
                      </a>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-y-1">
                  <hr className="border-drac-nosferatu-700" />
                  <a
                    href="https://github.com/elcascavel/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="mt-2 inline-block text-sm text-drac-marcelin-400 hover:bg-drac-marcelin-500 hover:text-drac-aro-50 transition-colors hover:animate-pulse">
                      View on Github
                    </span>
                  </a>
                </div>
              </div>
            ),
          },
          {
            icon: "waka",
            text: (
              <div className="flex flex-col gap-1 h-full justify-between">
                <p>
                  I have coded for a total of{" "}
                  <span className="font-bold text-drac-marcelin-400">
                    {wakatimeData.data.human_readable_total}
                  </span>{" "}
                  since using WakaTime. My most used language is{" "}
                  <span className="font-bold text-drac-marcelin-400">
                    {mainLang.name}
                  </span>
                  , accounting for{" "}
                  <span className="font-bold text-drac-marcelin-400">
                    {mainLang.percent}%
                  </span>{" "}
                  of my coding time.
                </p>
                <div className="flex flex-col gap-y-1">
                  <hr className="border-drac-nosferatu-700" />
                  <a
                    href="https://wakatime.com/@elcascavel"
                    className="mt-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="inline-block text-sm text-drac-marcelin-400 hover:bg-drac-marcelin-500 hover:text-drac-aro-50 transition-colors hover:animate-pulse">
                      View stats
                    </span>
                  </a>
                </div>
              </div>
            ),
          },
        ];

        setStats(combinedStats);
      } catch (err: unknown) {
        console.error("Error fetching stats:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchStats();
  }, []);

  return (
    <main className="p-5">
      <h1 className="mb-8 flex items-center gap-3 text-3xl font-bold">
        <IconActivity size={32} className="text-drac-marcelin-400 mr-2" />
        <span>Stats</span>
      </h1>
      <StatsGrid stats={loading ? skeletonStats : stats} loading={loading} />
    </main>
  );
}
