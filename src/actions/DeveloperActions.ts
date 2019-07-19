import { createAction } from 'redux-actions';
import { DeveloperModel } from 'models';

export enum Type {
    CREATE_DEVELOPER = 'CREATE_DEVELOPER',
    UPDATE_DEVELOPER = 'UPDATE_DEVELOPER',
    DELETE_DEVELOPER = 'DELETE_DEVELOPER'
}

export const createDeveloper = createAction<Exclude<DeveloperModel, 'id'>>(Type.CREATE_DEVELOPER);
export const updateDeveloper = createAction<DeveloperModel>(Type.UPDATE_DEVELOPER);
export const deleteDeveloper = createAction<Pick<DeveloperModel, 'id'>>(Type.DELETE_DEVELOPER);
