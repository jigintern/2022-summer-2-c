import React, { useReducer } from 'https://cdn.skypack.dev/react@17.0.2?dts';

export interface State {
  route: string,
  hotspot: string,
}

interface Action {
  type: string,
  data: any,
}
//------------------------------------------------------------------------------
// enumの代わりにunionを使う書き方
export const ActionTypes = {
  CHANGE_ROUTE: "changeRoute",
  CHANGE_HOTSPOT: "changeHotspot",
} as const;

export type ActionTypes = typeof ActionTypes[keyof typeof ActionTypes];
//------------------------------------------------------------------------------

const initialState: State = {
  route: '',
  hotspot: '',
}

// deno-lint-ignore no-inferrable-types
export const noRoute: string = '';
// deno-lint-ignore no-inferrable-types
export const noHotospot: string = '';

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