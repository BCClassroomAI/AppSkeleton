// This is a blank skill for Alexa

'use strict';
const Alexa = require("alexa-sdk");
const AWS = require("aws-sdk");

AWS.config.update({region: 'us-east-1'});

exports.handler = function ((event, context, callback)) {
    const alexa = Alexa.handler(event, context);

    alexa.appId = 'Blank';
    alexa.registerHandlers(handlers);
    alexa.execute();
};

const handlers = {
    'LaunchRequest': function () {
        console.log('LaunchRequest');

        const speechOutput = 'This is the Blank skill.';
        const errorOutput = 'Whoops! Something went wrong!';

        this.context.succeed ({
            "response": {
                "outputSpeech": {
                    "type": "PlainText",
                    "text": speechOutput
                },
                "shouldEndSession": true
            },
            "sessionAttributes": {}
        });
    },

    //Required Intents
    'AMAZON.HelpIntent': function () {
        const speechOutput = 'This is the Blank skill.';

        this.response.speak(speechOutput);
        this.emit(':responseReady'); //what is this?
    },

    'AMAZON.CancelIntent': function () {
        const speechOutput = 'Goodbye!';

        this.response.speak(speechOutput);
        this.emit(':responseReady');
    },

    'AMAZON.StopIntent': function () {
        const speechOutput = 'See you later!';

        this.response.speak(speechOutput);
        this.emit(':responseReady');
    }//,


    //Custom Intents

};