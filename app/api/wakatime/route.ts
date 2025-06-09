import { NextResponse } from "next/server";

export async function GET() {
  try {
    const wakatimeApiKey = process.env.WAKATIME_API_KEY;

    const response = await fetch(
      "https://wakatime.com/api/v1/users/elcascavel/stats",
      {
        headers: {
          Authorization: `Basic ${Buffer.from(`${wakatimeApiKey}:`).toString(
            "base64"
          )}`,
        },
      }
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch WakaTime stats" },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
