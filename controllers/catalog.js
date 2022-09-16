const { html,data } = require("./utils");


function catalog(req, res) {
  res.statusCode = 201
  res.write(
    html(`
    <h1>Catalog</h1>
    <p>Movie list</p>
    <ul>
    ${data.map(el =>`<li data-id=${el.id}>${el.name} - ${el.type} </li>`).join(' ')}
    </ul>
    `)
  );
  res.end();
}


  module.exports = {
    catalog
  }