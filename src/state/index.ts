import { GameModel, DeveloperModel, TagModel, PlatformModel } from 'models';

export interface RootState {
    games: RootState.GameState;
    developers: RootState.DeveloperState;
    platforms: RootState.PlatformState;
    tags: RootState.TagState;
    router?: any;
}

export namespace RootState {
    export type GameState = GameModel[];
    export type DeveloperState = DeveloperModel[];
    export type PlatformState = PlatformModel[];
    export type TagState = TagModel[];
}
