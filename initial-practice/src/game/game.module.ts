import { Module } from '@nestjs/common';
import { GameService } from './game.service';
import { GameController } from './game.controller';
import { DatabaseModule } from 'src/database/database.module';
import { gameProviders } from './game.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [GameController],
  providers: [...gameProviders, GameService],
  exports: [GameService], // Exporting GameService to be used in other modules
})
export class GameModule {}
