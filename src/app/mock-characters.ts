import { USER } from './mock-user';
import { Character } from './character';

export const CHARACTERS: Character[] = [
    {
      name: "thenmal",
      player: USER,
      ilvl: 685,
      tradeskill1: 'Engineering',
      tradeskill2: null,
      wowclass: 'shaman'
    },
    {
      name: "thenlight",
      player: USER,
      ilvl: 650,
      tradeskill1: 'Mining',
      tradeskill2: 'Blacksmithing',
      wowclass: 'paladin'
    }
];
