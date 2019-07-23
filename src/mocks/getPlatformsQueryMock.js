import { GET_PLATFORMS_QUERY } from '../queries/platforms/getPlatforms';
import platformMock from './platformMock';

export const getPlatformsQueryMock = {
    request: {
        query: GET_PLATFORMS_QUERY
    },
    results: {
        data: {
            platforms: [
                platformMock
            ]
        }
    }
};
