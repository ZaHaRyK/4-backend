import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ImagesEntity } from '../../../file.services/images/imageEntity/images.entity';
import { PeopleEntity } from '../../people/peopleEntity/people.entity';
import { FilmEntity } from '../../films/filmEntity/film.entity';

@Entity({ name: 'starships' })
export class StarshipEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  model: string;

  @Column()
  manufacturer: string;

  @Column()
  cost_in_credits: string;

  @Column()
  length: string;

  @Column()
  max_atmosphering_speed: string;

  @Column()
  crew: string;

  @Column()
  passengers: string;

  @Column()
  cargo_capacity: string;

  @Column()
  consumables: string;

  @Column()
  hyperdrive_rating: string;

  @Column()
  MGLT: string;

  @Column()
  starship_class: string;

  @ManyToMany(() => PeopleEntity, (people) => people.starships, {
    onDelete: 'CASCADE',
  })
  pilots: PeopleEntity[];

  @ManyToMany(() => FilmEntity, (film) => film.starships, {
    cascade: true,
    eager: true,
    onDelete: 'CASCADE',
  })
  @JoinTable()
  films: FilmEntity[];

  @Column()
  created: string;

  @Column()
  edited: string;

  @ManyToMany(() => ImagesEntity, { cascade: true, eager: true })
  @JoinTable()
  images: ImagesEntity[];
}
