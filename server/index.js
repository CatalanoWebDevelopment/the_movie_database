const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
var ReactDOMServer = require('react-dom/server');
const React = require('react');
import Hello from "../src/hello";

app.use("/static", express.static(path.join(__dirname, "..", "public")));
app.get("/", (req, res) => {
    const component = ReactDOMServer.renderToString(<Hello />)
    const html = `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="utf-8">
                <title>The Movie Database</title>
                <meta name="description" content="A conglomeration of the latest movies by category.">
                <meta name="author" content="Parker Catalano">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
            </head>
        
            <body>
                <div id="root">${component}</div>
                <script src="bundle.js"></script>
            </body>
        </html>
    `

    res.send(html);
})

app.listen(port, () => {
    console.log(`Server is now listening at http://localhost:${port}`);
})