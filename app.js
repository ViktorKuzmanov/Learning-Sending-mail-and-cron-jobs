const keys = require("./keys");

var api_key = keys.mailgun.apiKey;
var domain = keys.mailgun.domain;
var mailgun = require("mailgun-js")({ apiKey: api_key, domain: domain });

var data = {
  from: "Viktor4eto kuzmanovviktor5@gmail.com",
  to: "kuzmanovviktor4@gmail.com",
  subject: "Hello",
  text: "Testing some Mailgun awesomeness!",
};

mailgun.messages().send(data, function (error, body) {
  if (error) {
    console.log(error);
  } else {
    console.log(body);
  }
});
