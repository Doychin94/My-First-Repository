const http = require("http");
const rout = require("./router");
const { home } = require("./controllers/home");
const { about } = require("./controllers/about");
const { catalog } = require("./controllers/catalog");
const { wrongPath } = require("./controllers/utils");
const { create,createItem } = require("./controllers/create");

rout.get("/", home);
rout.get("/about", about);
rout.get("/catalog", catalog);
rout.get("/create", create);
rout.post("/create",createItem)

rout.get("wrongPath", wrongPath);

const server = http.createServer((req, res) => {
  rout.router(req, res);
});

server.listen(3000);
