import { Injectable } from '@nestjs/common';
import { Route } from './entities/route.entity';

@Injectable()
export class RoutesService {
  private routes: Route[] = [
    {
      title: 'Uma Rota em Paris, França',
      startPosition: { lat: 48.8817373, lng: 2.3517782 },
      endPosition: { lat: 48.9060586, lng: 2.3347837 },
    },
    {
      title: 'Uma Rota em Berlin, Alemanha',
      startPosition: { lat: 52.3536393, lng: 13.1804128 },
      endPosition: { lat: 52.5065133, lng: 13.1445545 },
    },

    {
      title: 'Uma Rota em Luanda, Angola',
      startPosition: { lat: -8.8831258, lng: 13.4943535 },
      endPosition: { lat: -8.8096111, lng: 13.235178 },
    },

    {
      title: 'Uma Rota em Nova York, EUA',
      startPosition: { lat: 40.7367126, lng: -74.1597814 },
      endPosition: { lat: 40.6971494, lng: -74.2598655 },
    },

    {
      title: 'Uma Rota no Rio de Janeiro, Brasil',
      startPosition: { lat: -22.729397, lng: -43.5613797 },
      endPosition: { lat: -22.9138851, lng: -43.7261746 },
    },
  ];

  findAll() {
    return this.routes;
  }
}
