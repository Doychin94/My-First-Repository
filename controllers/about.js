const { html } = require("./utils")

function about(req, res) {
  res.write(
    html(`
  <h1> about </h1>
  <p> +1 355 22112 </p>
`)
  );
  res.end();
}

  module.exports = {
    about
  }