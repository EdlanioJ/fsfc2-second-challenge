import styles from './RouteList.module.css';

interface Position {
  lat: number;
  lng: number;
}

export interface Route {
  _id: string;
  title: string;
  startPosition: Position;
  endPosition: Position;
}
interface ListProps {
  routes: Route[];
}

interface ListItemProps {
  route: Route;
}
const RouteList: React.FC<ListProps> = ({ routes }) => {
  const ListItem: React.FC<ListItemProps> = ({ route }) => (
    <div className={styles.listItemContainer}>
      <h2>{route.title}</h2>
      <div className={styles.row}>
        <div>
          <strong>Posição Inicial</strong>
          <div>
            <p>
              <span>Latitude: </span>
              {route.startPosition.lat}
            </p>
            <p>
              <span>longitude: </span>
              {route.startPosition.lng}
            </p>
          </div>
        </div>

        <div>
          <strong>Posição Final</strong>
          <div>
            <p>
              <span>Latitude: </span>
              {route.endPosition.lat}
            </p>
            <p>
              <span>longitude: </span>
              {route.endPosition.lng}
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className={styles.container}>
      {routes.map((route, key) => (
        <ListItem key={key} route={route} />
      ))}
    </div>
  );
};

export default RouteList;
