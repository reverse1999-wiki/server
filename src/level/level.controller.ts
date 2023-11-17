import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { LevelService } from './level.service';

@Controller('level')
export class LevelController {
  constructor(private levelService: LevelService) {}
  @Get()
  getLevelCostByRarity(@Query() query) {
    return this.levelService.getLevelCostByRarity(parseInt(query['rarity']));
  }

  @Post('save')
  saveLevelCost(@Body() dto) {
    return this.levelService.saveLevelCost(dto);
  }
}
