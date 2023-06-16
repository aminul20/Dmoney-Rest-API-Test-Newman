const newman = require('newman');
 
newman.run({
    // collection: './pathToFile/collection.json', // Collection URL from a public link or the Postman API can also be used
    collection: require('./collection/collection.json'),
    // collection: 'https://api.postman.com/collections/18254245-9ed385b6-d40e-4aeb-bf7f-d0ec1fb815cf?access_key=PMAT-',
    // environment: require('./collection/env.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/', // If not specified, the file will be written to `newman/` in the current working directory.
            // template: './template.hbs'
            // logs: true,
            // showOnlyFails: true,
            // noSyntaxHighlighting: true,
            // testPaging: true,
            // browserTitle: "My Newman report",
            // title: "My Newman Report",
            // titleSize: 4,
            // omitHeaders: true,
            // skipHeaders: "Authorization",
            // omitRequestBodies: true,
            // omitResponseBodies: true,
            // hideRequestBody: ["Login"],
            // hideResponseBody: ["Auth Request"],
            // showEnvironmentData: true,
            // skipEnvironmentVars: ["API_KEY"],
            // showGlobalData: true,
            // skipGlobalVars: ["API_TOKEN"],
            skipSensitiveData: true,
            // showMarkdownLinks: true,
            // showFolderDescription: true,
            timezone: "Asia/Dhaka",
            // skipFolders: "folder name with space,folderWithoutSpace",
            // skipRequests: "request name with space,requestNameWithoutSpace",
            displayProgressBar: true
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});