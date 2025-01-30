const { ServiceBroker } = require('moleculer');
const ApiService = require('moleculer-web');

const broker = new ServiceBroker({
    nodeID: 'user-service',
    transporter: 'nats://nats:4222',
});

broker.createService({
    name: 'user',
    mixins: [ApiService],
    settings: {
        port: 3000,
    },
    actions: require('./src/actions/addUser'),
    events: require('./src/events/userCreated'),
});

broker.start();