import {Request, Response} from 'express';
import createUser from './services/CreateUser';

export function showUserName(request: Request, response: Response) {
  response.json({name: 'Vinícius Mendite'});
}

export function createLoginUser(request: Request, response: Response) {
  const user = createUser({
    name: 'vinicius@outlook.com',
    email: 'vinicius',
    password: '1234',
    techs: [
      'Node.js', 
      'ReactJS', 
      'React Native',
      { title: 'JavaScript', experience: 100},
    ],
  });
  return response.json({message: 'Create User'});
}
