var Datastore = require('nedb-promise');
var path = require('path');
var remote = require('electron');

var tabDB = new Datastore({
  autoload: true,
  filename: path.join(remote.app.getPath('appData'), '/quick-jira/tabs.db')
});

function saveTab (query, title, sequence) {
  var tab = {"query" : query, "title" : title, "sequence" : sequence, "savedDate" : null};
  return tabDB.insert(tab);
}

function getTabs () {
  return tabDB.cfind({}).sort({ sequence: 1 }).exec();
}

const dataService = {
  saveTab, getTabs
}

module.exports = dataService;
