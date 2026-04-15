# Slack Notification POC

A simple Proof of Concept (POC) for sending notifications to Slack using the `slack-notify` library in a Node.js environment.

## Features

- Send simple text messages to Slack.
- Support for custom channels, icons, and usernames.
- Pre-configured methods for common notification types: `bug`, `success`, and `alert`.
- Advanced formatting using Slack attachments and fields.
- Promise-based API.

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- A Slack Incoming Webhook URL. You can create one by setting up an "Incoming Webhooks" integration in your Slack workspace.

## Installation

1. Clone the repository or download the source code.
2. Install the dependencies:

```bash
npm install
```

## Configuration

Open `slack-notify.js` and replace the placeholder webhook URL with your actual Slack webhook URL:

```javascript
const MY_SLACK_WEBHOOK_URL = 'https://hooks.slack.com/services/YOUR/WEBHOOK/URL';
```

## Usage

Run the script using Node.js:

```bash
node slack-notify.js
```

## Examples

The `slack-notify.js` file includes several examples:

### Basic Text Message
```javascript
slack.send('Hello!')
  .then(() => console.log('Done!'))
  .catch(err => console.error(err));
```

### Custom Configuration
```javascript
slack.send({
  channel: '#custom-channel',
  icon_url: 'http://example.com/icon.png',
  text: 'Custom notification message',
  username: 'CustomBot'
});
```

### Pre-configured Methods
```javascript
slack.bug('Something broke!'); // Posts to #bugs by default
slack.success('Operation successful!'); // Posts to #alerts by default
slack.alert('Important notice!'); // Posts to #alerts by default
```

### Rich Formatting with Fields
```javascript
slack.alert({
  text: 'Server Stats',
  fields: {
    'CPU usage': '7.51%',
    'Memory usage': '254mb'
  }
});
```


