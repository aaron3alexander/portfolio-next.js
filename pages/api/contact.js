export default function handler(req, res) {
  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.USER_MAIL,
      pass: process.env.APP_PASSWORD,
    },
    secure: true,
  });

  const mailData = {
    from: process.env.USER_MAIL,
    to: "aaron.3alexander@gmail.com",
    subject: `SITE MESSAGE: From ${req.body.first} ${req.body.last}. Number: ${req.body.phone}`,
    text: `EMAIL: ${req.body.email} \nPHONE: ${req.body.phone} \nMESSAGE:\n${req.body.message}`,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) {
      console.log(err);

      res.send(500);
    } else {
      console.log(info);
      res.send(200);
    }
  });
}
