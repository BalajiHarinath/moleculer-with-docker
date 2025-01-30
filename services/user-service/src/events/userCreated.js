module.exports = {
    'user.created'(payload){
        console.log(`Event triggered: User ${payload.firstName} created`);
    }
}