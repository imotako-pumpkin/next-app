import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  useContext,
  useReducer,
} from "react";

type DataStore = { sliderNo: number };

type ReducerAction = { type: string };

type DataStoreContext = { dispatch: Dispatch<ReducerAction>; state: DataStore };

const reducer = (state: DataStore, action: ReducerAction) => {
  switch (action.type) {
    case "INCREMENT_PAGE_NO":
      return { ...state, sliderNo: state.sliderNo + 1 };
    case "DECREMENT_PAGE_NO":
      return { ...state, sliderNo: state.sliderNo - 1 };
    default:
      return state;
  }
};

const initialState = { sliderNo: 0 };

const ThreeContext = createContext({} as DataStoreContext);

type ThreeProviderProps = { children: ReactNode };

export const ThreeProvider: FC<ThreeProviderProps> = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ThreeContext.Provider value={{ dispatch, state }}>
      {props.children}
    </ThreeContext.Provider>
  );
};

export const useThreeContext = () => useContext(ThreeContext);
