/* eslint-disable */
const requestProxy = require('express-request-proxy');
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3005;

app.use(cors());
app.all('/api/', requestProxy({ url: 'http://www.thecocktaildb.com/api/json/v1/1/search.php' }));
app.listen(port, () => console.log(`Server listening on port http://localhost:${port}!👂🚀`));
/* eslint-enable */
