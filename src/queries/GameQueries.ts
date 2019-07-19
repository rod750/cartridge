import { gql } from "apollo-boost";

const FETCH_GAMES = gql`
    {
        games{
            id
            name
            description
            releaseYear
            platform
            rating
            coverUrl
            developers
            tags
        }
    }
`;

const CREATE_GAME = gql`
    mutation($game: NewGameInput!) {
        createGame(game: $game) {
            id
            name
            description
            releaseYear
            platformId
            rating
            coverUrl
            tags {
                name
                id
            }
            developers {
                name
                id
            }
        }
    }
`;

const UPDATE_GAME = gql`
    mutation($id:Float!, $game: UpdateGameInput!) {
        updateGame(id:$id, data: $game) {
            id
            name
            description
            releaseYear
            platformId
            rating
            coverUrl
            tags {
                name
                id
            }
            developers {
                name
                id
            }
        }
    }
`;

const DELETE_GAME = gql`
    mutation($id:Float!) {
        deleteGame(id:$id)
    }
`;

export const GameQueries = {
    FETCH: FETCH_GAMES,
    CREATE: CREATE_GAME,
    UPDATE: UPDATE_GAME,
    DELETE: DELETE_GAME
};
