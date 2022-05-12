import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  signup() {
    return 'signup successfuly';
  }

  login() {
    return 'login successfuly';
  }
}
