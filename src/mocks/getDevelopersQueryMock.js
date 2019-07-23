import { GET_DEVELOPERS_QUERY } from "../queries/developers/getDevelopers";
import { developerMock } from "./developerMock";

export const getDevelopersQueryMock = {
    request: {
        query: GET_DEVELOPERS_QUERY
    },
    results: {
        data: {
            developers: [
                developerMock
            ]
        }
    }
};
