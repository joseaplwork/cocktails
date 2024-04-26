import express, { Router } from 'express';
import expressRequestProxy from 'express-request-proxy';
import serverless from 'serverless-http';

const app = express();
const router = Router();

router.get('/', express.static('../../build'));
router.get('/api/', expressRequestProxy({ url: 'http://www.thecocktaildb.com/api/json/v1/1/search.php' }));

app.use('/api', router);

export const handler = serverless(app);
