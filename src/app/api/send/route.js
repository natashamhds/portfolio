// import { EmailTemplate } from '../../../components/email-template';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(request) {
  try {
    let body;
    try {
      body = await request.json();
    } catch (parseError) {
      console.error('JSON parse error:', parseError);
      return Response.json(
        { error: 'Invalid JSON in request body. Make sure Content-Type is set to application/json' },
        { status: 400 }
      );
    }

    const { email, subject, message } = body || {};

    if (!email || !subject || !message) {
      return Response.json(
        { error: 'Missing required fields: email, subject, message' },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set');
      return Response.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: fromEmail || 'onboarding@resend.dev',
      to: ['nurnatasha413@yahoo.com', email],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting me!</p>
          <p>New message submitted</p>
          <p>{message}</p>
        </>
      )
    });

    if (error) {
      console.error('Resend error:', error);
      return Response.json({ error: error.message }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    console.error('API error:', error);
    return Response.json({ error: error.message || 'Unknown error' }, { status: 500 });
  }
}