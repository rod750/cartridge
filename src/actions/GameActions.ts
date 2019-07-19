import { createAction } from 'redux-actions';
import { GameModel } from 'models';

export enum Type {
    CREATE_GAME = 'CREATE_GAME',
    UPDATE_GAME = 'UPDATE_GAME',
    DELETE_GAME = 'DELETE_GAME'
}

export const createGame = createAction<Exclude<GameModel, 'id'>>(Type.CREATE_GAME);
export const updateGame = createAction<GameModel>(Type.UPDATE_GAME);
export const deleteGame = createAction<Pick<GameModel, 'id'>>(Type.DELETE_GAME);
