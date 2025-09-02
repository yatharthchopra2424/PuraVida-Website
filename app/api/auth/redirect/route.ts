import { NextRequest, NextResponse } from 'next/server';
import { msal, scopes } from '../../../../lib/auth';

export const runtime = 'nodejs';

export async function GET(req: NextRequest) {
  const code = new URL(req.url).searchParams.get('code');
  if (!code) return NextResponse.json({ error: 'Missing code' }, { status: 400 });

  const result = await msal.acquireTokenByCode({
    code,
    scopes,
    redirectUri: process.env.AAD_REDIRECT_URI!,
  });

  const response = NextResponse.redirect(new URL('/contact', req.url));
  response.cookies.set('access_token', result.accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 86400 * 7, // 7 days - keep login persistent
  });
  return response;
}