import { Controller, Get, Query } from '@nestjs/common';
import { StatService } from './stat.service';

@Controller('stat')
export class StatController {
  constructor(private statService: StatService) {}
  @Get()
  getStatByCharacter(@Query() query) {
    return this.statService.getStatByCharacter(query['name']);
  }
}
