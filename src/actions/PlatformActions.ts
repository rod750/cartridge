import { createAction } from 'redux-actions';
import { PlatformModel } from 'models';

export enum Type {
    CREATE_PLATFORM = 'CREATE_PLATFORM',
    UPDATE_PLATFORM = 'UPDATE_PLATFORM',
    DELETE_PLATFORM = 'DELETE_PLATFORM'
}

export const createPlatform = createAction<Exclude<PlatformModel, 'id'>>(Type.CREATE_PLATFORM);
export const updatePlatform = createAction<PlatformModel>(Type.UPDATE_PLATFORM);
export const deletePlatform = createAction<Pick<PlatformModel, 'id'>>(Type.DELETE_PLATFORM);
