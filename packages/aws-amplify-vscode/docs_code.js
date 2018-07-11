import Amplify, { Analytics } from 'aws-amplify';
import aws_exports from './aws-exports';

Amplify.configure(aws_exports);

import { Analytics } from 'aws-amplify';

Analytics.configure({
    // OPTIONAL - disable Analytics if true
    disabled: false,
    // OPTIONAL - Allow recording session events. Default is true.
    autoSessionRecord: true,

    AWSPinpoint: {
        // OPTIONAL -  Amazon Pinpoint App Client ID
        appId: 'XXXXXXXXXXabcdefghij1234567890ab',
        // OPTIONAL -  Amazon service region
        region: 'XX-XXXX-X',
        // OPTIONAL -  Customized endpoint
        endpointId: 'XXXXXXXXXXXX',
        // OPTIONAL - client context
        clientContext: {
            clientId: 'xxxxx',
            appTitle: 'xxxxx',
            appVersionName: 'xxxxx',
            appVersionCode: 'xxxxx',
            appPackageName: 'xxxxx',
            platform: 'xxxxx',
            platformVersion: 'xxxxx',
            model: 'xxxxx',
            make: 'xxxxx',
            locale: 'xxxxx'
        },

        // Buffer settings used for reporting analytics events.

        // OPTIONAL - The buffer size for events in number of items.
        bufferSize: 1000,

        // OPTIONAL - The interval in milliseconds to perform a buffer check and flush if necessary.
        flushInterval: 5000, // 5s 

        // OPTIONAL - The number of events to be deleted from the buffer when flushed.
        flushSize: 100,

        // OPTIONAL - The limit for failed recording retries.
        resendLimit: 5
    } 
});

import { Analytics } from 'aws-amplify';

Analytics.record({ name: 'albumVisit' });

import { Analytics } from 'aws-amplify';

Analytics.record({
    name: 'albumVisit', 
    attributes: { genre: '', artist: '' }
});

import { Analytics } from 'aws-amplify';

Analytics.record({
    name: 'albumVisit', 
    attributes: {}, 
    metrics: { minutesListened: 30 }
});

import { Analytics } from 'aws-amplify';

// to disable Analytics
Analytics.disable();

// to enable Analytics
Analytics.enable();

import { Analytics } from 'aws-amplify';

// Sign-in event
Analytics.record({
    name: '_userauth.sign_in'
});

// Sign-up event
Analytics.record({
    name: '_userauth.sign_up'
});

// Authentication failure event
Analytics.record({
    name: '_userauth.auth_fail'
});

import { Analytics } from 'aws-amplify';

Analytics.updateEndpoint({
    // Customized userId
    UserId: 'XXXXXXXXXXXX',
    // User attributes
    Attributes: {
        interests: ['football', 'basketball', 'AWS']
        // ...
    },
    // Custom user attributes
    UserAttributes: {
        hobbies: ['piano', 'hiking']
        // ...
    }
})

import { Analytics, AWSKinesisProvider } from 'aws-amplify';
Analytics.addPluggable(new AWSKinesisProvider());




// Configure the plugin after adding it to the Analytics module
Analytics.configure({
    AWSKinesis: {

        // OPTIONAL -  Amazon Kinesis service region
        region: 'XX-XXXX-X',
        
        // OPTIONAL - The buffer size for events in number of items.
        bufferSize: 1000,
        
        // OPTIONAL - The number of events to be deleted from the buffer when flushed.
        flushSize: 100,
        
        // OPTIONAL - The interval in milliseconds to perform a buffer check and flush if necessary.
        flushInterval: 5000, // 5s
        
        // OPTIONAL - The limit for failed recording retries.
        resendLimit: 5
    } 
});


Analytics.record({
    data: { 
        // The data blob to put into the record
    },
    // OPTIONAL
    partitionKey: 'myPartitionKey', 
    streamName: 'myKinesisStream'
}, 'AWSKinesis');


// add the plugin
Analytics.addPluggable(new MyAnalyticsProvider());

// get the plugin
Analytics.getPluggable(MyAnalyticsProvider.providerName);

// remove the plulgin
Analytics.removePluggable(MyAnalyticsProvider.providerName);

// send configuration into Amplify
Analytics.configure({
    YOUR_PLUGIN_NAME: { 
        // My Analytics provider configuration 
    }
});



import Amplify from 'aws-amplify';
import awsmobile from './aws-exports';
Amplify.configure(awsmobile);


"defaults": {
    "styleExt": "css",
    "component": {},
    "build": {
        "preserveSymlinks": true
    }
  }

import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';

@NgModule({
  ...
  imports: [
    ...
    AmplifyAngularModule
  ],
  ...
  providers: [
    ...
    AmplifyService
  ]
  ...
});

import { AmplifyService } from 'aws-amplify-angular';

...
constructor(
    public navCtrl:NavController,
    public amplifyService: AmplifyService,
    public modalCtrl: ModalController
) {
    this.amplifyService = amplifyService;
}
...

import { Component } from '@angular/core';
import { AmplifyService }  from 'aws-amplify-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  constructor( public amplify:AmplifyService ) {
      
      this.amplifyService = amplify;
      
      /** now you can access category APIs:
       * this.amplifyService.auth();          // AWS Amplify Auth
       * this.amplifyService.analytics();     // AWS Amplify Analytics
       * this.amplifyService.storage();       // AWS Amplify Storage
       * this.amplifyService.api();           // AWS Amplify API
       * this.amplifyService.cache();         // AWS Amplify Cache
       * this.amplifyService.pubsub();        // AWS Amplify PubSub
     **/
  }
  
}

import { AmplifyService }  from 'aws-amplify-angular';

  // ...
