import { Character } from './character';

export interface User {
    username: string;
    is_staff: boolean;
    token: string;
    main?: Character;
}
