import { useHistoryReducer, ActionTypes } from "../hooks/useHistoryRedecer.ts";

export class HistoryViewModel {
    private state;
    private dispatch;
    
    constructor() {
        console.log("にゃほにゃほ　history view model 作ったナリ");
        [this.state, this.dispatch] = useHistoryReducer();
        console.log(this.state);
    }

    public get routeHistory() {
        return this.state.routeHistory;
    }
    
    public get hotspotHistory() {
        return this.state.hotspotHistory;
    }
    
    private setRouteHistory(value: string) {
        console.log("set route history");
        this.dispatch({type: ActionTypes.CHANGE_ROUTE_HISTORY, data: value});
    }

    private setHotspotHistory(value: string) {
        console.log("set hotspot history");
        this.dispatch({type: ActionTypes.CHANGE_HOTSPOT_HISTORY, data: value});
    }
}