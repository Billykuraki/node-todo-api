
// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5a8d150f55f99941fc60ddfd')
    // }, {
    //     $set: {completed: true}
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate(
        { _id: new ObjectID('5a83ce4b8aa5431b140e8288') },
        { $inc: {age: 3} },
        { returnOriginal: false }
    ).then((result) => {
        console.log(result);
    });

    // db.close();
});