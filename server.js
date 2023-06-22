const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const api_routes = require('./routes/api-routes');
const html_routes = require('./routes/html-routes');

app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
// Use apiRoutes
app.use(api_routes);
app.use(html_routes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });