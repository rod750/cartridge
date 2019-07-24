import gql from 'graphql-tag';

export const DELETE_TAG_QUERY = gql`
    mutation DeleteTag($id: Float!) {
        deleteTag(id: $id)
    }
`;
