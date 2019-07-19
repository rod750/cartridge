import { handleActions } from "redux-actions";
import { RootState } from "state";
import { PlatformModel } from "models";
import * as PlatformActions from "actions/PlatformActions";

export const platformReducer = handleActions<RootState.PlatformState, PlatformModel>(
    {
        [PlatformActions.Type.CREATE_PLATFORM]: (state, action) => {
            if(action.payload) {
                return [
                    action.payload,
                    ...state
                ];
            }

            return state;
        },
        [PlatformActions.Type.UPDATE_PLATFORM]: (state, action) => {
            return state.map((platform) => {
                if(!platform || !action || !action.payload) {
                    return platform;
                }

                return (platform.id || 0) === action.payload.id ? action.payload : platform;
            });
        },
        [PlatformActions.Type.DELETE_PLATFORM]: (state, action) => {
            return state.filter((platform) => platform.id !== action.payload.id);
        }
    },
    []
);
