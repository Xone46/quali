const PouchDB = require('pouchdb').default;
var users = new PouchDB('users');

export default users;