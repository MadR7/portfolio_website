import { Octokit } from "octokit";
import { NextRequest, NextResponse } from "next/server";

const octokit = new Octokit({ auth: process.env.GITHUB_PERSONAL_ACCESS_TOKEN });

export async function GET(request: NextRequest) {
  try {
    const response = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
      owner: "MadR7",
      repo: "resume",
      path: "resume/resume.pdf"
    });

    const data = response.data;

    if (!("content" in data) || Array.isArray(data)) {
      throw new Error("File content not found");
    }

    const fileContent = Buffer.from(data.content, "base64");

    return new NextResponse(fileContent, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "attachment; filename=resume.pdf"
      }
    });
  } catch (error) {
    console.error("Error fetching PDF: ", error);
    return NextResponse.json({ error: "Failed to fetch PDF" }, { status: 500 });
  }
}