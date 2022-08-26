import React, { useReducer } from 'https://cdn.skypack.dev/react@17.0.2?dts';
import { HotspotHistory, RouteHistory } from '../data/history.ts';

interface State {
  routeHistory: Array<RouteHistory>,
  hotspotHistory: Array<HotspotHistory>,
}

interface Action {
  type: ActionTypes,
  data: any,
}
//------------------------------------------------------------------------------
// enumの代わりにunionを使う書き方
export const ActionTypes = {
  CHANGE_ROUTE_HISTORY: "changeRouteHistory",
  CHANGE_HOTSPOT_HISTORY: "changeHotspotHistory",
} as const;

export type ActionTypes = typeof ActionTypes[keyof typeof ActionTypes];
//------------------------------------------------------------------------------

const initialState: State = {
  routeHistory: [],
  hotspotHistory: [],
}

//const matchingContext = React.createContext(initialState);

const reducer = (state: State, action: Action) => {
  console.log("ふがふが　history reducer working");
  console.log(state);
  console.log(action);
  switch(action.type) {
    case ActionTypes.CHANGE_ROUTE_HISTORY:
      return {
        ...state,
        routeHistory: action.data,
      };
    case ActionTypes.CHANGE_HOTSPOT_HISTORY:
      return {
        ...state,
        hotspotHistory: action.data,
      };
    default:
      return state;
  }
};

export function useHistoryReducer(): [State, React.Dispatch<Action>] {
    console.log("ふがふが　history reducer used");
    const [store, dispatch] = useReducer(reducer, initialState);
    console.log(store);
    return [store, dispatch];
}