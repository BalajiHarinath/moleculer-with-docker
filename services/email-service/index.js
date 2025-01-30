const { ServiceBroker } = require('moleculer');
const ApiService = require('moleculer-web');

const broker = new ServiceBroker({
    nodeID: 'email-service',
    transporter: 'nats://nats:4222',
})

broker.createService({
    name: 'email',
    mixins: [ApiService],
    settings: {
        port: 3001,
    },
    actions: require('./src/actions/sendGreetingEmail'),
    events: require('./src/events/handleUserCreated'),
})

broker.start();