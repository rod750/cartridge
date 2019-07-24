import gql from 'graphql-tag';

export const DELETE_PLATFORM_QUERY = gql`
    mutation DeletePlatform($id: Float!) {
        deletePlatform(id: $id)
    }
`;
