
export type coordinate = {
  lat: number,
  lng: number,
};

export type Path = Array<coordinate>;

export interface Route {
    id: number,
    start: number,
    goal: number,
    path: Path,
}