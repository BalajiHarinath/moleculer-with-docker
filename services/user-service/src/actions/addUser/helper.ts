import { Errors } from "moleculer";
import { UserInput } from "../../types/user.types";

export function validateInput(input: UserInput, MoleculerError: typeof Errors.MoleculerError): void{
    if(!input.firstName){
        throw new MoleculerError('first name is required', 400, 'INVALID_INPUT');
    }
    if(!input.lastName){
        throw new MoleculerError('last name is required', 400, 'INVALID_INPUT');
    }
    if(!input.email){
        throw new MoleculerError('email is required', 400, 'INVALID_INPUT');
    }
}