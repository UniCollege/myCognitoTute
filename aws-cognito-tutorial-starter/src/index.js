import React from 'react';
import ReactDOM from 'react-dom';
import 'bulma/css/bulma.min.css';
import './index.css';
import App from './App';
import Amplify, { Auth } from 'aws-amplify';
import config from '/home/sudhakar/Desktop/cognito/aws-cognito-tutorial-starter/src/config.json';
import * as serviceWorker from './serviceWorker';

Amplify.configure({
    Auth: {
        mandatorySignIn: true,
        region: "us-east-2",
        userPoolId: "us-east-2_tHcGnpJsT",
        userPoolWebClientId: "40ppks3julmf4pi48qko7bo7ch"
    }
});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
