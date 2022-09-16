function html(template) {
    return `<!DOCTYPE html>
      <html lang="en">
      <title>Demo site</title>
      <body>
      <nav>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/catalog">Catalog</a></li>
      <li><a href="/create">Create</a></li>
      </nav>
      <main>
          ${template}
          </main>
      </body>
      </html>
      `;
  }

  function wrongPath(req, res) {
    res.statusCode = 404;
    res.write(
      html(`
        <h1> 404 </h1>
        <p> Data not found! </p>
    `)
    );
    res.end();
  }

  const data = [
    {
      id:"ade1234",
      name:"Amitivil",
      type:"horor"
    },
    {
      id:"5678fshg",
      name:"Ace Ventura",
      type:"comedy"
    },
    {
      id:"12378fshg",
      name:"Armagedon",
      type:"sci"
    }
  ]


  module.exports = {
    html,
    wrongPath,
    data
  }