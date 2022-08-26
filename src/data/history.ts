import { Route } from "./routes.ts";

export type RouteHistory = {
//    route: Route,
    id: number,
    timestamp: any,
};

export type RouteHistorys = Array<RouteHistory>;

export type HotspotHistory = {
    id: number,
    timestamp: any,
    name: string,
}