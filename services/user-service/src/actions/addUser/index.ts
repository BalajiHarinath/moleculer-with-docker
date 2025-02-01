import { Context, Errors } from 'moleculer';
import errorHandler from '../../helpers/error-handler';
import { UserInput } from '../../types/user.types';
import { validateInput } from './helper';
const { MoleculerError } = Errors;

export default {
    async handler(ctx: Context<UserInput>){
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
