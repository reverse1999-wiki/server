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
}
