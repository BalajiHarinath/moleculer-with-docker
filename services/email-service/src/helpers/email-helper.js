module.exports = {
    getGreetingEmailSubject(){
        return 'Welcome to Our Platform';
    },
    
    getGreetingEmailBody(input){
        return `Hello ${input.firstName},\n\nWelcome to our platform!\n\nBest Regards,\nTeam`;
    }
}