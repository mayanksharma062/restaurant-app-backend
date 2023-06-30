import { IsNotEmpty, MinLength } from 'class-validator';
import { Status } from 'src/typeorm/restaurant.util';

export class CreateRestaurantDto {
  @IsNotEmpty()
  @MinLength(3)
  name: string;

  @IsNotEmpty()
  @MinLength(3)
  city: string;

  @IsNotEmpty()
  @MinLength(3)
  state: string;

  @IsNotEmpty()
  @MinLength(3)
  status: Status;
}
