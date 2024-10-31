import { NextResponse } from 'next/server';

export async function GET(req) {
    const ip = req.headers.get('x-forwarded-for') || req.connection.remoteAddress || 'IP not available';
    return NextResponse.json({ ip: ip }, { status: 200 });
}