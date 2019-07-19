import { handleActions } from "redux-actions";
import * as DeveloperActions from "actions/DeveloperActions";
import { RootState } from "state";
import { DeveloperModel } from "models";

export const developerReducer = handleActions<RootState.DeveloperState, DeveloperModel>(
    {
        [DeveloperActions.Type.CREATE_DEVELOPER]: (state, action) => {
            if(action.payload) {
                return [
                    action.payload,
                    ...state
                ];
            }

            return state;
        },
        [DeveloperActions.Type.UPDATE_DEVELOPER]: (state, action) => {
            return state.map((developer) => {
                if(!developer || !action || !action.payload) {
                    return developer;
                }

                return (developer.id || 0) === action.payload.id ? action.payload : developer;
            });
        },
        [DeveloperActions.Type.DELETE_DEVELOPER]: (state, action) => {
            return state.filter((developer) => developer.id !== action.payload.id);
        }
    },
    []
);
