import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CharacterService {
  constructor(private prisma: PrismaService) {}

  async getAllCharacter() {
    const allCharacter = await this.prisma.character.findMany();
    return allCharacter;
  }

  async getCharacterByName(name: string) {
    const character = await this.prisma.character.findUnique({
      where: {
        name: name,
      },
    });
    return character;
  }

  async saveCharacter(characters: object[]) {
    for (let i = 0; i < characters.length; i++) {
      await this.prisma.character.create({
        data: {
          name: characters[i]['name'],
          afflatus: characters[i]['afflatus'],
          rarity: characters[i]['rarity'],
          damage_type: characters[i]['damage_type'],
          position: characters[i]['position'],
        },
      });
    }
    return 'complete';
  }
}
