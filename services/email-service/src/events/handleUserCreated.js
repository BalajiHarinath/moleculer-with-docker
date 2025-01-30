const { errorHandler } = require("../helpers/error-handler");

module.exports = {
    'user.created'(ctx){
        try{
            return ctx.call('email.sendGreetingEmail',ctx.params);
        }catch(err){
            return errorHandler(err);
        }
    }
}