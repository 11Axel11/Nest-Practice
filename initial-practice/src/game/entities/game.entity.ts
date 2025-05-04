import { Column, Entity,PrimaryGeneratedColumn } from "typeorm";



@Entity('games')
export class Game {

    @PrimaryGeneratedColumn()
    id: number;
   
    @Column({ type: 'varchar', length: 255 })
    game_name: string;

    @Column({type: 'varchar', length: 500})
    game_description: string;
    
    @Column({type: 'varchar', length: 255})
    main_character: string;

    @Column({type: 'varchar', length: 255, nullable: true})
    main_villain?: string;

}
