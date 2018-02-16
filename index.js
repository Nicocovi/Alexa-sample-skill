'use strict';
const Alexa = require('alexa-sdk');

const APP_ID = 'amzn1.ask.skill.4a3c1f1e-0523-4286-99c9-bfb4a3b7b1ac';

const SKILL_NAME = 'Tabata coach';
const HELLO_MESSAGE = 'Willkommen im Tabata Intervall Training. Ich bin Alexa und werde heute dein coach sein';
const HELP_MESSAGE = 'Wie kann ich dir behilflich sein?';
const HELP_REPROMPT = 'Was willst du?';
const STOP_MESSAGE = 'Du Lappen!';

//=========================================================================================================================================
// 		DATA OF APP
//=========================================================================================================================================
const data = [
    'Hier kommen unsere texte hin'
];

//=========================================================================================================================================
//
//=========================================================================================================================================

exports.handler = function (event, context, callback) {
    console.log("test1");
    var alexa = Alexa.handler(event, context);
    console.log("test2");
    alexa.appId = APP_ID;
    console.log("test3");
    alexa.registerHandlers(handlers);
    console.log("test4");
    alexa.execute();
    console.log("test5");
};

const handlers = {
    'LaunchRequest': function () {
        this.emit('HelloIntent');
    },
    'HelloIntent': function () {
        const speechOutput = HELLO_MESSAGE;

        this.response.speak(speechOutput);
        this.emit(':responseReady');
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = HELP_MESSAGE;
        const reprompt = HELP_REPROMPT;

        this.response.speak(speechOutput).listen(reprompt);
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
};
