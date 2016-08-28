import { Character } from './character';

export interface User {
    id: number;
    username: string;
    is_staff: boolean;
    token: string;
    main?: Character;
}
