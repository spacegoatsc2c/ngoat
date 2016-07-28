import { User } from './user';
import { Character } from './character';
import { Boss, Raid } from './raid';

export interface Article {
    author: User;
    tags: string[];
    boss?: Boss;
    character?: Character;
    link?: string;
    text?: string;
    youtube?: string;
    image?: string;
}