constructor( public amplifyService: AmplifyService ) {

    this.amplifyService = amplifyService;

    this.amplifyService.authStateChange$
        .subscribe(authState => {
        this.signedIn = authState.state === 'signedIn';
        if (!authState.user) {
            this.user = null;
        } else {
            this.user = authState.user;
            this.greeting = "Hello " + this.user.username;
        }
        });

}

onImagePicked( file ) {

    let key = `pics/${file.name}`;
    
    this.amplify.storage().put( key, file, {
      'level': 'private',
      'contentType': file.type
    })
    .then (result => console.log('uploaded: ', result))
    .catch(err => console.log('upload error: ', err));
  
}

onAlbumImageSelected( event ) {
      window.open( event, '_blank' );
}

import Amplify, { API } from 'aws-amplify';
import aws_exports from './aws-exports';

Amplify.configure(aws_exports);

import Amplify, { API } from 'aws-amplify';

Amplify.configure({
    Auth: {
    // REQUIRED - Amazon Cognito Identity Pool ID
        identityPoolId: 'XX-XXXX-X:XXXXXXXX-XXXX-1234-abcd-1234567890ab',
    // REQUIRED - Amazon Cognito Region
        region: 'XX-XXXX-X', 
    // OPTIONAL - Amazon Cognito User Pool ID
        userPoolId: 'XX-XXXX-X_abcd1234', 
    // OPTIONAL - Amazon Cognito Web Client ID
        userPoolWebClientId: 'XX-XXXX-X_abcd1234',
    },
    API: {
        endpoints: [
            {
                name: "MyAPIGatewayAPI",
                endpoint: "https://1234567890-abcdefgh.amazonaws.com"
            },
            {
                name: "MyCustomCloudFrontApi",
                endpoint: "https://api.my-custom-cloudfront-domain.com",

            },
            {
                name: "MyCustomLambdaApi",
                endpoint: "https://lambda.us-east-1.amazonaws.com/2015-03-31/functions/yourFuncName/invocations",
                service: "lambda",
                region: "us-east-1"
            }
        ]
    }
});

API: {
    endpoints: [
        {
            name: "MyCustomLambdaApi",
            endpoint: "https://lambda.us-east-1.amazonaws.com/2015-03-31/functions/yourFuncName/invocations",
            service: "lambda",
            region: "us-east-1"
        }
    ]
}

let apiName = 'MyApiName';
let path = '/path'; 
let myInit = { // OPTIONAL
    headers: {} // OPTIONAL
    response: true // OPTIONAL (return entire response object instead of response.data)
    queryStringParameters: {} // OPTIONAL
}
API.get(apiName, path, myInit).then(response => {
    // Add your code here
}).catch(error => {
    console.log(error.response)
});

async function getData() { 
    let apiName = 'MyApiName';
    let path = '/path';
    let myInit = { // OPTIONAL
        headers: {} // OPTIONAL
    }
    return await API.get(apiName, path, myInit);
}

getData();

let items = await API.get('myCloudApi', '/items', {
  'queryStringParameters': {
    'order': 'byPrice'
  }
});

exports.handler = function(event, context, callback) {
    console.log (event.queryStringParameters);
}

var awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
app.use(awsServerlessExpressMiddleware.eventContext())

app.get('/items', function(req, res) {
  // req.apiGateway.event.queryStringParameters
  res.json(req.apiGateway.event)
});

API.get('sampleCloudApi', '/items?q=test');

let apiName = 'MyApiName'; // replace this with your api name.
let path = '/path'; //replace this with the path you have configured on your API
let myInit = {
    body: {}, // replace this with attributes you need
    headers: {} // OPTIONAL
}

API.post(apiName, path, myInit).then(response => {
    // Add your code here
}).catch(error => {
    console.log(error.response)
});

async function postData() { 
    let apiName = 'MyApiName';
    let path = '/path';
    let myInit = { // OPTIONAL
        body: {}, // replace this with attributes you need
        headers: {} // OPTIONAL
    }
    return await API.post(apiName, path, myInit);
}

postData();

let apiName = 'MyApiName'; // replace this with your api name.
let path = '/path'; // replace this with the path you have configured on your API
let myInit = {
    body: {}, // replace this with attributes you need
    headers: {} // OPTIONAL
}

API.put(apiName, path, myInit).then(response => {
    // Add your code here
}).catch(error => {
    console.log(error.response)
});

async function putData() { 
    let apiName = 'MyApiName';
    let path = '/path';
    let myInit = { // OPTIONAL
        body: {}, // replace this with attributes you need
        headers: {} // OPTIONAL
    }
    return await API.put(apiName, path, myInit);
}

putData();

const params = {
    body: {
        itemId: '12345',
        itemDesc: ' update description'
    }
}
const apiResponse = await API.put('MyTableCRUD', '/manage-items', params);

let apiName = 'MyApiName'; // replace this with your api name.
let path = '/path'; //replace this with the path you have configured on your API
let myInit = { // OPTIONAL
    headers: {} // OPTIONAL
}

API.del(apiName, path, myInit).then(response => {
    // Add your code here
}).catch(error => {
    console.log(error.response)
});

async function deleteData() { 
    let apiName = 'MyApiName';
    let path = '/path';
    let myInit = { // OPTIONAL
        headers: {} // OPTIONAL
    }
    return await API.del(apiName, path, myInit);
}

deleteData();

let apiName = 'MyApiName'; // replace this with your api name.
let path = '/path'; //replace this with the path you have configured on your API
let myInit = { // OPTIONAL
    headers: {} // OPTIONAL
}
API.head(apiName, path, myInit).then(response => {
    // Add your code here
});

async function head() { 
    let apiName = 'MyApiName';
    let path = '/path';
    let myInit = { // OPTIONAL
        headers: {} // OPTIONAL
    }
    return await API.head(apiName, path, myInit);
}

