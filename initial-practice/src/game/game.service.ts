import { Inject, Injectable } from '@nestjs/common';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { Game } from './entities/game.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GameService {


  constructor(
    @Inject('GAME_REPOSITORY')
    private readonly gameRepository: Repository<Game>
  ) {}

  create(CreateGameDto: CreateGameDto) {
    
    const addedGame = this.gameRepository.create(CreateGameDto);
    this.gameRepository.save(addedGame);
    return "Se ha creado el juego correctamente"; // Se puede retornar otros mensajes como return "Se el juego ha creado correctamente"
    // se puede retornar otros mensajes como return "Se el juego ha creado correctamente"
  }

  findAll() {
    return this.gameRepository.find();
  }

  findOne(id: number) {
    return this.gameRepository.findOneBy({ id });
  }

  async update(id: number, updateGameDto: UpdateGameDto) {
    const updatedGame = await this.gameRepository.update({id}, updateGameDto);
    return updatedGame;
  }

  remove(id: number) {
    return this.gameRepository.delete({ id });
  }
}


