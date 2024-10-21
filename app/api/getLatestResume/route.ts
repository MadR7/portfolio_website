import { NextResponse } from 'next/server';
import { Octokit } from '@octokit/rest';

export async function GET() {
  return handleRequest();
}

export async function POST() {
  return handleRequest();
}

async function handleRequest() {
  const octokit = new Octokit({ auth: process.env.GITHUB_PERSONAL_ACCESS_TOKEN });

  try {
    const { data } = await octokit.repos.getContent({
      owner: 'MadR7',
      repo: 'resume',
      path: 'resume.pdf',
    });

    if (!('content' in data) || Array.isArray(data)) {
      throw new Error('File content not found');
    }

    const fileContent = Buffer.from(data.content, 'base64');

    return new NextResponse(fileContent, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename=resume.pdf',
      },
    });
  } catch (error) {
    console.error('Error fetching resume:', error);
    return NextResponse.json({ error: 'Failed to fetch resume' }, { status: 500 });
  }
}