head();

Amplify.configure({
  API: {
    endpoints: [
      {
        name: "sampleCloudApi",
        endpoint: "https://xyz.execute-api.us-east-1.amazonaws.com/Development",
        custom_header: async () => { 
          return { Authorization : 'token' } 
          // Alternatively, with Cognito User Pools use this:
          // return { (await Auth.currentSession()).idToken.jwtToken } 
        }
      }
    ]
  }
});


import Amplify, { API } from "aws-amplify";
import aws_config from "./aws-exports";
 
// Considering you have an existing aws-exports.js configuration file 
Amplify.configure(aws_config);

// Configure a custom GraphQL endpoint
Amplify.configure({
  API: {
    graphql_endpoint: 'https:/www.example.com/my-graphql-endpoint'
  }
});


Amplify.configure({
  API: {
    graphql_headers: async () => ({
      'My-Custom-Header': 'my value'
    })
  }
});

import aws_config from "./aws-exports";
Amplify.configure(aws_config);

let myAppConfig = {
    // ...
    'aws_appsync_graphqlEndpoint': 'https://xxxxxx.appsync-api.us-east-1.amazonaws.com/graphql',
    'aws_appsync_region': 'us-east-1',
    'aws_appsync_authenticationType': 'API_KEY',
    'aws_appsync_apiKey': 'da2-xxxxxxxxxxxxxxxxxxxxxxxxxx',
    // ...
}

Amplify.configure(myAppConfig);

let myAppConfig = {
    // ...
    'aws_appsync_graphqlEndpoint': 'https://xxxxxx.appsync-api.us-east-1.amazonaws.com/graphql',
    'aws_appsync_region': 'us-east-1',
    'aws_appsync_authenticationType': 'AWS_IAM',
    // ...
}

Amplify.configure(myAppConfig);

let myAppConfig = {
    // ...
    'aws_appsync_graphqlEndpoint': 'https://xxxxxx.appsync-api.us-east-1.amazonaws.com/graphql',
    'aws_appsync_region': 'us-east-1',
    'aws_appsync_authenticationType': 'AMAZON_COGNITO_USER_POOLS', // You have configured Auth with Amazon Cognito User Pool ID and Web Client Id
    // ...
}

Amplify.configure(myAppConfig);

let myAppConfig = {
    // ...
    'aws_appsync_graphqlEndpoint': 'https://xxxxxx.appsync-api.us-east-1.amazonaws.com/graphql',
    'aws_appsync_region': 'us-east-1',
    'aws_appsync_authenticationType': 'OPENID_CONNECT', // Before calling API.graphql(...) is required to do Auth.federatedSignIn(...) check authentication guide for details.
    // ...
}

Amplify.configure(myAppConfig);

const ListEvents = `query ListEvents {
  listEvents {
    items {
      id
      where
      description
    }
  }
}`;

const GetEvent = `query GetEvent($id: ID! $nextToken: String) {
    getEvent(id: $id) {
        id
        name
        description
        comments(nextToken: $nextToken) {
            items {
                content
            }
        }
    }
}`;

import Amplify, { API, graphqlOperation } from "aws-amplify";

const ListEvents = `query ListEvents {
  listEvents {
    items {
      id
      where
      description
    }
  }
}`;

const GetEvent = `query GetEvent($id: ID! $nextToken: String) {
    getEvent(id: $id) {
        id
        name
        description
        comments(nextToken: $nextToken) {
            items {
                content
            }
        }
    }
}`;

// Simple query
const allEvents = await API.graphql(graphqlOperation(ListEvents));

// Query using a parameter
const oneEvent = await API.graphql(graphqlOperation(GetEvent, { id: 'some id' }));
console.log(oneEvent);


import Amplify, { API, graphqlOperation } from "aws-amplify";

const CreateEvent = `mutation CreateEvent($name: String!, $when: String!, $where: String!, $description: String!) {
  createEvent(name: $name, when: $when, where: $where, description: $description) {
    id
    name
    where
    when
    description
  }
}`;

// Mutation
const eventDetails = {
    name: 'Party tonight!',
    when: '8:00pm',
    where: 'Ballroom',
    description: 'Coming together as a team!'
};

const newEvent = await API.graphql(graphqlOperation(CreateEvent, eventDetails));
console.log(newEvent);

import Amplify, { API, graphqlOperation } from "aws-amplify";

const SubscribeToEventComments = `subscription SubscribeToEventComments($eventId: String!) {
  subscribeToEventComments(eventId: $eventId) {
    eventId
    commentId
    content
  }
}`;

// Subscribe with eventId 123
const subscription = API.graphql(
    graphqlOperation(SubscribeToEventComments, { eventId: '123' })
).subscribe({
    next: (eventData) => console.log(eventData)
});

// Stop receiving data updates from the subscription
subscription.unsubscribe();


Amplify.configure({
  Auth: {
    identityPoolId: 'xxx',
    region: 'xxx' ,
    cookieStorage: {
      domain: 'xxx',
      path: 'xxx',
      secure: true
    }
  },
  aws_appsync_graphqlEndpoint: 'xxxx',
  aws_appsync_region: 'xxxx',
  aws_appsync_authenticationType: 'xxxx',
  aws_appsync_apiKey: 'xxxx'
});

Amplify.configure({
  API: {
    graphql_endpoint: 'https://www.example.com/my-graphql-endpoint',
    graphql_endpoint_iam_region: 'my_graphql_apigateway_region'
  }
});

import React from 'react';
import Amplify, { graphqlOperation }  from "aws-amplify";
import { Connect } from "aws-amplify-react";

class App extends React.Component {

