import { NextResponse } from 'next/server';

interface FormSubmission {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  zip: string;
  message: string;
  service: string;
  msmSource: string;
  msmCoy: string;
  source: string;
  fullUrl: string;
}

export async function POST(request: Request) {
  try {
    const body: FormSubmission = await request.json();

    // Get client IP
    const forwarded = request.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0] : 'unknown';

    // Log to console for now
    console.log('Form submission:', {
      ...body,
      ip,
      timestamp: new Date().toISOString(),
    });

    // TODO: Implement actual processing:
    // 1. Save to database
    // 2. Send to MarketSharp CRM
    // 3. Send email notification
    // 4. Track conversion

    // For now, just return success
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Submit error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to submit form' },
      { status: 500 }
    );
  }
}
