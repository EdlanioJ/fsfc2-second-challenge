export interface Position {
  lat: number;
  lng: number;
}

export class Route {
  title: string;

  startPosition: Position;

  endPosition: Position;
}
