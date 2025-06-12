"use client";

import { useEffect, useState } from "react";

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    if (!sessionStorage.getItem("visit-tracked")) {
      fetch("/api/visit", { method: "POST" });
      sessionStorage.setItem("visit-tracked", "true");
    }

    fetch("/api/visit-count")
      .then((res) => res.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <div>
      {count !== null ? (
        <p className="text-drac-nosferatu-300">{count} views</p>
      ) : (
        <p>0 views</p>
      )}
    </div>
  );
}
