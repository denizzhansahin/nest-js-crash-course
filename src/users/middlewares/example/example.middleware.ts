import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { Response, Request, NextFunction } from 'express';
import { NextNotification } from 'rxjs';

@Injectable()
export class ExampleMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Example Middleware')
    console.log(req.headers.authorization)
    const {authorization} = req.headers
    if(!authorization)
      throw new HttpException('No Authorization Token',HttpStatus.FORBIDDEN)
    if (authorization==="deniz_auth") next();
    else throw new HttpException('Invalid Authorization Token',HttpStatus.FORBIDDEN)
  }
}
