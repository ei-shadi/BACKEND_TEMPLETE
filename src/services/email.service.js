const fs = require("fs");
const path = require("path");
const nodemailer = require("nodemailer");
const config = require("../config/config");
const logger = require("../config/logger");

const transport = nodemailer.createTransport(config.email.smtp);
/* istanbul ignore next */
if (config.env !== "test") {
  transport
    .verify()
    .then(() => logger.info("Connected to email server"))
    .catch((err) =>
      logger.warn(
        "Unable to connect to email server. Make sure you have configured the SMTP options in .env"
      )
    );
}


// Helper function to read HTML template and replace variables
const readTemplate = (templateName, data) => {
  const filePath = path.join(__dirname, `../views/${templateName}`);
  let html = fs.readFileSync(filePath, "utf8");

  // Replace placeholders like {{otp}} with actual values
  for (const key in data) {
    const regex = new RegExp(`{{${key}}}`, "g");
    html = html.replace(regex, data[key]);
  }

  return html;
}

const sendEmail = async (to, subject, html) => {
  const msg = { from: config.email.from, to, subject, html };
  await transport.sendMail(msg);
};

const sendEmailVerification = async (to, otp) => {
  const subject = "User verification code";
  
  // Load emailVerification.html and inject the otp variable
  const html = readTemplate("emailVerification.html", { otp });
  
  await sendEmail(to, subject, html);
};

const sendResetPasswordEmail = async (to, otp) => {
  const subject = "Password Reset Email";
  
  // Load resetEmailPassword.html and inject the otp variable
  const html = readTemplate("resetEmailPassword.html", { otp });
  
  await sendEmail(to, subject, html);
};


const sendVerificationEmail = async (to, token) => {
  const subject = "Email Verification";
  // replace this url with the link to the email verification page of your front-end app
  const verificationEmailUrl = `http://link-to-app/verify-email?token=${token}`;
  const text = `Dear user,
To verify your email, click on this link: ${verificationEmailUrl}
If you did not create an account, then ignore this email.`;
  await sendEmail(to, subject, text);
};

module.exports = {
  transport,
  sendEmail,
  sendResetPasswordEmail,
  sendVerificationEmail,
  sendEmailVerification,
};
