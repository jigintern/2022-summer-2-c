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
    
    private setRoute(value: string) {
        console.log("set route");
        this.dispatch({type: ActionTypes.CHANGE_ROUTE, data: value});
    }

    private setHotspot(value: string) {
        console.log("set hotspot");
        this.dispatch({type: ActionTypes.CHANGE_HOTSPOT, data: value});
    }
}