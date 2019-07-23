import { GET_GAMES_QUERY } from '../queries/games/getGames';

export const getGamesQueryMock = {
    request: {
        query: GET_GAMES_QUERY
    },
    results: {
        data: {
            games: [
                {
                    id: 1,
                    name: "Testing",
                    tags: [
                        { id: 1, name: "Test tag" }
                    ],
                    platform: {
                        id: 1,
                        name: "Test platform"
                    },
                    developers: [
                        { id: 1, name: "Test developer" }
                    ]
                }
            ]
        }
    }
};
