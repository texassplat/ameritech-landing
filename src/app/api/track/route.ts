import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { type, service, source, phoneNumber, fullUrl, referrer, userAgent } = body;

    // Get client IP
    const forwarded = request.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0] : 'unknown';

    // Log to console for now - TODO: Implement database logging
    console.log('Track event:', {
      type,
      service,
      source,
      phoneNumber,
      fullUrl,
      referrer,
      userAgent,
      ip,
      timestamp: new Date().toISOString(),
    });

    // TODO: Implement actual database logging similar to gator-landing
    // This would involve:
    // 1. Connect to Neon database
    // 2. Log page_visit or phone_click events
    // 3. Implement deduplication by IP

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Track error:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
