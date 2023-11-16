import { Controller, Get, Query } from '@nestjs/common';
import { LevelService } from './level.service';

@Controller('level')
export class LevelController {
  constructor(private levelService: LevelService) {}
  @Get()
  getLevelCostByRarity(@Query() query) {
    return this.levelService.getLevelCostByRarity(parseInt(query['rarity']));
  }
}
