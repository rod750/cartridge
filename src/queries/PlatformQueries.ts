import { gql } from "apollo-boost";

const FETCH_PLATFORMS = gql`
    {
        developers {
            id
            name
            description
            imageUrl
        }
    }
`;

const CREATE_PLATFORM = gql`
    mutation($platform: NewPlatformInput!) {
        createPlatform(platform: $platform) {
            id
            name
            description
            imageUrl
        }
    }
`;

const UPDATE_PLATFORM = gql`
    mutation($id:Float!, $platform: UpdatePlatformInput!) {
        updatePlatform(id:$id, data: $platform) {
            id
            name
            description
            imageUrl
        }
    }
`;

const DELETE_PLATFORM = gql`
    mutation($id:Float!) {
        deletePlatform(id:$id)
    }
`;

export const DeveloperQueries = {
    FETCH: FETCH_PLATFORMS,
    CREATE: CREATE_PLATFORM,
    UPDATE: UPDATE_PLATFORM,
    DELETE: DELETE_PLATFORM
};
