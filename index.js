'use strict';
const Alexa = require('alexa-sdk');

const APP_ID = undefined;

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

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.appId = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
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