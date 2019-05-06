const slack_team = process.env['SLACK_TEAM'];;
const slack_token = process.env['SLACK_TOKEN'];

const https = require('https');

module.exports.doInvite = (event, context, callback) => {
  console.log('event: ' + JSON.stringify(event));

  const stamp = (new Date().getTime());
  const options = {
    hostname: slack_team + '.slack.com',
    port: 443,
    path: '/api/users.admin.invite?t=' + stamp + '&token=' + slack_token,
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  };


  const req = https.request(options, (res) => {
    let responseBody = '';
    res.setEncoding('utf8');
    res.on('data', (chunk) => responseBody += chunk);
    res.on('end', () => {
      if (res.headers['content-type'] === 'application/json') {
        responseBody = JSON.parse(responseBody);
      }
      const response = {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': process.env['ALLOW_ORIGIN'],
          'Access-Control-Allow-Credentials': true,
        },
        body: JSON.stringify(responseBody),
      };
      callback(null, response);
    });
  });

  const payload = event.body ? JSON.parse(event.body) : event;
  let channels = '';
  if (payload.channel) channels = '&channels=' + payload.channel;
  let restricted = '';
  if (payload.restricted) restricted = '&ultra_restricted=' + payload.restricted;

  const params = 'email=' + encodeURIComponent(payload.email) +
    '&token=' + slack_token + '&set_active=true' + channels + restricted

  req.on('error', callback);
  req.write(params);
  req.end();
}