    render() {

        const ListView = ({ events }) => (
            <div>
                <h3>All events</h3>
                <ul>
                    {events.map(event => <li key={event.id}>{event.name} ({event.id})</li>)}
                </ul>
            </div>
        );

        const ListEvents = `query ListEvents {
            listEvents {
                items {
                id
                name
                description
                }
            }
        }`;

        return (
            <Connect query={graphqlOperation(ListEvents)}>
                {({ data: { listEvents } }) => (
                    <ListView events={listEvents.items} />
                )}
            </Connect>
        )
    }
} 

export default App;



<Connect  query={graphqlOperation(GetEvent, { id: currEventId })}
          subscription={graphqlOperation(SubscribeToEventComments, { eventId: currEventId })}
          onSubscriptionMsg={(prev, { subscribeToEventComments }) => {
            console.log ( subscribeToEventComments);
            return prev; }}>
    {({ data: { listEvents } }) => (
        <AllEvents events={listEvents ? listEvents.items : []} />
    )}
 </Connect>


class CreateEvent extends React.Component {
  // ...
  // This component calls its onCreate prop to trigger the mutation
  // ...
}
<Connect mutation={graphqlOperation(Operations.CreateEvent)}>
  {({ mutation }) => (
      <CreateEvent onCreate={mutation} />
  )}
</Connect>

import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports'; // specify the location of aws-exports.js file on your project
Amplify.configure(aws_exports);

import Amplify from 'aws-amplify';

Amplify.configure({
    Auth: {

        // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
        identityPoolId: 'XX-XXXX-X:XXXXXXXX-XXXX-1234-abcd-1234567890ab',
        
        // REQUIRED - Amazon Cognito Region
        region: 'XX-XXXX-X',

        // OPTIONAL - Amazon Cognito User Pool ID
        userPoolId: 'XX-XXXX-X_abcd1234',

        // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
        userPoolWebClientId: 'a1b2c3d4e5f6g7h8i9j0k1l2m3',

        // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
        mandatorySignIn: false,

        // OPTIONAL - Configuration for cookie storage
        cookieStorage: {
        // REQUIRED - Cookie domain (only required if cookieStorage is provided)
            domain: '.yourdomain.com',
        // OPTIONAL - Cookie path
            path: '/',
        // OPTIONAL - Cookie expiration in days
            expires: 365,
        // OPTIONAL - Cookie secure flag
            secure: true
        }
    }
});

global.fetch = require('node-fetch');

import { Auth } from 'aws-amplify';

Auth.signIn(username, password)
    .then(user => console.log(user))
    .catch(err => console.log(err));

// If MFA is enabled, sign-in should be confirmed with the congirmation code
// `user` : Return object from Auth.signIn()
// `code` : Confirmation code  
// `mfaType` : MFA Type e.g. SMS, TOTP.
Auth.confirmSignIn(user, code, mfaType)
    .then(data => console.log(data))
    .catch(err => console.log(err));

import { Auth } from 'aws-amplify';

Auth.signUp({
    username,
    password,
    attributes: {
        email,          // optional
        phone_number,   // optional - E.164 number convention
        // other custom attributes 
    },
    validationData: []  //optional
    })
    .then(data => console.log(data))
    .catch(err => console.log(err));

// After retrieveing the confirmation code from the user
Auth.confirmSignUp(username, code, {
    // Optional. Force user confirmation irrespective of existing alias. By default set to True.
    forceAliasCreation: true    
}).then(data => console.log(data))
  .catch(err => console.log(err));

import { Auth } from 'aws-amplify';

Auth.signOut()
    .then(data => console.log(data))
    .catch(err => console.log(err));

import { Auth } from 'aws-amplify';

Auth.currentAuthenticatedUser()
    .then(user => {
        return Auth.changePassword(user, 'oldPassword', 'newPassword');
    })
    .then(data => console.log(data))
    .catch(err => console.log(err));

import { Auth } from 'aws-amplify';

Auth.forgotPassword(username)
    .then(data => console.log(data))
    .catch(err => console.log(err));

// Collect confirmation code and new password, then
Auth.forgotPasswordSubmit(username, code, new_password)
    .then(data => console.log(data))
    .catch(err => console.log(err));

let session = Auth.currentSession();
// CognitoUserSession => { idToken, refreshToken, accessToken }

var data = { UserPoolId : 'us-east-1_resgd', ClientId : 'xyz' };
var userPool = new AmazonCognitoIdentity.CognitoUserPool(data);
var cognitoUser = userPool.getCurrentUser();

if (cognitoUser != null) {
    cognitoUser.getSession(function(err, session) {
        if (err) { alert(err); return; }

        // Get refresh token before refreshing session
        refresh_token = session.getRefreshToken();

        if (AWS.config.credentials.needsRefresh()) {
            cognitoUser.refreshSession(refresh_token, (err, session) => {
                if(err) { console.log(err); } 
                else {
                    AWS.config.credentials.params.Logins['cognito-idp.<YOUR-REGION>.amazonaws.com/<YOUR_USER_POOL_ID>']  = session.getIdToken().getJwtToken();
                    AWS.config.credentials.refresh((err)=> {
                        if(err)  { console.log(err); }
                        else{
                            console.log("TOKEN SUCCESSFULLY UPDATED");
                        }
                    });
                }
            });
        }
    });
}


import { withAuthenticator } from 'aws-amplify-react'; // or 'aws-amplify-react-native';
...
export default withAuthenticator(App);

const AppWithAuth = withAuthenticator(App);

const federated = {
    google_client_id: '',
    facebook_app_id: '',
    amazon_client_id: ''
};

ReactDOM.render(<AppWithAuth federated={federated}/>, document.getElementById('root'));

import { Auth } from 'aws-amplify';

