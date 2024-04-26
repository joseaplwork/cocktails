const requestProxy = require('express-request-proxy');
const express = require('express');
const path = require('path');
const app = express();
const router = express.Router();
const port = 3005;

router.get('/api/', requestProxy({ url: 'http://www.thecocktaildb.com/api/json/v1/1/search.php' }));
app.use(express.static(path.join(__dirname, '../build')));
app.use(router);
app.listen(port, () => console.log(`Server listening on port http://localhost:${port} !👂🚀`));
