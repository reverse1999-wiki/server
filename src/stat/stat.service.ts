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

  async saveStat(stats: object[]) {
    for (let i = 0; stats.length; i++) {
      await this.prisma.stat.create({
        data: {
          character_name: stats[i]['character_name'],
          atk: stats[i]['atk'],
          hp: stats[i]['hp'],
          reality_def: stats[i]['reality_def'],
          mental_def: stats[i]['mental_def'],
          critical_technique: stats[i]['critical_technique'],
          critical_rate: stats[i]['critical_rate'],
          critical_damage: stats[i]['critical_damage'],
        },
      });
    }
    return 'complete';
  }
}
