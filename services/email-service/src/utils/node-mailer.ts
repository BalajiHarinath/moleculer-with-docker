import { config } from 'dotenv';
import { Errors } from 'moleculer';
import nodemailer from 'nodemailer';
import { MailOptions } from '../types/nodemailer.types';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

config();
function getMailOptions(email: string, subject: string, body: string): MailOptions{
    const mailOptions = {
        from: process.env.SMTP_USER,
        to: email,
        subject,
        text: body,
    };
    return mailOptions;
}

const smtpOptions: SMTPTransport.Options = {
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT as string),
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
    },
};

function createTransporter(){
    const transporter = nodemailer.createTransport(smtpOptions);
    return transporter;
}

export default async function sendEmail(
    email: string,
    subject: string,
    body: string,
    MoleculerError: typeof Errors.MoleculerError
): Promise<{message: string}>{
    try {
        const transporter = createTransporter();
        const mailOptions = getMailOptions(email, subject, body);
        await transporter.sendMail(mailOptions);
        return { message: "Email sent successfully" };
    } catch (error: any) {
        throw new MoleculerError(error, 400, 'BAD_REQUEST');
    }
}