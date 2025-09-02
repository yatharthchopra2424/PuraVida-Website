import { NextRequest, NextResponse } from 'next/server';
import { sendTwoEmailsWithGraph } from '../../../lib/graphSend';
import { getAppOnlyToken } from '../../../lib/auth';

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  const { name, email, product, quantity, description } = await req.json();

  if (!name || !email || !product || !quantity || !description) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const message = `Product: ${product}\nQuantity: ${quantity}\nDescription: ${description}`;

  try {
    const accessToken = await getAppOnlyToken();

    await sendTwoEmailsWithGraph({
      accessToken,
      adminAddress: process.env.MAIL_TO!,
      userAddress: email,
      name,
      message,
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json({ error: 'Failed to send emails' }, { status: 500 });
  }
}