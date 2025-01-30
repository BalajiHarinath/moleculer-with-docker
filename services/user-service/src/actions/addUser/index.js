const { errorHandler } = require('../../helpers/error-handler');
const { MoleculerError } = require('moleculer').Errors;
const {validateInput} = require('./helper');

module.exports = {
    addUser: {
        params:{
            firstName: {type: 'string', required: true},
            lastName: {type: 'string', required: true},
            email: {type: 'email', required: true}
        },
        async handler(ctx){
            try{
                const input = ctx.params;
                validateInput(input, MoleculerError);
                await ctx.emit('user.created', input);
                return {success: true, message: 'User created successfully', status: 200};
            }catch(err){
                return errorHandler(err);
            }
        }
    }
}