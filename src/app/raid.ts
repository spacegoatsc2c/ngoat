import { User } from './user';
import { Character } from './character';

export interface Raid {
    id: number;
    name: string;
    logo: string;
    tier: number;
}

export interface Boss {
    id: number;
    name: string;
    logo: string;
    raid: Raid;
    is_dead: boolean;
    strategy_guide?: string;
    ordering: number;
}
