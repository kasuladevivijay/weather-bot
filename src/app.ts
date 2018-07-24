import * as builder from 'botbuilder';
import * as restify from 'restify';

// setup restify

const server = restify.createServer();
server.listen(process.env.PORT || 3978, () => {
    console.log(`${server.name} listening to ${server.url}`);
});

// Chat Connector
const connector = new builder.ChatConnector({
    appId: process.env.MicrosoftAppId,
    appPassword: process.env.MicrosoftAppPassword
})

// listen for messages from users
server.post('/api/messages', connector.listen());

// Receive messages from the users
let bot = new builder.UniversalBot(connector, (session) => {
    session.send(`You said ${session.message.text}`)
})

