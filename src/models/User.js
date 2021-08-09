const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const modelSchema = new mongoose.Schema({
    name: String,
    email: String,
    state: String,
    passwordHash: String,
    token: String
});

const modelName = 'User';
// Se já existir o model pega ele
if(mongoose.connection && mongoose.connection.models[modelName]) {
    module.exports = mongoose.connection.models[modelName];
} else {// Senão cria e pega
    module.exports = mongoose.model(modelName, modelSchema);
}

/*
users
- _id
- name
- email
- state
- passwordHash
- token
*/