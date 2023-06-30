import { Module } from '@nestjs/common';
import { RestaurantsController } from './controllers/restaurants/restaurants.controller';
import { RestaurantsService } from './services/restaurants/restaurants.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Restaurant } from 'src/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Restaurant])],
  controllers: [RestaurantsController],
  providers: [RestaurantsService],
})
export class RestaurantsModule {}
