var api_key = "0d0e1a10a15c9b94e796c984705a9e27-07e45e2a-2f88fe5c";
var domain = "sandboxda0fb6cfe7ef4535a56da42d5d6f573a.mailgun.org";
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
