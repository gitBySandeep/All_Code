import express from 'express';
import bodyParser from 'body-parser';
import sendMail from './controller/mai.controller.js';
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', sendMail);

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
