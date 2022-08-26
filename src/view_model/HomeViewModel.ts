import { Hotspot } from "../data/hotspot.ts";
import { Route } from "../data/routes.ts";
import { savingRouteData } from "../function/SavingRouteData.tsx";
import { useMapReducer, ActionTypes } from "../hooks/useMapReducer.ts";
import { HotspotRepository } from "../repository/hotspotRepository.ts";
import { RouteRepository } from "../repository/routeRepository.ts";

/*
const initialRoute: Route = {
  id: 2,
  start: 1,
  goal: 2,
  path: [
      {lat: 35.953744, lng: 136.183777},
      {lat: 35.950765, lng: 136.183176},
      {lat: 35.950913, lng: 136.183466},
      {lat: 35.951182, lng: 136.183594},
      {lat: 35.951087, lng: 136.183755},
      {lat: 35.950817, lng: 136.183627},
      {lat: 35.950678, lng: 136.183648},
      {lat: 35.950236, lng: 136.184034},
      {lat: 35.950218, lng: 136.184356},
      {lat: 35.950405, lng: 136.184635},
      {lat: 35.950700, lng: 136.184941},
      {lat: 35.951542, lng: 136.185193},
      {lat: 35.951677, lng: 136.185155},
      {lat: 35.951733, lng: 136.184940},
      {lat: 35.951655, lng: 136.184753},
      {lat: 35.951742, lng: 136.184737},
      {lat: 35.951759, lng: 136.184330},
      {lat: 35.951994, lng: 136.184393},
      {lat: 35.952072, lng: 136.184549},
      {lat: 35.952524, lng: 136.184640},
      {lat: 35.952402, lng: 136.185219},
      {lat: 35.952181, lng: 136.185670},
      {lat: 35.951950, lng: 136.185649},
      {lat: 35.951412, lng: 136.185552}
  ],
}
*/

const initialHotspot: Hotspot = {
    name: "公園",
    id: 42,
    coordinate: {
        lat: 35.9507182,
        lng: 136.1825219,
    }
};

export class HomeViewModel {
    private state;
    private dispatch;
    
    private routeRepository = new RouteRepository();
    private hotspotRepository = new HotspotRepository();

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
    
    public selectRoute() {
        // 3つの中から選ぶ
        const routeId: number = Math.floor(Math.random() * 3 + 1);
        savingRouteData(routeId);
        this.setPRoute(routeId);
    }
    
    get isHotspotVisible() {
        return this.state.isHotspotVisible;
    }
    
    public setIsHotspotVisible(value: boolean) {
        this.dispatch({type: ActionTypes.SET_IS_HOTSPOT_VISIBLE, data: value});
    }

    private setRoute(value: Route) {
        console.log("set route");
        this.dispatch({type: ActionTypes.CHANGE_ROUTE, data: value});
    }

    private setHotspot(value: Hotspot) {
        console.log("set hotspot");
        this.dispatch({type: ActionTypes.CHANGE_HOTSPOT, data: value});
    }
    
    private async setPRoute(id: number) {
        const route = await this.routeRepository.getRouteById(id);
        console.log('primari routeだす');
        console.log(route);
        this.setRoute(route);
    }

    public async setPHotspot(id: number) {
        const hotspot = await this.hotspotRepository.getHotspotById(id);
        console.log('primary hotspotだす');
        console.log(hotspot);
        this.setHotspot(hotspot);
    }
}