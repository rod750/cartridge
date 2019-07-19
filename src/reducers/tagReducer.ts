import { handleActions } from "redux-actions";
import { RootState } from "state";
import { TagModel } from "models";
import * as TagActions from "actions/TagActions";

export const tagReducer = handleActions<RootState.TagState, TagModel>(
    {
        [TagActions.Type.CREATE_TAG]: (state, action) => {
            if(action.payload) {
                return [
                    action.payload,
                    ...state
                ];
            }

            return state;
        },
        [TagActions.Type.UPDATE_TAG]: (state, action) => {
            return state.map((tag) => {
                if(!tag || !action || !action.payload) {
                    return tag;
                }

                return (tag.id || 0) === action.payload.id ? action.payload : tag;
            });
        },
        [TagActions.Type.DELETE_TAG]: (state, action) => {
            return state.filter((tag) => tag.id !== action.payload.id);
        }
    },
    []
);
