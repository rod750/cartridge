import { gql } from "apollo-boost";

const FETCH_TAGS = gql`
    {
        tags {
            id
            name
        }
    }
`;

const CREATE_TAG = gql`
    mutation($tag: NewTagInput!) {
        createTag(tag: $tag) {
            id
            name
        }
    }
`;

const UPDATE_TAG = gql`
    mutation($id:Float!, $tag: UpdateTagInput!) {
        updateTag(id:$id, data: $tag) {
            id
            name
        }
    }
`;

const DELETE_TAG = gql`
    mutation($id:Float!) {
        deleteTag(id:$id)
    }
`;

export const TagQueries = {
    FETCH: FETCH_TAGS,
    CREATE: CREATE_TAG,
    UPDATE: UPDATE_TAG,
    DELETE: DELETE_TAG
};
