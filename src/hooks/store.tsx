import React, { useReducer } from "https://cdn.skypack.dev/react@17.0.2?dts";
import { ReducerState, Dispatch} from "https://cdn.skypack.dev/react@17.0.2?dts";
import { useHistoryReducer } from "./useHistoryRedecer.ts";
import { useMapReducer } from "./useMapReducer.ts";

export type stateUndDispatch = [ReducerState<any>, Dispatch<any>];

// 全部の値をstateUndDispatchにする
interface StoreState {
    mapReducer: stateUndDispatch,
    historyReducer: stateUndDispatch,
}

const initialStoreState: StoreState = {
  mapReducer: [{}, ()=>{}] as stateUndDispatch,
  historyReducer: [{}, ()=>{}] as stateUndDispatch,
};
  
const globalContext = React.createContext(initialStoreState);

export const StoreProvider = ({ children }) => {
  console.log("ほげほげ　store created");

  const contextValue: StoreState = {
    mapReducer: useMapReducer() as stateUndDispatch,
    historyReducer: useHistoryReducer() as stateUndDispatch,
  };

  return (
    <globalContext.Provider value={contextValue}>
      { children }
    </globalContext.Provider>
  );
};

export function useStore() {
  console.log("ふがふが　store used");
  const contextValue = React.useContext(globalContext);
  const kari: StoreState = {
    mapReducer: useMapReducer() as stateUndDispatch,
    historyReducer: useHistoryReducer() as stateUndDispatch,
  };
  return kari;
}