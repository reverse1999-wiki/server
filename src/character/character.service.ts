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
}
