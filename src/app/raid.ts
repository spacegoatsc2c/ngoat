import { User } from './user';
import { Character } from './character';

export class Raid {
    name: string;
    logo: string;
    tier: number;
}

export class Boss {
    name: string;
    logo: string;
    raid: Raid;
    is_dead: boolean;
    strategy_guide: string;
    ordering: number;
}
