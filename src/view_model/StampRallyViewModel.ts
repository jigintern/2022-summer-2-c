import { coordinate } from "../data/routes.ts";
import { ActionTypes, useStampRallyReducer } from "../hooks/useStampRallyReducer.ts";

interface StampRallySpot {
    name: string,
    coordinate: coordinate,
}
export class StampRallyViewModel {
    private state;
    private dispatch;
    
    stampRallySpots: Array<StampRallySpot> = [
        {
            name: "エントランス",
            coordinate: { lat: 35.950120, lng: 136.181966 },
        },
        {
            name: "芝生",
            coordinate: { lat: 35.950757, lng: 136.182010 },
        },
        {
            name: "結び",
            coordinate: { lat: 35.949916, lng: 136.181114 },
        },
        {
            name: "動物園",
            coordinate: { lat: 35.950683, lng: 136.180895 },
        },
        {
            name: "展望台",
            coordinate: { lat: 35.952301, lng: 136.181081 },
        },
        {
            name: "庭",
            coordinate: { lat: 35.950543, lng: 136.184630 },
        },
    ]

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