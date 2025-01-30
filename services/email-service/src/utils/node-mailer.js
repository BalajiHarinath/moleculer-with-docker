require('dotenv').config();
const nodemailer = require('nodemailer');

function getMailOptions(email, subject, body){
    const mailOptions = {
        from: process.env.SMTP_USER,
        to: email,
        subject,
        text: body,
    };
    return mailOptions;
}

function createTransporter(){
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD,
        },
    });
    return transporter;
}
async function sendEmail(email, subject, body, MoleculerError){
    try {
        const transporter = createTransporter();
        const mailOptions = getMailOptions(email, subject, body);
        await transporter.sendMail(mailOptions);
        return { message: "Email sent successfully" };
    } catch (error) {
        throw new MoleculerError(error, 400, 'BAD_REQUEST');
    }
}

module.exports = {
    sendEmail,
}
