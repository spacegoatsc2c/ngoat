import { USER } from './mock-user';
import { Character } from './character';

export const CHARACTERS: Character[] = [
    {
      name: "thenmal",
      player: USER,
      ilvl: 685,
      tradeskill1: 'Engineering',
      tradeskill2: null,
      wowclass: 'shaman',
      portrait: 'http://render-api-us.worldofwarcraft.com/static-render/us/whisperwind/204/106175436-avatar.jpg'
    },
    {
      name: "thenlight",
      player: USER,
      ilvl: 650,
      tradeskill1: 'Mining',
      tradeskill2: 'Blacksmithing',
      wowclass: 'paladin',
      portrait: 'http://render-api-us.worldofwarcraft.com/static-render/us/whisperwind/246/108238326-avatar.jpg'
    }
];
