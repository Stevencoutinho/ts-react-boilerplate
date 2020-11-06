/* myTypes */
import { GlobalState, Action } from '@/types';

export const reducer = (state: GlobalState, action: Action): GlobalState => {
  switch(action.type) {
    case "TEST":
      return { name: action.payload.name };
    default:
      return { ...state };
  }
};