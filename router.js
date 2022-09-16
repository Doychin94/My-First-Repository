const routes = {};

function registration(method, path, handler) {
  if (routes[path] == undefined) {
    routes[path] = {};
  }
  routes[path][method] = handler;
 
}

function router(req, res) {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const method = req.method;
  let action = routes[url.pathname];
  let handler;
  if(action !== undefined){
  handler = action[method]
  }
  if (typeof handler == "function"){
    handler(req, res);
  } else {
    routes.wrongPath.GET(req, res);
  }
}

module.exports = {
  router,
  registration,
  get:registration.bind(null,"GET"),
  post:registration.bind(null,"POST")
};