// Retrieve active Google user session
const ga = window.gapi.auth2.getAuthInstance();
ga.signIn().then(googleUser => {
    const { id_token, expires_at } = googleUser.getAuthResponse();
    const profile = googleUser.getBasicProfile();
    const user = {
        email: profile.getEmail(),
        name: profile.getName()
    };

    return Auth.federatedSignIn(
        // Initiate federated sign-in with Google identity provider 
        'google',
        { 
            // the JWT token
            token: id_token, 
            // the expiration time
            expires_at 
        },
        // a user object
        user
    ).then(() => {
        // ...
    });
});

import { Cache } from 'aws-amplify';

// Run this after the sign-in
Cache.getItem('federatedInfo').then(federatedInfo => {
     const { token } = federatedInfo;
});

export default withAuthenticator(App, { includeGreetings: true });

import { Authenticator } from 'aws-amplify-react'; // or 'aws-amplify-react-native'
...

class AppWithAuth extends Component {
  render(){
    return (
      <div>
      <Authenticator>
        <App />
      </Authenticator>
      </div>
    );
  }
}

export default AppWithAuth;

this._validAuthStates = ['signedIn'];

import Expo from 'expo';
import Amplify, { Auth } from 'aws-amplify';
import { Authenticator } from 'aws-amplify-react-native';

export default class App extends React.Component {
  async signIn() {
    const { type, token, expires } = await Expo.Facebook.logInWithReadPermissionsAsync('YOUR_FACEBOOK_APP_ID', {
        permissions: ['public_profile'],
      });
    if (type === 'success') {
      // sign in with federated identity
      Auth.federatedSignIn('facebook', { token, expires_at: expires}, { name: 'USER_NAME' })
        .then(credentials => {
          console.log('get aws credentials', credentials);
        }).catch(e => {
          console.log(e);
        });
    }
  }

  // ...

  render() {
    return (
      <View style={styles.container}>
        <Authenticator>
        </Authenticator>
        <Button title="FBSignIn" onPress={this.signIn.bind(this)} />
      </View>
    );
  }
}

import Amplify from 'aws-amplify';

const oauth = {
    // Domain name
    domain : 'your-domain-prefix.auth.us-east-1.amazoncognito.com', 
    
    // Authorized scopes
    scope : ['phone', 'email', 'profile', 'openid','aws.cognito.signin.user.admin'], 

    // Callback URL
    redirectSignIn : 'http://www.example.com/signin', 
    
    // Sign out URL
    redirectSignOut : 'http://www.example.com/signout',

    // 'code' for Authorization code grant, 
    // 'token' for Implicit grant
    responseType: 'code'

    // optional, for Cognito hosted ui specified options
    options: {
        // Indicates if the data collection is enabled to support Cognito advanced security features. By default, this flag is set to true.
        AdvancedSecurityDataCollectionFlag : true
    }
}

Amplify.configure({
    Auth: {
        // other configurations...
        // ....
        oauth: oauth
    },
    // ...
});

const config = Auth.configure();
const { 
    domain,  
    redirectSignIn, 
    redirectSignOut,
    responseType } = config.oauth;

const clientId = config.userPoolWebClientId;
const url = 'https://' + domain + '/login?redirect_uri=' + redirectSignIn + '&response_type=' + responseType + '&client_id=' + clientId;

// Launch hosted UI
window.location.assign(url);

import { withOAuth } from 'aws-amplify-react';

class MyApp extends React.Component {
    // ...
    render() {
        return(
            <button onClick={this.props.OAuthSignIn}>
                Sign in with AWS
            </button>
        )
    }
}

export default withOAuth(MyApp);
``` 
    
### Enabling MFA

MFA (Multi-factor authentication increases security for your app by adding an authentication method and not relying solely on the username (or alias) and password. AWS Amplify uses Amazon Cognito to provide MFA. Please see [Amazon Cognito Developer Guide](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-mfa.html) for more information about setting up MFA in Amazon Cognito.

Once you enable MFA on Amazon Cognito, you can configure your app to work with MFA.

#### Enabling TOTP

With TOTP (Time-based One-time Password), your app user is challenged to complete authentication using a time-based one-time (TOTP) password after their username and password have been verified.

You can setup TOTP for a user in your app:

```js
import { Auth } from 'aws-amplify';

// To setup TOTP, first you need to get a `authorization code` from Amazon Cognito
// `user` is the current Authenticated user
Auth.setupTOTP(user).then((code) => {
    // You can directly display the `code` to the user or convert it to a QR code to be scanned.
    // E.g., use following code sample to render a QR code with `qrcode.react` component:  
    //      import QRCode from 'qrcode.react';
    //      const str = "otpauth://totp/AWSCognito:"+ username + "?secret=" + code + "&issuer=" + issuer;
    //      <QRCode value={str}/>
});

// ...

// Then you will have your TOTP account in your TOTP-generating app (like Google Authenticator)
// Use the generated one-time password to verify the setup
Auth.verifyTotpToken(user, challengeAnswer).then(() => {

    // don't forget to set TOTP as the preferred MFA method
    Auth.setPreferredMFA(user, 'TOTP');
    // ...
}).catch( e => {
    // Token is not verified
});

import { Auth } from 'aws-amplify';

// You can select preferred mfa type, for example:
// Select TOTP as preferred
Auth.setPreferredMFA(user, 'TOTP').then((data) => {
    console.log(data);
    // ...
}).catch(e => {});

// Select SMS as preferred
Auth.setPreferredMFA(user, 'SMS');

// Select no-mfa
Auth.setPreferredMFA(user, 'NOMFA');

import Amplify from 'aws-amplify';
import awsmobile from './aws-exports';
import { SelectMFAType } from 'aws-amplify-react';

Amplify.configure(awsmobile);

