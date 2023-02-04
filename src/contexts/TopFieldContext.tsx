import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  useContext,
  useReducer,
} from "react";
import { Vector3 } from "three";

type DataStore = { humanCoordinate: Vector3 };

type ReducerAction = { payload: any; type: string };

type DataStoreContext = { dispatch: Dispatch<ReducerAction>; state: DataStore };

const reducer = (state: DataStore, action: ReducerAction) => {
  switch (action.type) {
    case "UPDATE_HUMAN_COORDINATE":
      return { ...state, humanCoordinate: action.payload };
    default:
      return state;
  }
};

const initialState = { humanCoordinate: new Vector3(0, 1.5, 0) };

const TopFieldContext = createContext({} as DataStoreContext);

type TopFieldProviderProps = { children: ReactNode };

export const TopFieldProvider: FC<TopFieldProviderProps> = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <TopFieldContext.Provider value={{ dispatch, state }}>
      {props.children}
    </TopFieldContext.Provider>
  );
};

export const useTopFieldContext = () => useContext(TopFieldContext);
