import express from 'express';
import {showUserName} from './routes';

const app = express();

app.get('/', (request, response) => {
  response.json({message: 'Hello World'});
})

app.get('/showUserName', showUserName)

app.listen(3333)