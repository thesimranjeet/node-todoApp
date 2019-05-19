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

    //deleteOne

    // db.collection('Todos').deleteOne({ text: 'Eat Lunch' });

    //deleteMany

    db.collection('Users').deleteMany({ name: 'Andrew' }).then((result) => {
        console.log(result);
    });


    //findOneAndDelete

    // db.collection('Todos').findOneAndDelete({ text: 'Eat Lunch' }).then((result) => {
    //     console.log(result);
    // });

    client.close();

});