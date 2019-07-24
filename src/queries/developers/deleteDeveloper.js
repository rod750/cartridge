import gql from 'graphql-tag';

export const DELETE_DEVELOPER_QUERY = gql`
    mutation DeleteDeveloper($id: Float!) {
        deleteDeveloper(id: $id)
    }
`;
