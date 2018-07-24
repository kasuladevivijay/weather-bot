"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var builder = __importStar(require("botbuilder"));
var restify = __importStar(require("restify"));
// setup restify
var server = restify.createServer();
server.listen(process.env.PORT || 3978, function () {
    console.log(server.name + " listening to " + server.url);
});
// Chat Connector
var connector = new builder.ChatConnector({
    appId: process.env.MicrosoftAppId,
    appPassword: process.env.MicrosoftAppPassword
});
// listen for messages from users
server.post('/api/messages', connector.listen());
// Receive messages from the users
var bot = new builder.UniversalBot(connector, function (session) {
    session.send("You said " + session.message.text);
});
