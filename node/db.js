var mongoose = require('mongoose');
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb://localhost/testDb', { useNewUrlParser: true });

// var mongoConnectionString = 'mongodb://127.0.0.1/testDb';
// mongoose.connect(mongoConnectionString, {useNewUrlParser: true });


// mongoose.connect(process.env.testDb, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });

// mongoose.connect('mongodb://localhost:27017/testDb', {useNewUrlParser: true});

mongoose.connection.on('connected', function(){
    console.log('db connect');
});

mongoose.connection.on('error', function(err){
    console.log('db connect error: '+ err);
});

mongoose.connection.on('disconnected', function(){
    console.log('db disconnect');
});

process.on('SIGTERM',function(){
    mongoose.connection.close(function(){
        console.log('db close');
        process.exit(0);
        // server.close();
    });
});