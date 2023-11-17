import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CharacterService } from './character.service';

@Controller('character')
export class CharacterController {
  constructor(private characterService: CharacterService) {}
  @Get('all')
  getAllCharacter() {
    return this.characterService.getAllCharacter();
  }

  @Get()
  getCharacterByName(@Query() query) {
    return this.characterService.getCharacterByName(query['name']);
  }

  @Post('save')
  saveCharacter(@Body() dto) {
    return this.characterService.saveCharacter(dto);
  }
}
