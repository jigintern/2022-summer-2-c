import { getStoredRouteData, getStoredHotspotData } from "../function/GetStoredRouteData.tsx";
import { useStampRallyReducer } from "../hooks/useStampRallyReducer.ts";

export class StampRallyViewModel {
    private state;
    private dispatch;
    
    constructor() {
        console.log("にゃほにゃほ　stamp rally view model 作ったナリ");
        [this.state, this.dispatch] = useStampRallyReducer();
        console.log(this.state);
    }
    
    get isEntranceVisited() {
        return this.state.isEntranceVisited;
    }

    public stampEntrance() {
//        dispatch({type: });
    }
}