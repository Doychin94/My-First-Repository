const { html, data } = require("./utils");
const { IncomingForm} = require('formidable')

function create(req, res) {
  res.write(
    html(`
    <h1>create</h1>
    <form action="/create" method="POST">
    <label> Name:<input type = "text" name="name"> </label>
   <label> Type: <select name="type">
    <option value="horor">Horor</option>
    <option value="comedy">Comedy</option>
    <option value="sci">Sci</option>
    </select>
    </label>
    <input type="submit">
    </form>
    `)
  );
  res.end();
}

function createItem(req,res){
const form = new IncomingForm();
form.parse(req,(err,fields) =>{
  let movie = {
    id:`abvd` + Math.floor(Math.random() * 9999),
    name:fields.name,
    type:fields.type
  }
  data.push(movie)
})
res.writeHead(301,[
  "Location",
  "/catalog"
])
res.end()
}

module.exports = {
  create,
  createItem
};
