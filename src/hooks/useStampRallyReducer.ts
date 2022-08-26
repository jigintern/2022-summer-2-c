import React, { useReducer } from 'https://cdn.skypack.dev/react@17.0.2?dts';

export interface State {
  isEntranceVisited: boolean,
  isLawnVisited: boolean,
  isBellVisited: boolean,
  isZooVisited: boolean,
  isObservationTowerVisited: boolean,
  isGardenVisited: boolean,
}

interface Action {
  type: ActionTypes,
  data: any,
}
//------------------------------------------------------------------------------
// enumの代わりにunionを使う書き方
export const ActionTypes = {
  SET_ENTRANCE: "stampEntrance",
  SET_LAWN: "stampLawn",
  SET_BELL: "stampBell",
  SET_ZOO: "stampZoo",
  SET_OBSERVATION_TOWER: "stampObservationTower",
  SET_GARDEN: "stampGarden",
  RESET_STAMP_RALLY: "resetStampRally",
} as const;

export type ActionTypes = typeof ActionTypes[keyof typeof ActionTypes];
//------------------------------------------------------------------------------

export const noRoute = null;
export const noHotspot = null;

const initialState: State = {
  isEntranceVisited: false,
  isLawnVisited: false,
  isBellVisited: false,
  isZooVisited: false,
  isObservationTowerVisited: false,
  isGardenVisited: false,
}

//const matchingContext = React.createContext(initialState);

const reducer = (state: State, action: Action) => {
  console.log("ふがふが　map reducer working");
  console.log(state);
  console.log(action);
  switch(action.type) {
    case ActionTypes.SET_ENTRANCE:
      return {
        ...state,
        isEntranceVisited: action.data,
      };
    case ActionTypes.SET_LAWN:
      return {
        ...state,
        isLawnVisited: action.data,
      };
    case ActionTypes.SET_BELL:
      return {
        ...state,
        isBellVisited: action.data,
      };
    case ActionTypes.SET_ZOO:
      return {
        ...state,
        isZooVisited: action.data,
      };
    case ActionTypes.SET_OBSERVATION_TOWER:
      return {
        ...state,
        isObservationTowerVisited: action.data,
      };
    case ActionTypes.SET_GARDEN:
      return {
        ...state,
        isGardenVisited: action.data,
      };
    default:
      return state;
  }
};

export function useStampRallyReducer(): [State, React.Dispatch<Action>] {
    console.log("ふがふが　stamp rally reducer used");
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(state);
    return [state, dispatch];
}