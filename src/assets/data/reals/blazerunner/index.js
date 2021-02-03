import React from 'react';

const cover = 'https://img.itch.zone/aW1nLzMzMDc0NjYucG5n/original/IeUgtj.png';
const images = [
    'https://img.itch.zone/aW1hZ2UvNjE4NTk3LzMyOTAyNzgucG5n/original/L94tJ6.png',
    'https://img.itch.zone/aW1hZ2UvNjE4NTk3LzMyOTAyOTUucG5n/original/D0ekGh.png',
    'https://img.itch.zone/aW1hZ2UvNjE4NTk3LzMyOTA0NTkucG5n/original/cjhUi1.png',
    'https://img.itch.zone/aW1hZ2UvNjE4NTk3LzMyOTA1NDcucG5n/original/pEq26t.png'
]

export default {
    title: 'BlazeRunner',
    link: 'https://ldjam.com/events/ludum-dare/46/blazerunner',
    desc: <>
        Projet réalisé en 72 heures pour la Ludum Dare 46, dans lequel j'étais développeur gameplay.
    </>,
    tech: ['C#', 'Game Jam', 'Ludum Dare', 'Unity'],
    cover: cover,
    images: [cover, ...images]
};