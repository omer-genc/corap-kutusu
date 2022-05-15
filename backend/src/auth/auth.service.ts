import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

import * as argon from 'argon2';
import { SigninType, SignupType } from './dto';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async signup(dto: SignupType) {
    try {
      const hash = await argon.hash(dto.email);
      delete dto.password;
      const user = await this.prisma.user.create({
        data: {
          ...dto,
          hash: hash,
        },
      });
      return user;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if ((error.code = 'P2002')) {
          throw new ForbiddenException('Credantial Taken');
        }
      }
      throw error;
    }
  }

  async signin(dto: SigninType) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });

    if (!user) {
      throw new NotFoundException('User Not Found');
    }

    const pwMatches = await argon.verify(user.hash, dto.password);

    if (!pwMatches) {
      throw new ForbiddenException('Wrong Password');
    }

    delete user.hash;
    return user;
  }
}
