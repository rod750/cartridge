import { PlatformModel } from './PlatformModel';
import { DeveloperModel } from './DeveloperModel';
import { TagModel } from './TagModel';

export interface GameModel {
    id: number;
    name: string;
    description: string;
    releaseYear: number;
    rating: number;
    coverUrl: string;
    platform: PlatformModel;
    developers: DeveloperModel[];
    tags: TagModel[]
}
