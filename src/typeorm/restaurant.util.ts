import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum Status {
  ACTIVE = 'active',
  DEACTIVATED = 'deactivated',
}

@Entity()
export class Restaurant {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'restaurant_id',
  })
  id: number;

  @Column({
    nullable: false,
    default: '',
  })
  name: string;

  @Column({
    name: 'city',
    nullable: false,
    default: '',
  })
  city: string;

  @Column({
    nullable: false,
    default: '',
  })
  state: string;

  @Column({
    nullable: false,
    type: 'enum',
    enum: Status,
    default: Status.ACTIVE,
  })
  status: Status;
}
