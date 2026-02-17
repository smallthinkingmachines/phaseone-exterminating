import { Resend } from "resend";

interface ContactSubmission {
  name: string;
  phone: string;
  email: string;
  address?: string;
  hearAbout?: string;
  message: string;
}

export async function sendContactNotification(data: ContactSubmission) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { name, phone, email, address, hearAbout, message } = data;

  await resend.emails.send({
    from: "Phaseone Website <onboarding@resend.dev>",
    to: "contact@phaseoneexterminating.net",
    subject: `New Contact Form Submission from ${name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <table cellpadding="8" style="border-collapse:collapse;width:100%;max-width:600px;">
        <tr><td style="font-weight:bold;background:#f4f4f4;">Name</td><td>${name}</td></tr>
        <tr><td style="font-weight:bold;background:#f4f4f4;">Phone</td><td>${phone}</td></tr>
        <tr><td style="font-weight:bold;background:#f4f4f4;">Email</td><td>${email}</td></tr>
        <tr><td style="font-weight:bold;background:#f4f4f4;">Address</td><td>${address || "—"}</td></tr>
        <tr><td style="font-weight:bold;background:#f4f4f4;">Heard About Us</td><td>${hearAbout || "—"}</td></tr>
        <tr><td style="font-weight:bold;background:#f4f4f4;vertical-align:top;">Message</td><td>${message.replace(/\n/g, "<br>")}</td></tr>
      </table>
    `,
  });
}
