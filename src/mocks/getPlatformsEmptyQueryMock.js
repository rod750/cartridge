import { GET_PLATFORMS_QUERY } from '../queries/platforms/getPlatforms';

export const getPlatformsEmptyQueryMock = {
    request: {
        query: GET_PLATFORMS_QUERY
    },
    results: {
        data: {
            platforms: []
        }
    }
};
