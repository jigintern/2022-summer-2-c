import { Route } from "./routes.ts";

export type sanpo = {
    route: Route,
    timestamp: EpochTimeStamp,
};

export type history = Array<sanpo>;