import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { name, email, phoneNumber, subject, message } = req.body;

      const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
          user: "info@fajrairlines.com",
          pass: "rwldoqjgpeutlxba",
        },
      });

      const mailOptions = {
        from: email,
        to: "info@fajrairlines.com",
        subject,
        text: `Name: ${name} \nEmail: ${email}\nPhone: ${phoneNumber}\nMessage: ${message}`,
      };

      await transporter.sendMail(mailOptions);
      console.log(req.body);

      return res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email", error);
      return res.status(500).json({ error: "Error sending email" });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}
