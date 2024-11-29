// import nodemailer from 'nodemailer';

// export default async function handler(req, res) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ message: 'Only POST requests are allowed' });
//   }

//   const { to, name, text } = req.body;
//   const subject = `New message from ${name}`; // Set default subject with name

//   if (!to || !name || !text) {
//     return res.status(400).json({ message: 'Missing required fields: to, name, text' });
//   }

//   try {
//     // Configure the Nodemailer transporter
//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: process.env.GMAIL_USER, // Your Gmail address
//         pass: process.env.GMAIL_PASS, // Your Gmail App Password
//       },
//     });

//     // Email options
//     const mailOptions = {
//       from: process.env.GMAIL_USER,
//       to,
//       subject,
//       text,
//     };

//     // Send the email
//     await transporter.sendMail(mailOptions);

//     return res.status(200).json({ message: 'Email sent successfully' });
//   } catch (error) {
//     console.error('Error sending email:', error);
//     return res.status(500).json({ message: 'Error sending email', error });
//   }
// }
