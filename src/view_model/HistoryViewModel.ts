import { getStoredRouteData } from "../function/GetStoredRouteData.tsx";
import { useHistoryReducer, ActionTypes } from "../hooks/useHistoryRedecer.ts";

export class HistoryViewModel {
    private state;
    private dispatch;
    
    constructor() {
        console.log("にゃほにゃほ　history view model 作ったナリ");
        [this.state, this.dispatch] = useHistoryReducer();
        console.log(this.state);
    }
    
    public getHistory() {
        const history = getStoredRouteData();
        console.log('ヒストリー');
        console.log(history);
        history.then((result)=> {
            console.log(result);
            let historyArray: Array<number> = [];
            result.map((value) => {
                console.log(value.route);
                console.log('ほげ');
                historyArray.push(value.route);
            });
            console.log(historyArray);
            console.log('ふが');
            this.setRouteHistory(historyArray);
        });
    }

    public get routeHistory() {
        return this.state.routeHistory;
    }
    
    public get hotspotHistory() {
        return this.state.hotspotHistory;
    }
    
    private setRouteHistory(value: Array<number>) {
        console.log("set route history");
        this.dispatch({type: ActionTypes.CHANGE_ROUTE_HISTORY, data: value});
    }

    private setHotspotHistory(value: string) {
        console.log("set hotspot history");
        this.dispatch({type: ActionTypes.CHANGE_HOTSPOT_HISTORY, data: value});
    }
}