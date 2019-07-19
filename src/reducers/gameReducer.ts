import { handleActions } from "redux-actions";
import { RootState } from "state";
import { GameModel } from "models";
import * as GameActions from "actions/GameActions";

export const gameReducer = handleActions<RootState.GameState, GameModel>(
    {
        [GameActions.Type.CREATE_GAME]: (state, action) => {
            if(action.payload) {
                return [
                    action.payload,
                    ...state
                ];
            }

            return state;
        },
        [GameActions.Type.UPDATE_GAME]: (state, action) => {
            return state.map((game) => {
                if(!game || !action || !action.payload) {
                    return game;
                }

                return (game.id || 0) === action.payload.id ? action.payload : game;
            });
        },
        [GameActions.Type.DELETE_GAME]: (state, action) => {
            return state.filter((game) => game.id !== action.payload.id);
        }
    },
    []
);
