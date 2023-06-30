import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateRestaurantDto } from 'src/restaurants/dtos/restaurants.dtos';
import { RestaurantsService } from 'src/restaurants/services/restaurants/restaurants.service';

@Controller('restaurants')
export class RestaurantsController {
  constructor(private readonly restaurantService: RestaurantsService) {}

  @Get()
  getRestaurants() {
    return this.restaurantService.getRestaurants();
  }

  @Get('id/:id')
  findRestaurantsById(@Param('id', ParseIntPipe) id: number) {
    return this.restaurantService.findRestaurantsById(id);
  }

  @Post('create')
  @UsePipes(ValidationPipe)
  createRestaurants(@Body() createRestaurantDto: CreateRestaurantDto) {
    return this.restaurantService.createRestaurants(createRestaurantDto);
  }
}
