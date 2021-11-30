const PouchDB = require('pouchdb').default;
var interventions = new PouchDB('interventions');

export default interventions;