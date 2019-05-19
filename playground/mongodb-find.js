const { MongoClient } = require('mongodb');
//const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', {
    useNewUrlParser: true
}, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB server');

    const db = client.db('TodoApp');

    // db.collection('Todos').find({ completed: false }).toArray().then((docs) => {
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to find', err);
    // })

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos : ${count}`);
    // }, (err) => {
    //     console.log('Unable to find', err);
    // })
    // db.collection('Users').find({ name: 'Simranjeet Singh' }).count().then((count) => {
    //     console.log(`Count : ${count}`);
    // }, (err) => {
    //     console.log('Unable to find', err);
    // })
    // client.close();

    db.collection('Users').find({ name: 'Simranjeet Singh' }).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to find', err);
    })

});