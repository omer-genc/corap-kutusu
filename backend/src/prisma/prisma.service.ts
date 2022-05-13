import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    super({
      datasources: {
        db: {
          url: 'mongodb+srv://admin:VLMBK5IkbqnafUcH@personal-cluster.xvn6i.mongodb.net/corap-kutusu',
        },
      },
    });
  }
}
