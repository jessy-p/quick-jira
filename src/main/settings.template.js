const config = {
  NAME : 'Quick Jira',
  JIRA_BASE_URL : 'https://<JIRA_DOMAIN>/jira/',
  GET_RESULTS_API : 'rest/api/2/search?fields=*navigable,comment&jql=',
  JIRA_USER : '<JIRA_USER>',
  JIRA_PASSWORD : '<JIRA_PASSWORD>'
}

module.exports = config;
