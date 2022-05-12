import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup() {
    const res = this.authService.signup();
    return res;
  }

  @Post('signin')
  signin() {
    return this.authService.signin();
  }
}
