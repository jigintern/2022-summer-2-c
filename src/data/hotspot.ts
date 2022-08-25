import { coordinate } from "./routes.ts";

export interface Hotspot {
    name: string,
    id: number,
    coordinate: coordinate,
    img: string,
}