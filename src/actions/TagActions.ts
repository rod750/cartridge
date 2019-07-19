import { createAction } from 'redux-actions';
import { TagModel } from 'models';

export enum Type {
    CREATE_TAG = 'CREATE_TAG',
    UPDATE_TAG = 'UPDATE_TAG',
    DELETE_TAG = 'DELETE_TAG'
}

export const createTag = createAction<Exclude<TagModel, 'id'>>(Type.CREATE_TAG);
export const updateTag = createAction<TagModel>(Type.UPDATE_TAG);
export const deleteTag = createAction<Pick<TagModel, 'id'>>(Type.DELETE_TAG);
