import { Raid, Boss } from './raid.ts';

export const RAIDS: Raid[] = [
    { name: 'Emerald Nightmare', logo: 'http://i.imgur.com/8LohcQU.jpg', tier: 19 }
];

export const BOSSES: Boss[] = [
    {
        name: 'Ursoc',
        logo: 'http://i.imgur.com/vXIq20X.png',
        raid: RAIDS[0],
        is_dead: true,
        strategy_guide:'http://www.icy-veins.com/wow/hellfire-high-council-strategy-guide-normal-heroic-mythic',
        ordering: 1
    },
    {
        name: 'Ysondre',
        logo: 'http://i.imgur.com/28jtHeI.png',
        raid: RAIDS[0],
        is_dead: false,
        strategy_guide:'http://www.icy-veins.com/wow/hellfire-high-council-strategy-guide-normal-heroic-mythic',
        ordering: 2
    }
];
