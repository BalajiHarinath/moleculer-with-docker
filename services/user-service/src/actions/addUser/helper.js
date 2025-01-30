module.exports = {
    validateInput(input, MoleculerError){
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
}