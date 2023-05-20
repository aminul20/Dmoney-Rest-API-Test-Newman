const newman = require('newman');
 
newman.run({
    // collection: './pathToFile/collection.json', // Collection URL from a public link or the Postman API can also be used
    collection: require('./collection/collection.json'),
    // collection: 'https://api.postman.com/collections/18254245-9ed385b6-d40e-4aeb-bf7f-d0ec1fb815cf?access_key=PMAT-01H0DG67MK5MWF38Z503R9CBRN',
    // environment: require('./collection/env.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});