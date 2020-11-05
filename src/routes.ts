import {Request, Response} from 'express';

export function showUserName(request: Request, response: Response) {
  response.json({name: 'Vinícius Mendite'});
}
