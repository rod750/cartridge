import gql from 'graphql-tag';

export const GET_PLATFORMS_QUERY = gql`
    {
        platforms {
            id
            name
            imageUrl
            description
        }
    }
`;