// Please have at least TWO types
// Please make sure you set it properly according to your Cognito User pool
const MFATypes = {
    SMS: true, // if SMS enabled in your user pool
    TOTP: true, // if TOTP enabled in your user pool
    Optional: true, // if MFA is set to optional in your user pool
}

class App extends Component {
    // ...
    render() {
        return (
            // ...
            <SelectMFAType authData={this.props.authData} MFATypes={MFATypes}>
        )
    }
}

export default withAuthenticator(App, true);

export const handler = async (event) => {
    if (!event.request.session || event.request.session.length === 0) {
        event.response.publicChallengeParameters = {
            captchaUrl: "url/123.jpg",
        };
        event.response.privateChallengeParameters = {
            answer: "5",
        };
        event.response.challengeMetadata = "CAPTCHA_CHALLENGE";
    }
    return event;
};

export const handler = async (event) => {
    if (!event.request.session || event.request.session.length === 0) {
        // If we don't have a session or it is empty then send a CUSTOM_CHALLENGE
        event.response.challengeName = "CUSTOM_CHALLENGE";
        event.response.failAuthentication = false;
        event.response.issueTokens = false;
    } else if (event.request.session.length === 1 && event.request.session[0].challengeResult === true) {
        // If we passed the CUSTOM_CHALLENGE then issue token
        event.response.failAuthentication = false;
        event.response.issueTokens = true;
    } else {
        // Something is wrong. Fail authentication
        event.response.failAuthentication = true;
        event.response.issueTokens = false;
    }

    return event;
};

export const handler = async (event, context) => {
    if (event.request.privateChallengeParameters.answer === event.request.challengeAnswer) {
        event.response.answerCorrect = true;
    } else {
        event.response.answerCorrect = false;
    }

    return event;
};

import { Auth } from 'aws-amplify';
let challangeResponse = "the answer for the challenge";

Auth.signIn(username)
    .then(user => {
        if (user.challengeName === 'CUSTOM_CHALLENGE') {
            Auth.sendCustomChallengeAnswer(user, challangeResponse)
                .then(user => console.log(user))
                .catch(err => console.log(err));
        } else {
            console.log(user);
        }
    })
    .catch(err => console.log(err));

Auth.signUp({
    'username': 'jdoe',
    'password': 'mysecurerandompassword#123',
    'attributes': {
        'email': 'me@domain.com',
        'phone_number': '+12128601234', // E.164 number convention
        'given_name': 'Jane',
        'family_name': 'Doe',
        'nickname': 'Jane'
    }
});

let user = await Auth.currentAuthenticatedUser();

let result = await Auth.updateUserAttributes(user, {
    'email': 'me@anotherdomain.com',
    'family_name': 'Lastname'
});
console.log(result); // SUCCESS

let result = await Auth.verifyCurrentUserAttributeSubmit('email', 'abc123');

import Route53 from 'aws-sdk/clients/route53';

Auth.currentCredentials()
  .then(credentials => {
    const route53 = new Route53({
      apiVersion: '2013-04-01',
      credentials: Auth.essentialCredentials(credentials)
    });

    // more code working with route53 object
    // route53.changeResourceRecordSets();
  })

import React, { Component } from 'react';
import { ConfirmSignIn, ConfirmSignUp, ForgotPassword, SignIn, SignUp, VerifyContact, withAuthenticator } from 'aws-amplify-react';

class App extends Component {
  render() {
    ...
  }
}

// This is my custom Sign in component
class MySignIn extends SignIn {
  render() {
    ...
  }
}

export default withAuthenticator(App, false, [
  <MySignIn/>,
  <ConfirmSignIn/>,
  <VerifyContact/>,
  <SignUp/>,
  <ConfirmSignUp/>,
  <ForgotPassword/>
]);

import { Cache } from 'aws-amplify';

Cache.setItem(key, value, [options]);

// Standard case
Cache.setItem('key', 'value');

// Set item with priority. Priority should be between 1 and 5.
Cache.setItem('key', 'value', { priority: 3 });

// Set item with an expiration time
const expiration = new Date(2018, 1, 1);
Cache.setItem('key', 'value', { expires: expiration.getTime() });

Cache.setItem('mothersBirthday', 'July 18th', { priority: 1 });
Cache.setItem('breakfastFoodOrder', 'Pancakes', { priority: 3 });

Cache.getItem(key[, options]);

// Standard case
Cache.getItem('key');

// Get item with callback function.
// The callback function will be called if the item is not in the cache.
// After the callback function returns, the value will be set into cache.
Cache.getItem('key', { callback: callback });

Cache.removeItem(key);

Cache.clear();

Cache.getAllKeys();

const size = Cache.getCacheCurSize();

const config = {
  itemMaxSize: 3000, // 3000 bytes
  defaultPriority: 4
  // ...
};
const myCacheConfig = Cache.configure(config);

// You can modify parameters such as cache size, item default ttl and etc.
// But don't try to modify keyPrefix which is the identifier of Cache.

const config = {
  itemMaxSize: 3000, // 3000 bytes
  storage: window.sessionStorage // switch to sessionStorage
  // ...
};
const newCache = Cache.createInstance(config);
// Please provide a new keyPrefix which is the identifier of Cache.

import { Hub } from 'aws-amplify';

Hub.dispatch('auth', { event: 'signIn', data: user }, 'Auth');

import { Hub, Logger } from 'aws-amplify';

const logger = new Logger('MyClass');

class MyClass {
    constructor() {
        Hub.listen('auth', this, 'MyListener');
    }

    // Default handler for listening events
    onHubCapsule(capsule) {
        const { channel, payload } = capsule;
        if (channel === 'auth') { onAuthEvent(payload); }
    }
}

import { Hub, Logger } from 'aws-amplify';

const alex = new Logger('Alexander_the_auth_watcher');

