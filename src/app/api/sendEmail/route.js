// app/api/sendEmail/route.js

import nodemailer from "nodemailer";

export async function POST(request) {
    try {
        const { name, email, subject, message } = await request.json();

        // Create a Nodemailer transporter
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.GMAIL_USERNAME,
                pass: process.env.GMAIL_PASSWORD,
            },
        });

        const emailText = `
      You have received a new message from your website contact form.

      Here are the details:
      Name: ${name}
      Email: ${email}
      Subject: [THE HUT] - ${subject}
      Message: 
      ${message}
    `;

        // Send mail with defined transport object
        await transporter.sendMail({
            from: email,
            to: process.env.GMAIL_USERNAME,
            subject: subject,
            text: emailText,
        });

        return new Response(JSON.stringify({ success: true, message: 'Email sent successfully' }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        console.error('Error occurred while sending email:', error);
        return new Response(JSON.stringify({ success: false, message: 'An error occurred while sending email' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}

export async function GET(request) {
    return new Response('Hello, Next.js!', {
        status: 200
    })
}
