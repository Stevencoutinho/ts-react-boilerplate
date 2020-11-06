export declare interface GlobalState {
  name: string;
}

export declare interface Action {
  type: "TEST";
  payload: { name: string };
}

export declare interface GlobalStoreProvider {
  state: GlobalState;
  dispatch: React.Dispatch<Action>;
}