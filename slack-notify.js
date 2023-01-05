// Import module:

import SlackNotify from 'slack-notify';
const MY_SLACK_WEBHOOK_URL = 'https://hooks.slack.com/services/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';
const slack = SlackNotify(MY_SLACK_WEBHOOK_URL);

// Example sending just text, using the Slack-provided configuration:

slack.send('Hello!')
  .then(() => {
    console.log('done!');
  }).catch((err) => {
    console.error(err);
  });

// The Slack-provided configuration can be overridden:

slack.send({
  channel: '#myCustomChannelName',
  icon_url: 'http://example.com/my-icon.png',
  text: 'Here is my notification',
  unfurl_links: 1,
  username: 'Jimmy'
});

// Roll your own notification type:

var statLog = slack.extend({
  channel: '#statistics',
  icon_emoji: ':computer:',
  username: 'Statistics'
});

statLog({
  text: 'Current server statistics',
  fields: {
    'CPU usage': '7.51%',
    'Memory usage': '254mb'
  }
});

// Promises are supported:

slack.send('Hello!').then(() => {
  console.log('Done!');
}).catch((err) => {
  console.error('API error:', err);
})

// Three pre-configured methods are provided:

// Posts to #bugs by default:
slack.bug('Something broke!');

// Posts to #alerts by default:
slack.success('Something happened correctly!');
slack.alert('Something important!');

// Send custom fields which are nicely displayed by the Slack client:

slack.alert({
  text: 'Current server stats',
  fields: {
    'CPU usage': '7.51%',
    'Memory usage': '254mb'
  }
});

// The `fields` object is custom shorthand for the `attachments` array, which is also supported.

slack.alert({
  text: 'Current server stats',
  attachments: [
    {
      fallback: 'Required Fallback String',
      fields: [
        { title: 'CPU usage', value: '7.51%', short: true },
        { title: 'Memory usage', value: '254mb', short: true }
      ]
    }
  ]
});

// Set slack message color

slack.alert({
  text: 'Current server stats',
  attachments: [
    {
      fallback: 'Required Fallback String',
      color: '#FF0000',
      fields: [
        { title: 'CPU usage', value: '90%', short: true },
        { title: 'Memory usage', value: '254mb', short: true }
      ]
    }
  ]
});
