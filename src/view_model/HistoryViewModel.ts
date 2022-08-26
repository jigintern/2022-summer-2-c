import { HotspotHistory } from "../data/history.ts";
import { getStoredRouteData, getStoredHotspotData } from "../function/GetStoredRouteData.tsx";
import { useHistoryReducer, ActionTypes } from "../hooks/useHistoryRedecer.ts";


const hotspots: Array<string> = [
    "展望台",
    "下段の庭",
    "芝生広場",
];

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

    public getHotspotHistory(){
        const history = getStoredHotspotData();
        history.then((result)=> {
            console.log(result);
            let historyArray: Array<HotspotHistory> = [];
            result.map((value) => {
                console.log(value.hotspot);
                const s = value.created_at;
                console.log('ほげ2');
                historyArray.push({
                    id: value.hotspot,
                    name: hotspots[value.hotspot - 1],
                    timestamp: this.year(s)+"年" + this.mon(s)+"月" + this.day(s)+"日",
                });
            });
            console.log(historyArray);
            console.log('ふが2');
            this.setHotspotHistory(historyArray);
        });
    }



    public get routeHistory() {
        //historyのようにやっていく。
        return this.state.routeHistory;
    }
    
    public get hotspotHistory() {
        return this.state.hotspotHistory;
    }
    
    private setRouteHistory(value: Array<number>) {
        console.log("set route history");
        this.dispatch({type: ActionTypes.CHANGE_ROUTE_HISTORY, data: value});
    }

    private setHotspotHistory(value: Array<HotspotHistory>) {
        console.log("set hotspot history");
        this.dispatch({type: ActionTypes.CHANGE_HOTSPOT_HISTORY, data: value});
    }
    
    private year(s: string) {
        return s[0] + s[1] + s[2] + s[3];
    }
    private mon(s: string) {
        return s[5] + [6];
    }
    private day(s: string) {
        return s[8] + s[9];
    }
    private hour(s: string) {
        return 
    }
    private min(s: string) {
        return 
    }
}