import { gql } from "apollo-boost";

const FETCH_DEVELOPERS = gql`
    {
        developers {
            id
            name
        }
    }
`;

const CREATE_DEVELOPER = gql`
    mutation($developer: NewDeveloperInput!) {
        createDeveloper(developer: $developer) {
            name
        }
    }
`;

const UPDATE_DEVELOPER = gql`
    mutation($id:Float!, $developer: UpdateDeveloperInput!) {
        updateDeveloper(id:$id, data: $developer) {
            name
        }
    }
`;

const DELETE_DEVELOPER = gql`
    mutation($id:Float!) {
        deleteDeveloper(id:$id)
    }
`;

export const DeveloperQueries = {
    FETCH: FETCH_DEVELOPERS,
    CREATE: CREATE_DEVELOPER,
    UPDATE: UPDATE_DEVELOPER,
    DELETE: DELETE_DEVELOPER
};
