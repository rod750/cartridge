import gql from 'graphql-tag';

export const GET_DEVELOPERS_QUERY = gql`
    {
        developers {
            id
            name
        }
    }
`;
