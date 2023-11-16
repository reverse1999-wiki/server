import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { StatModule } from './stat/stat.module';
import { CharacterModule } from './character/character.module';
import { LevelModule } from './level/level.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    StatModule,
    CharacterModule,
    LevelModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
