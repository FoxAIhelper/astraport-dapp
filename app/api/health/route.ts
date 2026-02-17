import { NextResponse } from 'next/server';

// Health check endpoint
export async function GET() {
  return NextResponse.json({ status: 'ok', message: 'API ready' });
}
