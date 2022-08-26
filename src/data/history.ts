import { Route } from "./routes.ts";

export type sanpo = {
    route: Route,
    timestamp: EpochTimeStamp,
};

export type RouteHistory = Array<sanpo>;

export type HotspotHistory = {
    id: number,
    timestamp: any,
    name: string,
}