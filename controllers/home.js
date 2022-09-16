const { html } = require("./utils")

function home(req, res) {
    res.write(
      html(`
  <h1>Home Page</h1>
  <p>Welcome</p>
  `)
    );
    res.end();
  }


  module.exports = {
    home
  }