const {getGreetingEmailSubject, getGreetingEmailBody} = require('../../helpers/email-helper');
const { MoleculerError } = require('moleculer').Errors;
const {sendEmail} = require('../../utils/node-mailer');
const {errorHandler} = require('../../helpers/error-handler');

module.exports = {
    sendGreetingEmail:{
        params: {
            firstName: {type: 'string', required: true},
            lastName: {type: 'string', required: true},
            email: {type: 'email', required: true}
        },
        async handler(ctx){
            try{
                const input = ctx.params;
                const subject = getGreetingEmailSubject();
                const body = getGreetingEmailBody(input);
                await sendEmail(input.email, subject, body, MoleculerError);
                return {success: true, message: 'Email sent successfully'};
            }catch(err){
                return errorHandler(err);
            }
        }
    }
}