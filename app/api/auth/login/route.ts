import { NextResponse } from 'next/server';
import { msal, scopes } from '../../../../lib/auth';

export const runtime = 'nodejs';

export async function GET() {
  const url = await msal.getAuthCodeUrl({
    scopes,
    redirectUri: process.env.AAD_REDIRECT_URI!,
  });
  return NextResponse.redirect(url);
}