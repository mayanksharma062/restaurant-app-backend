import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Restaurant } from 'src/typeorm';
import { Repository } from 'typeorm';
import { CreateRestaurantDto } from '../../dtos/restaurants.dtos';

@Injectable()
export class RestaurantsService {
  constructor(
    @InjectRepository(Restaurant)
    private readonly restaurantRepository: Repository<Restaurant>,
  ) {}

  createRestaurants(createRestaurantDto: CreateRestaurantDto) {
    const newRestaurant = this.restaurantRepository.create(createRestaurantDto);
    return this.restaurantRepository.save(newRestaurant);
  }

  getRestaurants() {
    return this.restaurantRepository.find();
  }

  findRestaurantsById(id: number) {
    return this.restaurantRepository.findOne({
      where: { id: id },
    });
  }
}
