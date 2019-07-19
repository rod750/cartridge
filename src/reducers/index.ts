import { RootState } from "state";
import { combineReducers } from "redux";

import { gameReducer } from "./gameReducer";
import { developerReducer } from "./developerReducer";
import { platformReducer } from "./platformReducer";
import { tagReducer } from "./tagReducer";

export const rootReducer = combineReducers<RootState>({
    games: gameReducer as any,
    developers: developerReducer as any,
    platforms: platformReducer as any,
    tags: tagReducer as any
});
