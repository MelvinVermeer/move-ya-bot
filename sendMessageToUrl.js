const request = require("request");

const sendMessageToUrl = (responseURL, message) => {
  var postOptions = {
    uri: responseURL,
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    json: message,
  };

  request(postOptions, (error, response, body) => {
    if (error) {
      console.error(error)
    }
  });
};

module.exports = sendMessageToUrl;
