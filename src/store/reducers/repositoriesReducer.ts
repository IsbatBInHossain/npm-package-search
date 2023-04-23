import { Action } from '../actions';
import { ActionType } from '../action-types';

interface RespositoryState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const reducer = (state: RespositoryState, action: Action): RespositoryState => {
  switch (action.type) {
    case ActionType.SEARCH_REPOSITORIES:
      return { loading: true, error: null, data: [] };

    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      return { loading: false, error: null, data: action.payload };

    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return { loading: false, error: action.payload, data: [] };

    default:
      return state;
      break;
  }
};
export default reducer;
