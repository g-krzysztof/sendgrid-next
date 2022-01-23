const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
  to: 'rubinowe@rubinowe.pl',
  from: 'rubinowe@rubinowe.pl',
  subject: 'sendgrid test message',
  text: 'sendgrid test message text',
  html: '<strong>sendgrid test message html</strong>',
};

app.use(cors());
const PORT = process.env.PORT || 3010;
app.set('port', process.env.PORT || 3010);
app.use(express.static(path.join(__dirname, 'public')));
app.listen(PORT, function () {
  console.log('Node.js server is running on port ' + PORT);
});

app.get('/sendmail',(req, res) => {

  sgMail.send(msg);
  res.send('Success!');
});