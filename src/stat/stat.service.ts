import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class StatService {
  constructor(private prisma: PrismaService) {}
  async getStatByCharacter(name: string) {
    const stat = await this.prisma.stat.findUnique({
      where: {
        character_name: name,
      },
    });
    return stat;
  }
}
