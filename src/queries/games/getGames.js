import gql from 'graphql-tag';

export const GET_GAMES_QUERY = gql`
    {
        games {
            id
            name
            description
            rating
            platform {
                id
                name
            }
            coverUrl
            tags {
                id
                name
            }
            developers {
                id
                name
            }
        }
    }
`;
