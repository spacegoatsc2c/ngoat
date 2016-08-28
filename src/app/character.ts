import { User } from './user';

export class Character {
    id: number;
    name: string;
    player: User;
    ilvl: number;
    tradeskill1: string;
    tradeskill2: string;
    wowclass: string;
    portrait: string;
}
