import React, { useReducer } from 'https://cdn.skypack.dev/react@17.0.2?dts';
import { Hotspot } from "../data/hotspot.ts";
import { Route } from "../data/routes.ts";

export interface State {
  route: Route | null,
  hotspot: Hotspot | null,
  isHotspotVisible: boolean,
}

interface Action {
  type: ActionTypes,
  data: any,
}
//------------------------------------------------------------------------------
// enumの代わりにunionを使う書き方
export const ActionTypes = {
  CHANGE_ROUTE: "changeRoute",
  CHANGE_HOTSPOT: "changeHotspot",
  SET_IS_HOTSPOT_VISIBLE: "setIsHotspotVisible",
} as const;

export type ActionTypes = typeof ActionTypes[keyof typeof ActionTypes];
//------------------------------------------------------------------------------

export const noRoute = null;
export const noHotspot = null;

const initialState: State = {
  route: noRoute,
  hotspot: noHotspot,
  isHotspotVisible: true,
}

//const matchingContext = React.createContext(initialState);

const reducer = (state: State, action: Action) => {
  console.log("ふがふが　map reducer working");
  console.log(state);
  console.log(action);
  switch(action.type) {
    case ActionTypes.CHANGE_ROUTE:
      return {
        ...state,
        route: action.data,
      };
    case ActionTypes.CHANGE_HOTSPOT:
      return {
        ...state,
        hotspot: action.data,
      };
    case ActionTypes.SET_IS_HOTSPOT_VISIBLE:
      return {
        ...state,
        isHotspotVisible: action.data,
      };
    default:
      return state;
  }
};

export function useMapReducer(): [State, React.Dispatch<Action>] {
    console.log("ふがふが　map reducer used");
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(state);
    return [state, dispatch];
}