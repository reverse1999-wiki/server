import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LevelService {
  constructor(private prisma: PrismaService) {}

  async getLevelCostByRarity(rarity: number) {
    const cost = await this.prisma.levelCost.findMany({
      where: {
        rarity: rarity,
      },
    });
    return cost;
  }

  async saveLevelCost(levelCosts: object[]) {
    for (let i = 0; i < levelCosts.length; i++) {
      await this.prisma.levelCost.create({
        data: {
          level: levelCosts[i]['level'],
          rarity: levelCosts[i]['rarity'],
          dust: levelCosts[i]['dust'],
          sharpodonty: levelCosts[i]['sharpodonty'],
          insight: levelCosts[i]['insight'],
        },
      });
    }
    return 'complete';
  }
}
