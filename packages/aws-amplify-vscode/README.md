# AWS Amplify VS Code Extension

<img src="https://s3.amazonaws.com/aws-mobile-hub-images/aws-amplify-logo.png" alt="AWS Amplify" width="550" >

Code snippets and completion for the [AWS Amplify](https://aws.github.io/aws-amplify) API.

## Usage

Start typing an AWS Amplify API command and choose the appropriate snippet.

# AWS Amplify VS Code Extension

## Code Snippets

##### prefix: ```Analytics.configure```
##### body:
```js
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
            locale: 'xxxxx',
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
```
##### prefix: ```Analytics.record```
##### body:
```js
Analytics.record({
    name: 'albumVisit',
    attributes: {},
    metrics: { minutesListened: 30 }
});
```
##### prefix: ```Analytics.record```
##### body:
```js
Analytics.record({
    name: '_userauth.event'
});
```
##### prefix: ```Analytics.record```
##### body:
```js
Analytics.record({
    data: {
        // The data blob to put into the record
    },
    // OPTIONAL
    partitionKey: 'myPartitionKey',
    streamName: 'myKinesisStream'
}, 'AWSKinesis');
```
##### prefix: ```Analytics.updateEndpoint```
##### body:
```js
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
```
##### prefix: ```AWSKinesis```
##### body:
```js
AWSKinesis: {
    // OPTIONAL - Amazon Kinesis service region
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
```
##### prefix: ```AnalyticsProvider```
##### body:
```js
AnalyticsProvider {
    // category and provider name
    static category = 'Analytics';
    static providerName = 'MyAnalytics';

    // you need to implement these four methods
    // configure your provider
    configure(config: object): object;

    // record events and returns true if succeeds
    record(params: object): Promise<boolean>;

    // return 'Analytics';
    getCategory(): string;

    // return the name of your provider
    getProvider(): string;
}
```
##### prefix: ```API: ```
##### body:
```js
API: {
    endpoints: [
        {
            name: "MyAPIGatewayAPI",
            endpoint: "https://1234567890-abcdefgh.amazonaws.com"
        },
        {
            name: "MyCustomCloudFrontApi",
            endpoint: "https://api.my-custom-cloudfront-domain.com"
        },
        {
            name: "MyCustomLambdaApi",
            endpoint: "https://lambda.us-east-1.amazonaws.com/2015-03-31/functions/yourFuncName/invocations",
            service: "lambda",
            region: "us-east-1"
        },
    ]
}
```
##### prefix: ```API.get```
##### body:
```js
API.get(apiName, path, myInit)
    .then(response => {
        // Add your code here
    })
    .catch(error => {
        console.log(error.response)
    })
```
##### prefix: ```API.post```
##### body:
```js
API.post(apiName, path, myInit)
    .then(response => {
        // Add your code here
    })
    .catch(error => {
        console.log(error.response)
    })
```
##### prefix: ```API.put```
##### body:
```js
API.put(apiName, path, myInit)
    .then(response => {
        // Add your code here
    })
    .catch(error => {
        console.log(error.response)
    })
```
##### prefix: ```API.del```
##### body:
```js
API.del(apiName, path, myInit)
    .then(response => {
        // Add your code here
    })
    .catch(error => {
        console.log(error.response)
    })
```
##### prefix: ```API.head```
##### body:
```js
API.head(apiName, path, myInit)
    .then(response => {
        // Add your code here
    })
```
##### prefix: ```getData()```
##### body:
```js
getData() {
    let apiName = 'MyApiName';
    let path = '/path';
    let myInit = { // OPTIONAL
        headers: {} // OPTIONAL
    }
    return await API.get(apiName, path, myInit);
    } 

getData();
```
##### prefix: ```postData()```
##### body:
```js
postData() {
    let apiName = 'MyApiName';
    let path = '/path';
    let myInit = { // OPTIONAL
        body: {}, // replace this with attributes you need
        headers: {} // OPTIONAL
    }
    return await API.post(apiName, path, myInit);
    } 

postData();
```
##### prefix: ```putData()```
##### body:
```js
putData() {
    let apiName = 'MyApiName';
    let path = '/path';
    let myInit = { // OPTIONAL
        body: {}, // replace this with attributes you need
        headers: {} // OPTIONAL
    }
    return await API.put(apiName, path, myInit);
    } 

putData();
```
##### prefix: ```deleteData()```
##### body:
```js
deleteData() {
    let apiName = 'MyApiName';
    let path = '/path';
    let myInit = { // OPTIONAL
        headers: {} // OPTIONAL
    }
    return await API.del(apiName, path, myInit);
    } 

deleteData();
```
##### prefix: ```head()```
##### body:
```js
head() {
    let apiName = 'MyApiName';
    let path = '/path';
    let myInit = { // OPTIONAL
        headers: {} // OPTIONAL
    }
    return await API.head(apiName, path, myInit);
    } 

head();
```
##### prefix: ```myAppConfig```
##### body:
```js
myAppConfig = {
    // ...
    'aws_appsync_graphqlEndpoint': 'https://xxxxxx.appsync-api.us-east-1.amazonaws.com/graphql',
    'aws_appsync_region': 'us-east-1',
    'aws_appsync_authenticationType': 'OPENID_CONNECT', // Before calling API.graphql(...) is required to do Auth.federatedSignIn(...) check authentication guide for details.
    // ...
}

Amplify.configure(myAppConfig)
```
##### prefix: ```graphql_endpoint:```
##### body:
```js
graphql_endpoint: 'https:/www.example.com/my-graphql-endpoint'
```
##### prefix: ```graphql_endpoint_iam_region:```
##### body:
```js
graphql_endpoint_iam_region: 'my_graphql_apigateway_region'
```
##### prefix: ```ListEvents```
##### body:
```js
ListEvents = `query ListEvents {
    listEvents {
        items {
            id
            where
            description
        }
    }
}`;
```
##### prefix: ```GetEvent```
##### body:
```js
GetEvent = `query GetEvent(id: ID! nextToken: String) {
    getEvent(id: id) {
        id
        name
        description
        comments(nextToken: nextToken) {
            items {
                content
            }
        }
    }
}`;
```
##### prefix: ```CreateEvent```
##### body:
```js
CreateEvent = `mutation CreateEvent(name: String!, when: String!, where: String!, description: String!) {
    createEvent(name: name, when: when, where: where, description: description) {
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
```
##### prefix: ```SubscribeToEventComments```
##### body:
```js
SubscribeToEventComments = `subscription SubscribeToEventComments(eventId: String!) {
    subscribeToEventComments(eventId: eventId) {
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
```
##### prefix: ```custom_header```
##### body:
```js
custom_header: async () => {
    return { Authorization : 'token' }
    // Alternatively, with Cognito User Pools use this:
    // return { (await Auth.currentSession()).idToken.jwtToken }
}
```
##### prefix: ```<Connect```
##### body:
```js
<Connect query={graphqlOperation(GetEvent, { id: currEventId })}
        subscription={graphqlOperation(SubscribeToEventComments, { eventId: currEventId })}
        onSubscriptionsMsg={(prev, { subscribeToEventComments }) => {
            console.log ( subscribeToEventComments);
            return prev; }}>
    {({ data: { listEvents } }) => (
        <AllEvents events={listEvents ? listEvents.items : []} />
    )}
</Connect>
```
##### prefix: ```Amplify.configure```
##### body:
```js
Amplify.configure({
    Auth: {
        // REQUIRED - Amazon Cognito Identity Pool ID,
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
```
##### prefix: ```Auth.signIn```
##### body:
```js
Auth.signIn(username, password)
    .then(user => console.log(user))
    .catch(err => console.log(err));
```
##### prefix: ```Auth.confirmSignIn```
##### body:
```js
// If MFA enabled, sign-in should be confirmed with the confirmation code
// `user` : Return object from Auth.signIn()
// `code` : Confirmation code  
// `mfaType` : MFA Type e.g. SMS, TOTP.
Auth.confirmSignIn(user, code, mfaType)
    .then(data => console.log(data))
    .catch(err => console.log(err));
```
##### prefix: ```Auth.signUp```
##### body:
```js
Auth.signUp({
    username,
    password,
    attributes: {
        email,             // optional
        phone_number,      // optional - E.164 number convention
        // Other custom attributes...
    },
    validationData: [],  // optional
    })
    .then(data => console.log(data))
    .catch(err => console.log(err));
```
##### prefix: ```Auth.confirmSignUp```
##### body:
```js
// After retrieveing the confirmation code from the user
Auth.confirmSignUp(username, code, {
    // Optional. Force user confirmation irrespective of existing alias. By default set to True.
    forceAliasCreation: true
}).then(data => console.log(data))
  .catch(err => console.log(err));
```
##### prefix: ```Auth.signOut```
##### body:
```js
Auth.signOut()
    .then(data => console.log(data))
    .catch(err => console.log(err));
```
##### prefix: ```Auth.currentAuthenticatedUser```
##### body:
```js
Auth.currentAuthenticatedUser()
    .then(user => {
        return Auth.changePassword(user, 'oldPassword', 'newPassword');
    })
    .then(data => console.log(data))
    .catch(err => console.log(err));
```
##### prefix: ```Auth.forgotPassword```
##### body:
```js
Auth.forgotPassword(username)
    .then(data => console.log(data))
    .catch(err => console.log(err));
```
##### prefix: ```Auth.forgotPasswordSubmit```
##### body:
```js
// Collect confirmation code and new password , then
Auth.forgotPasswordSubmit(username, code, new_password)
    .then(data => console.log(data))
    .catch(err => console.log(err));
```
##### prefix: ```oauth```
##### body:
```js
oauth = {
    // Domain name
    domain : 'your-domain-prefix.auth.us-east-1.amazoncognito.com',
    // Authorized scopes
    scope: ['phone', 'email', 'profile', 'openid','aws.cognito.signin.user.admin'],
    // Callback URL
    redirectSignIn : 'http://www.example.com/signin',
    // Sign out URL
    redirectSignOut : 'http://www.example.com/signout',
    // 'code' for Authorization code grant,
    // 'token' for Implicit grant
    responseType: 'code',
    // optional, for Cognito hosted ui specified options
    options: {
        // Indicates if the data collection is enabled to support Cognito advanced security features. By default, this flag is set to true.
        AdvancedSecurityDataCollectionFlag : true
    }
}
```
##### prefix: ```Auth.verifyTotpToken```
##### body:
```js
// Then you will have your TOTP account in your TOTP-generating app (like Google Authenticator)
// Use the generated one-time password to verify the setup
Auth.verifyTotpToken(user, challengeAnswer).then(() => {

    // don't forget to set TOTP as the preferred MFA method
    Auth.setPreferredMFA(user, 'TOTP');
    // ...
}).catch( e => {
    // Token is not verified
});
```
##### prefix: ```Auth.currentCredentials```
##### body:
```js
Auth.currentCredentials()
    .then(credentials => {
        const route53 = new Route53({
            apiVersion: '2013-04-01',
            credentials: Auth.essentialCredentials(credentials)
        });
        // more code working with route53 object
        // route53.changeResourceRecordSets();
    })
```
##### prefix: ```authScreenLabels```
##### body:
```js
authScreenLabels = {
    en: {
        'Sign Up': 'Create new account',
        'Sign Up Account': 'Create a new account'
    }
};

I18n.setLanguage('en');
I18n.putVocabularies(authScreenLabels);
```
##### prefix: ```Interactions```
##### body:
```js
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
                "alias": "LATEST",
                "region": "us-east-1",
            },
        }
    }
});
```
##### prefix: ```handleComplete```
##### body:
```js
handleComplete = function (err, confirmation) {
    if (err) {
        alert('bot conversation failed')
        return;
    }
    alert('done: ' + JSON.stringify(confirmation, null, 2));

    return 'Trip booked. Thank you! What would you like to do next?';
}

Interactions.onComplete(botName, handleComplete );
```
##### prefix: ```<Chatbot```
##### body:
```js
<ChatBot
    title="My Bot"
    theme={myTheme}
    botName="BookTripMOBILEHUB"
    welcomeMessage="Welcome, how can I help you today?"
    onComplete={this.handleComplete.bind(this)}
    clearonComplete={true}
/>
```
##### prefix: ```handleComplete```
##### body:
```js
handleComplete(err, confirmation) {
    if (err) {
        Alert.alert('Error','Bot conversation failed', [{ text: 'OK' }]);
        return;
    }
    Alert.alert('Done', JSON.stringify(confirmation, null, 2), [{ text: 'OK' }]);

    this.setState({
    botName: 'BookTripMOBILEHUB'
    });
    return 'Trip booked. Thank you! What would you like to do next?';
}

render() {
    const { botName, showChatBot, welcomeMessage } = this.state;

    return (
    <SafeAreaView style={styles.container}>
        <ChatBot
            botName={botName}
            welcomeMessage={welcomeMessage}
            onComplete={this.handleComplete}
            clearonComplete={false}
            styles={Stylesheet.create({
                itemMe: {
                    color: 'red'
                }
            })}
        />
    </SafeAreaView>
    );
}
```
##### prefix: ```<Chatbot```
##### body:
```js
<ChatBot
    botName={botName}
    welcomeMessage={welcomeMessage}
    onComplete={this.handleComplete}
    clearonComplete={false}
    styles={Stylesheet.create({
        itemMe: {
            color: 'red'
        }
    })}
/>
```
##### prefix: ```PubSub```
##### body:
```js
import Amplify, { PubSub } from 'aws-amplify';
import { AWSIoTProvider } from 'aws-amplify/lib/PubSub/Providers';

// Apply plugin with configuration
Amplify.addPluggable(new AWSIoTProvider({
    aws_pubsub_region: '<YOUR-AWS-REGION>',
    aws_pubsub_endpoint: 'wss://xxxxxxxxxxxxx.iot.<YOUR-AWS-REGION>.amazonaws.com/mqtt',
}));
```
##### prefix: ```PubSub```
##### body:
```js
import Amplify, { PubSub } from 'aws-amplify';
import { MqttOverWSProvider } from 'aws-amplify/lib/PubSub/Providers';

// Apply plugin with configuration
Amplify.addPluggable(new MqttOverWSProvider({
    aws_pubsub_endpoint: 'wss://iot.eclipse.org:443/mqtt',
}));
```
##### prefix: ```PubSub.subscribe```
##### body:
```js
PubSub.subscribe('myTopic').subscribe({
    next: data => console.log('Message received', data),
    error: error => console.error(error),
    close: () => console.log('Done'),
});

```
##### prefix: ```PubSub.publish One Topic```
##### body:
```js
PubSub.publish('myTopic1', { msg: 'myTopic1' });
```
##### prefix: ```PubSub.publish Multiple Topics```
##### body:
```js
PubSub.publish(['myTopic1','myTopic2'], { msg: 'Hello to all subscribers!' });
```
##### prefix: ```PushNotification.configure```
##### body:
```js
PushNotification.configure({
    // ...
    PushNotification: {
        appId: 'XXXXXXXXXXabcdefghij1234567890ab',
    }
    // ...
});
```
##### prefix: ```PushNotification.onNotification```
##### body:
```js
// get the notification data
PushNotification.onNotification((notification) => {
    // Note that the notification object structure is different from Android and IOS
    console.log('in app notification', notification);

    // required on iOS only (see fetchCompletionHandler docs: https://facebook.github.io/react-native/docs/pushnotificationios.html)
    notification.finish(PushNotificationIOS.FetchResult.NoData);
});
```
##### prefix: ```PushNotification.onRegister```
##### body:
```js
// get the registration token
PushNotification.onRegister((token) => {
    console.log('in app registration', token);
});
```
##### prefix: ```Storage:```
##### body:
```js
Storage: {
    bucket: '', // REQUIRED - Amazon  S3 bucket
    region: 'XX-XXXX-X' // OPTIONAL - Amazon service region
}
```
##### prefix: ```Storage.configure```
##### body:
```js
Storage.configure({
    bucket: // Your bucket ARN;
    region: // Specify the region your bucket was created in;
    identityPoolId: // Specify your identityPoolId for Auth and Unauth access to your bucket;
});
```
##### prefix: ```Storage.get```
##### body:
```js
Storage.get('test.txt', { level: 'private' })
    .then ( (result) => { 
        console.log(result); 
    })
    .catch( (err) => { 
        console.log(err);
    });
```
##### prefix: ```Storage.put```
##### body:
```js
Storage.put('test.txt', 'Protected Content', {
    level: 'private',
    contentType: 'text/plain'
})
.then ( (result) => { 
    console.log(result); 
})
.catch( (err) => { 
    console.log(err);
});
```
##### prefix: ```Storage.remove```
##### body:
```js
Storage.remove('test.txt', { level: 'private' })
    .then ( (result) => { 
        console.log(result); 
    })
    .catch( (err) => { 
        console.log(err);
    });
```
##### prefix: ```Storage.list```
##### body:
```js
Storage.list('photos/', { level: 'protected' })
    .then ( (result) => { 
        console.log(result); 
    })
    .catch( (err) => { 
        console.log(err);
    });
```
##### prefix: ```fileToKey```
##### body:
```js
fileToKey(data) {
    const { name, size, type } = data;
    return 'test_' + name;
}
```
##### prefix: ```<S3Album```
##### body:
```js
<S3Album
    level="private"
    path={path}
    filter={(item) => /jpg/i.test(item.path)}
/>
```
##### prefix: ```<amplify-photo-picker```
##### body:
```js
<amplify-photo-picker
    (picked)="onImagePicked(event)"
    (loaded)="onImageLoaded(event)">
</amplify-photo-picker>
```
##### prefix: ```<amplify-s3-album```
##### body:
```js
<amplify-s3-album
    path=""
    (selected)="onAlbumImageSelected(event)">
</amplify-s3-album>
```
##### prefix: ```customPrefix```
##### body:
```js
customPrefix: {
    public: 'myPublicPrefix/',
    protected: 'myProtectedPrefix/',
    private: 'myPrivatePrefix/'
};
```
##### prefix: ```Hub Capsule Switch```
##### body:
```js
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
```
##### prefix: ```I18n Custom Dictionary```
##### body:
```js
const dict = {
    'fr': {
        'Sign In': "Se connecter",
        'Sign Up': "S'inscrire"
    },
    'es': {
        'Sign In': "Registrarse",
        'Sign Up': "Registrate"
    }
};

I18n.putVocabularies(dict);
```
##### prefix: ```addEventListener```
##### body:
```js
/**
* Listen for incoming Push events
*/
addEventListener('push', (event) => {
    var data = {};
    console.log('[Service Worker] Push Received.');
    console.log(`[Service Worker] Push had this data: "${event.data.text()}"`);

    if (!(self.Notification && self.Notification.permission === 'granted'))
        return;

    if (event.data)
        data = event.data.json();

    // Customize the UI for the message box
    var title = data.title || "Web Push Notification";
    var message = data.message || "New Push Notification Received";
    var icon = "images/notification-icon.png";
    var badge = 'images/notification-badge.png';
    var options = {
        body: message,
        icon: icon,
        badge: badge
    };

    event.waitUntil(self.registration.showNotification(title,options));

});
```
##### prefix: ```<amplify-photo-picker```
##### body:
```js
<amplify-photo-picker
    (picked)="onImagePicked(event)"
    (loaded)="onImageLoaded(event)">
</amplify-photo-picker>
```
##### prefix: ```onImagePicked```
##### body:
```js
onImagePicked( file ) {

    let key = `pics/${file.name}`;

    this.amplify.storage().put( key, file, {
        'level': 'private',
        'contentType': file.type
    })
    .then (result => console.log('uploaded: ', result))
    .catch(err => console.log('upload error: ', err));
}
```
##### prefix: ```Amplify.configure```
##### body:
```js
import Amplify from 'aws-amplify';
import awsmobile from './aws-exports';
Amplify.configure(awsmobile)
```
## Single Word Snippets

```Analytics.enable```
```Analytics.disable```
```addPluggable```
```getPluggable```
```removePluggable```
```graphqlOperation```
```queryStringParameters```
```awsServerlessExpressMiddleware```
```apiGateway```
```logInWithReadPermissionsAsync```
```handleAuthStateChange```
```userPoolWebClientId```
```OAuthSignIn```
```setPreferredMFA```
```publicChallengeParameters```
```privateChallengeParameters```
```challengeMetadata```
```challengeName```
```failAuthentication```
```issueTokens```
```length```
```challengeResult```
```challengeAnswer```
```answerCorrect```
```FetchResult```
```onRegister```
```onNotification```
```S3ImageUpload```
```onChange```
```RNFetchBlob```
```readFile```
```contentType```
```imageType```
```react-native-fetch-blob```
```PhotoPicker```
```onLoad```
```aws-amplify-react```
```S3Image```
```imgKey```
```setItem```
```getItem```
```removeItem```
```clear```
```getAllKeys```
```getCacheCurSize```
```configure```
```createInstance```
```keyPrefix```
```capacityInBytes```
```itemMaxSize```
```defaultTTL```
```defaultPriority```
```warningThreshold```
```storage```
```priority```
```expires```
```callback```
```dispatch```
```listen```
```onHubCapsule```
```setLanguage```
```info```
```debug```
```warn```
```error```
```ERROR```
```WARN```
```INFO```
```DEBUG```
```VERBOSE```
```register```
```enablePush```
```AmplifyAngularModule```
```NgModule```
```AmplifyService```
```navCtrl```
```NavController```
```amplifyService```
```modalCtrl```
```ModalController```
```selector```
```templateUrl```
```styleUrls```
```onAlbumImageSelected```
```APIClass```
```AWSAppSyncProvider```
```AWSCredentials```
```AWSIoTProvider```
```AWSKinesisProvider```
```AWSLexProvider```
```AWSPinpointProvider```
```AbstractInteractionsProvider```
```AbstractPubSubProvider```
```Amplify```
```AnalyticsClass```
```AsyncStorageCache```
```AuthClass```
```BrowserStorageCache```
```CacheList```
```CacheObject```
```ClientDevice```
```ClientsQueue```
```ConsoleLogger```
```Credentials```
```DoubleLinkedNode```
```FacebookOAuth```
```GoogleOAuth```
```HubClass```
```I18n```
```I18nOptions```
```InMemoryCache```
```JS```
```MqttOverWSProvider```
```Parser```
```RestClient```
```RestClientOptions```
```ServiceWorkerClass```
```Signer```
```StorageCache```
```StorageClass```
```AmplifyConfig```
```AnalyticsOptions```
```AnalyticsProvider```
```AuthOptions```
```CacheConfig```
```CacheItem```
```CacheItemOptions```
```ConfirmSignUpOptions```
```EventAttributes```
```EventMetrics```
```FederatedResponse```
```GraphQLOptions```
```GraphQLResult```
```ICache```
```InteractionsOptions```
```InteractionsProvider```
```InteractionsProviders```
```InteractionsResponse```
```Logger```
```MfaRequiredDetails```
```MqttProvidertOptions```
```OAuth```
```ProvidertOptions```
```PubSubOptions```
```PubSubProvider```
```SignUpParams```
```StorageOptions```
```apiOptions```
```AsyncStorage```
```AuthenticationDetails```
```BUFFER_SIZE```
```CognitoAuth```
```CognitoUser```
```CognitoUserAttribute```
```CognitoUserPool```
```CookieStorage```
```DEFAULT_ALGORITHM```
```FLUSH_INTERVAL```
```FLUSH_SIZE```
```Hub```
```Linking```
```MIME_MAP```
```NON_RETRYABLE_EXCEPTIONS```
```OS```
```RESEND_LIMIT```
```SERVICE_NAME```
```Storage```
```StorageHelper```
```_config```
```_i18n```
```_instance```
```actions```
```analyticsConfigured```
```authConfigured```
```crypto```
```date```
```expireTime```
```instance```
```logger```
```preInteract```
```startsessionRecorded```
```url```
```urlLib```
```waitForInit```
```_isInteger```
```analyticsEvent```
```authEvent```
```autoSessionRecord```
```browserClientInfo```
```browserTimezone```
```browserType```
```canonical_headers```
```canonical_request```
```clientInfo```
```credential_scope```
```dimToMake```
```dimension```
```dispatchAnalyticsEvent```
```dispatchAppStateEvent```
```dispatchAuthEvent```
```dispatchStorageEvent```
```encrypt```
```getByteLength```
```getCurrTime```
```get_authorization_header```
```get_signature```
```get_signing_key```
```graphqlOperation```
```hash```
```invalidParameter```
```isInteger```
```missingConfig```
```parse_service_info```
```sign```
```signUrl```
```signed_headers```
```storageEvent```
```string_to_sign```
```AppState```
```Constants```
```LOG_LEVELS```
```Platform```
```defaultConfig```
