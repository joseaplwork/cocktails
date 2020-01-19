/* eslint-disable */
const requestProxy = require('express-request-proxy');
const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;

app.use(cors());
app.all("/api/", requestProxy({ url: "http://www.recipepuppy.com/api/" }));
app.listen(port, () =>
  console.log(`Server listening on port http://localhost:${port}!👂🚀`),
);
/* eslint-enable */
