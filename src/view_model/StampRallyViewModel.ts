import { getStoredRouteData, getStoredHotspotData } from "../function/GetStoredRouteData.tsx";
import { ActionTypes, useStampRallyReducer } from "../hooks/useStampRallyReducer.ts";

export class StampRallyViewModel {
    private state;
    private dispatch;
    
    constructor() {
        console.log("にゃほにゃほ　stamp rally view model 作ったナリ");
        [this.state, this.dispatch] = useStampRallyReducer();
        console.log(this.state);
    }
    
    get isEntranceVisited() {
        console.log('ふがふが　エントランス押されたナリ');
        return this.state.isEntranceVisited;
    }
    get isLawnVisited() {
        return this.state.isLawnVisited;
    }
    get isBellVisited() {
        return this.state.isBellVisited;
    }
    get isZooVisited() {
        return this.state.isZooVisited;
    }
    get isObservationTowerVisited() {
        return this.state.isObservationTowerVisited;
    }
    get isGardenVisited() {
        return this.state.isGardenVisited;
    }

    public stampEntrance() {
        this.dispatch({type: ActionTypes.SET_ENTRANCE, data: true});
    }
    public stampLawn() {
        this.dispatch({type: ActionTypes.SET_LAWN, data: true});
    }
    public stampBell() {
        this.dispatch({type: ActionTypes.SET_BELL, data: true});
    }
    public stampZoo() {
        this.dispatch({type: ActionTypes.SET_ZOO, data: true});
    }
    public stampObservationTower() {
        this.dispatch({type: ActionTypes.SET_OBSERVATION_TOWER, data: true});
    }
    public stampGarden() {
        this.dispatch({type: ActionTypes.SET_GARDEN, data: true});
    }
}