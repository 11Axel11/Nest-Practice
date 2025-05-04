export class CreateGameDto {
    game_name: string;
    game_description: string;
    main_character: string;
    main_villain?: string;
}

// Para validar el DTO, se puede usar la librería class-validator y tener más seguridad en los tipos de datos que se envían al servidor.
/*
import { IsString, IsNotEmpty, IsOptional, IsNullable } from 'class-validator';

export class CreateGameDto {
  @IsString()
  @IsNotEmpty()
  game_name: string;

  @IsString()
  @IsNotEmpty()
  game_description: string;

  @IsString()
  @IsNotEmpty()
  main_character: string;

  // 1) Solo opcional (no enviar la clave)
  @IsOptional()
  @IsString()
  main_villain?: string;

  // --- O bien ---

  // 2) Nullable (clave presente = null permitido)
  // @IsNullable()        // NestJS >= 10.2
  // @IsOptional()        // si además puede faltar
  // main_villain?: string | null;
}

*/