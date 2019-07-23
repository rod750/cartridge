import gql from 'graphql-tag';

export const GET_TAGS_QUERY = gql`
    {
        tags {
            id
            name
        }
    }
`;