alex.onHubCapsule = (capsule) => {

    switch (capsule.payload.event) {
    
        case 'signIn':
            alex.error('user signed in'); //[ERROR] Alexander_the_auth_watcher - user signed in
            break;
        case 'signUp':
            alex.error('user signed up');
            break;
        case 'signOut':
            alex.error('user signed out');
            break;
        case 'signIn_failure':
            alex.error('user sign in failed');
            break;
            
    }
}

Hub.listen('auth', alex);

import { I18n } from 'aws-amplify';

I18n.setLanguage('fr');

const dict = {
    'fr': {
        'Sign In': "Se connecter",
        'Sign Up': "S'inscrire"
    },
    'es': {
        'Sign In': "Registrarse",
        'Sign Up': "Regístrate"
    }
};

I18n.putVocabularies(dict);

I18n.get('Sign In');

import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports'; // specify the location of aws-exports.js file on your project
Amplify.configure(aws_exports);

import Amplify from 'aws-amplify';

Amplify.configure({
  Auth: {
    identityPoolId: 'us-east-1:xxx-xxx-xxx-xxx-xxx',
    region: 'us-east-1'
  },
  Interactions: {
    bots: {
      "BookTripMOBILEHUB": {
        "name": "BookTripMOBILEHUB",
        "alias": "$LATEST",
        "region": "us-east-1",
      },
    }
  }
});

import { Interactions } from 'aws-amplify';

import { Interactions } from 'aws-amplify';

let userInput = "I want to reserve a hotel for tonight";

// Provide a bot name and user input
const response = await Interactions.send("BookTripMOBILEHUB", userInput);

// Log chatbot response
console.log (response.message);


var handleComplete = function (err, confirmation) {
    if (err) {
        alert('bot conversation failed')
        return;
    }
    alert('done: ' + JSON.stringify(confirmation, null, 2));

    return 'Trip booked. Thank you! what would you like to do next?';
}

Interactions.onComplete(botName, handleComplete );

import React, { Component } from 'react';
import Amplify, { Interactions } from 'aws-amplify';
import { ChatBot, AmplifyTheme } from 'aws-amplify-react';

// Imported default theme can be customized by overloading attributes
const myTheme = {
  ...AmplifyTheme,
  sectionHeader: {
    ...AmplifyTheme.sectionHeader,
    backgroundColor: '#ff6600'
  }
};

Amplify.configure({
  Auth: {
    // Use your Amazon Cognito Identity Pool Id
    identityPoolId: 'us-east-1:xxx-xxx-xxx-xxx-xxx',
    region: 'us-east-1'
  },
  Interactions: {
    bots: {
      "BookTripMOBILEHUB": {
        "name": "BookTripMOBILEHUB",
        "alias": "$LATEST",
        "region": "us-east-1",
      },
    }
  }
});

class App extends Component {

  handleComplete(err, confirmation) {
    if (err) {
      alert('Bot conversation failed')
      return;
    }

    alert('Success: ' + JSON.stringify(confirmation, null, 2));
    return 'Trip booked. Thank you! what would you like to do next?';
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to ChatBot Demo</h1>
        </header>
        <ChatBot
          title="My Bot"
          theme={myTheme}
          botName="BookTripMOBILEHUB"
          welcomeMessage="Welcome, how can I help you today?"
          onComplete={this.handleComplete.bind(this)}
          clearOnComplete={true}
        />
      </div>
    );
  }
}

export default App;

import { Logger } from 'aws-amplify';



const logger = new Logger('foo');

logger.info('info bar');
logger.debug('debug bar');
logger.warn('warn bar');
logger.error('error bar');

try {
    ...
} catch(e) {
    logger.error('error happened', e);
}

const logger = new Logger('foo', 'INFO');

logger.debug('callback data', data); // this will not write the message

Amplify.Logger.LOG_LEVEL = 'DEBUG';

const logger = new Logger('foo', 'INFO');

logger.debug('callback data', data); //  this will write the message since the global log level is 'DEBUG'

window.LOG_LEVEL = 'DEBUG';

import Amplify, { PubSub } from 'aws-amplify';
import { AWSIoTProvider } from 'aws-amplify/lib/PubSub/Providers';

// Apply plugin with configuration
Amplify.addPluggable(new AWSIoTProvider({
     aws_pubsub_region: '<YOUR-AWS-REGION>',
     aws_pubsub_endpoint: 'wss://xxxxxxxxxxxxx.iot.<YOUR-AWS-REGION>.amazonaws.com/mqtt',
   }));

    Auth.currentCredentials().then((info) => {
      const cognitoIdentityId = info._identityId;
    });

import { PubSub } from 'aws-amplify';
import { MqttOverWSProvider } from "aws-amplify/lib/PubSub/Providers";

// Apply plugin with configuration
Amplify.addPluggable(new MqttOverWSProvider({
    aws_pubsub_endpoint: 'wss://iot.eclipse.org:443/mqtt',
}));

PubSub.subscribe('myTopic').subscribe({
    next: data => console.log('Message received', data),
    error: error => console.error(error),
    close: () => console.log('Done'),
});

PubSub.subscribe(['myTopic1','myTopic1']).subscribe({
    // ...
});

await PubSub.publish('myTopic1', { msg: 'Hello to all subscribers!' });

await PubSub.publish(['myTopic1','myTopic2'], { msg: 'Hello to all subscribers!' });

const sub1 = PubSub.subscribe('myTopicA').subscribe({
    next: data => console.log('Message received', data),
    error: error => console.error(error),
    close: () => console.log('Done'),
});

sub1.unsubscribe();
// You will no longer get messages for 'myTopicA'

$ react-native init myapp
$ cd myapp
$ npm install
$ npm install aws-amplify --save
$ npm install aws-amplify-react-native --save
$ react-native link aws-amplify-react-native

