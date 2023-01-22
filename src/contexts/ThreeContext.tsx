import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  useContext,
  useReducer,
} from "react";

type DataStore = { pageNo: number };

type ReducerAction = { type: string };

type DataStoreContext = { dispatch: Dispatch<ReducerAction>; state: DataStore };

const reducer = (state: DataStore, action: ReducerAction) => {
  switch (action.type) {
    case "INCREMENT_PAGE_NO":
      return { ...state, pageNo: state.pageNo + 1 };
    case "DECREMENT_PAGE_NO":
      return { ...state, pageNo: state.pageNo - 1 };
    default:
      return state;
  }
};

const initialState = { pageNo: 1 };

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
