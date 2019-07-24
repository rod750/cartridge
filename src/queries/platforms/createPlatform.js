import gql from 'graphql-tag';

export const CREATE_PLATFORM_QUERY = gql`
    mutation CreatePlatform($platform: NewPlatformInput!) {
        createPlatform(platform: $platform) {
            id
            name
            description
            imageUrl
        }
    }
`;
