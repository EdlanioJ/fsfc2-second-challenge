import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';
import { Route, RouteDocument } from './entities/route.entity';

@Injectable()
export class RoutesService {
  constructor(
    @InjectModel(Route.name) private routeModel: Model<RouteDocument>,
  ) {}

  create(createRouteDto: CreateRouteDto) {
    const routeModel = new this.routeModel(createRouteDto);
    return routeModel.save();
  }

  findAll() {
    return this.routeModel.find().exec();
  }

  findOne(id: string) {
    return this.routeModel.findById(id);
  }

  update(id: string, updateRouteDto: UpdateRouteDto) {
    return this.routeModel.findByIdAndUpdate(id, updateRouteDto).exec();
  }

  remove(id: string) {
    return this.routeModel.findByIdAndDelete(id).exec();
  }
}
