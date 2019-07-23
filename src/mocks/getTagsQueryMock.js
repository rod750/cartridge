import { tagMock } from "./tagMock";
import { GET_TAGS_QUERY } from "../queries/tags/getTags";

export const getTagsQueryMock = {
    request: {
        query: GET_TAGS_QUERY
    },
    results: {
        data: {
            tags: [
                tagMock
            ]
        }
    }
};
