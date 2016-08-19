import { Article } from './article';
import { Raid, Boss } from './raid.ts';
import { User } from './user';
import { Character } from './character';
import { CHARACTERS } from './mock-characters';
import { USER } from './mock-user';
import { RAIDS, BOSSES } from './mock-raid';

export const ARTICLES: Article[] = [
    {
        author: USER,
        tags: ['test'],
        text: 'This is a test article'
    },
    {
        author: USER,
        tags: ['video'],
        character: CHARACTERS[1],
        youtube: 'https://www.youtube.com/watch?v=uA8Jm1t-K68'
    },
    {
        author: USER,
        tags: ['image'],
        image: 'http://i.imgur.com/eOuxSWT.jpg'
    },
    {
        author: USER,
        tags: ['link'],
        link: 'http://www.mmo-champion.com/content/'
    },
    {
        author: USER,
        tags: ['logs'],
        log: 'https://www.warcraftlogs.com/reports/8zcJCBpZnr41KbN9'
    },
    {
        author: USER,
        tags: ['boss kill'],
        boss: BOSSES[0],
        character: CHARACTERS[0],
        youtube: 'https://www.youtube.com/watch?v=cQTy_MGSyFY'
    },

];
