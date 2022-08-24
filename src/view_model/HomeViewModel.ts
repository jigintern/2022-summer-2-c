import { Route } from "../data/routes.ts";
import { useMapReducer, ActionTypes } from "../hooks/useMapReducer.ts";

export class HomeViewModel {
    private state;
    private dispatch;
    
    constructor() {
//        [this.state, this.dispatch] = useShiritoriReducer();
        console.log("にゃほにゃほ　home view model 作ったナリ");
        [this.state, this.dispatch] = useMapReducer();
        console.log(this.state);
    }

    get route() {
        return this.state.route;
    }
    
    get hotspot() {
        return this.state.hotspot;
    }
    
    /*
    public selectRoute() {
        // 3つの中から選ぶ
        const route: number = Math.floor(Math.random() * 3 + 1);
        this.setRoute(route);
    }
    
    private setRoute(value: number) {
        console.log("set route");
        this.dispatch({type: ActionTypes.CHANGE_ROUTE, data: value});
    }
    */
    
    public setRoute(value: Route) {
        this.dispatch({type: ActionTypes.CHANGE_ROUTE, data: value});
    }

    private setHotspot(value: string) {
        console.log("set hotspot");
        this.dispatch({type: ActionTypes.CHANGE_HOTSPOT, data: value});
    }
}