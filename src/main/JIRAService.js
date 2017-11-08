var request = require('axios');
var config = require('react-global-configuration');

//json conversion
var jsonMapper = require('json-mapper');
var jsonConverter = jsonMapper.makeConverter({
    key: 'key',
    title: 'fields.summary',
    assignee: 'fields.assignee.displayName',
    reporter: 'fields.reporter.displayName',
    priority: 'fields.priority.name',
    status: 'fields.status.name',
    comments: ['fields.comment.comments', jsonMapper.map(function(input){
        return input.author.displayName+ " : " +input.body;
    })],
    link: jsonMapper.helpers.template(config.get('JIRA_BASE_URL')+'browse/{key}'),
});

function findIssues(jql){
  var options = {
    url: config.get('GET_RESULTS_API') + jql,
    method: 'get', // default
    baseURL: config.get('JIRA_BASE_URL'),
    withCredentials: true,
    auth: {
      username: config.get('JIRA_USER'),
      password: config.get('JIRA_PASSWORD')
    },
    transformResponse: [
      (data) => {
        if (typeof data === 'string') {
          try {
            data = JSON.parse(data);
          } catch (e) { /* Ignore */ }
        }
        return data;
      },
      (data) => {
        var cleanData = [];
        var issues = data.issues
        for(var i in issues) {
            cleanData.push(jsonConverter(issues[i]));
        }
        return cleanData;
      }
    ]
  };
  return request(options);
}

const JIRAService = {
  findIssues
}

module.exports = JIRAService;
