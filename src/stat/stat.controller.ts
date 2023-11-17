import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { StatService } from './stat.service';

@Controller('stat')
export class StatController {
  constructor(private statService: StatService) {}
  @Get()
  getStatByCharacter(@Query() query) {
    return this.statService.getStatByCharacter(query['name']);
  }

  @Post('save')
  saveStat(@Body() dto) {
    return this.statService.saveStat(dto);
  }
}
