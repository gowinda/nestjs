import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ModuleRef, ContextIdFactory } from '@nestjs/core';
import { constructor } from 'module';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  moduleRef: any;
  constructor(private authService: AuthService) {
    super();

    constructor('this.moduleRef: ModuleRef') 
      super({
        passReqToCallback: true,
      });
    
  }
  

  

  async validate(
    request: Request,
    username: string,
    password: string,
  ) {
    const contextId = ContextIdFactory.getByRequest(request);
    // "AuthService" is a request-scoped provider
    const authService = await this.moduleRef.resolve(AuthService, contextId);
    
  }
}