import { PushNotificationIOS } from 'react-native';
import Amplify from 'aws-amplify';
import { PushNotification } from 'aws-amplify-react-native';

// PushNotification need to work with Analytics
Amplify.configure({
    Analytics: {
        // You configuration will come here...
    }
});

PushNotification.configure({
    // ...
    PushNotification: {
        appId: 'XXXXXXXXXXabcdefghij1234567890ab',
    }
    // ...
});

import { PushNotificationIOS } from 'react-native';
import Amplify from 'aws-amplify';
import { PushNotification } from 'aws-amplify-react-native';
import aws_exports from './aws_exports';

// PushNotification need to work with Analytics
Amplify.configure(aws_exports);

PushNotification.configure(aws_exports);

// get the notification data
PushNotification.onNotification((notification) => {
  // Note that the notification object structure is different from Android and IOS
  console.log('in app notification', notification);

  // required on iOS only (see fetchCompletionHandler docs: https://facebook.github.io/react-native/docs/pushnotificationios.html)
  notification.finish(PushNotificationIOS.FetchResult.NoData);
});

// get the registration token
PushNotification.onRegister((token) => {
  console.log('in app registration', token);
});

import Amplify, { Storage } from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

import Amplify from 'aws-amplify';

Amplify.configure({
    Auth: {
        identityPoolId: 'XX-XXXX-X:XXXXXXXX-XXXX-1234-abcd-1234567890ab', //REQUIRED - Amazon Cognito Identity Pool ID
        region: 'XX-XXXX-X', // REQUIRED - Amazon Cognito Region
        userPoolId: 'XX-XXXX-X_abcd1234', //OPTIONAL - Amazon Cognito User Pool ID
        userPoolWebClientId: 'XX-XXXX-X_abcd1234', //OPTIONAL - Amazon Cognito Web Client ID
    },
    Storage: {
        bucket: '', //REQUIRED -  Amazon S3 bucket
        region: 'XX-XXXX-X', //OPTIONAL -  Amazon service region
    }
});


Storage.configure({ level: 'private' });

Storage.get('welcome.png'); // Gets the welcome.png belongs to current user

Storage.get('welcome.png', { level: 'public' }); // Gets welcome.png in public space

Storage.get('welcome.png'); // Get welcome.png in public space

Storage.vault.get('welcome.png'); // Get the welcome.png belonging to current user

import { Storage } from 'aws-amplify';

Storage.configure({
    bucket: //Your bucket ARN;
    region: //Specify the region your bucket was created in;
    identityPoolId: //Specify your identityPoolId for Auth and Unauth access to your bucket;
});

Storage.put('test.txt', 'Hello')
    .then (result => console.log(result))
    .catch(err => console.log(err));

Storage.put('test.txt', 'Protected Content', {
    level: 'protected',
    contentType: 'text/plain'
})
.then (result => console.log(result))
.catch(err => console.log(err));

Storage.put('test.txt', 'Private Content', {
    level: 'private',
    contentType: 'text/plain'
})
.then (result => console.log(result))
.catch(err => console.log(err));

class S3ImageUpload extends React.Component {
  onChange(e) {
      const file = e.target.files[0];
      Storage.put('example.png', file, {
          contentType: 'image/png'
      })
      .then (result => console.log(result))
      .catch(err => console.log(err));
  }

  render() {
      return (
          <input
              type="file" accept='image/png'
              onChange={(e) => this.onChange(e)}
          />
      )
  }
}

import RNFetchBlob from 'react-native-fetch-blob';

readFile(filePath) {
    return RNFetchBlob.fs.readFile(filePath, 'base64').then(data => new Buffer(data, 'base64'));
}

readFile(imagePath).then(buffer => {
    Storage.put(key, buffer, {
        contentType: imageType
    })
}).catch(e => {
    console.log(e);
});

Storage.get('test.txt')
    .then(result => console.log(result))
    .catch(err => console.log(err));

Storage.get('test.txt', { level: 'protected' })
    .then(result => console.log(result))
    .catch(err => console.log(err));

Storage.get('test.txt', { 
    level: 'protected', 
    identityId: 'xxxxxxx' // the identityId of that user
})
.then(result => console.log(result))
.catch(err => console.log(err));

Storage.get('test.txt', {level: 'private'})
    .then(result => console.log(result))
    .catch(err => console.log(err));

Storage.get('test.txt', {expires: 60})
    .then(result => console.log(result))
    .catch(err => console.log(err));

Storage.remove('test.txt')
    .then(result => console.log(result))
    .catch(err => console.log(err));

Storage.remove('test.txt', {level: 'protected'})
    .then(result => console.log(result))
    .catch(err => console.log(err));

Storage.remove('test.txt', {level: 'private'})
    .then(result => console.log(result))
    .catch(err => console.log(err));

Storage.list('photos/')
    .then(result => console.log(result))
    .catch(err => console.log(err));

Storage.list('photos/', { level: 'protected' })
    .then(result => console.log(result))
    .catch(err => console.log(err));

Storage.list('photos/', { 
    level: 'protected', 
    identityId: 'xxxxxxx' // the identityId of that user
})
.then(result => console.log(result))
.catch(err => console.log(err));

Storage.list('photos/', {level: 'private'})
    .then(result => console.log(result))
    .catch(err => console.log(err));

Storage.configure({ track: true })

Storage.get('welcome.png', { track: true });

const customPrefix: {
    public: 'myPublicPrefix/',
    protected: 'myProtectedPrefix/',
    private: 'myPrivatePrefix/'
};

Storage.put('test.txt', 'Hello', {
    customPrefix: customPrefix,
    // ...
})
.then (result => console.log(result))
.catch(err => console.log(err));

