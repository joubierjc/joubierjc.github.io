import React from 'react';

const cover = 'https://img.itch.zone/aW1nLzQzNTk1ODUuanBn/original/Za1mbp.jpg';
const images = [
    'https://img.itch.zone/aW1hZ2UvNzc5MzM5LzQzNjEzOTYuanBn/original/CJ11aU.jpg',
    'https://img.itch.zone/aW1hZ2UvNzc5MzM5LzQzNjEzOTcuanBn/original/Yi3kC1.jpg',
    'https://img.itch.zone/aW1hZ2UvNzc5MzM5LzQzNjEzOTkuanBn/original/uEn6C4.jpg',
    'https://img.itch.zone/aW1hZ2UvNzc5MzM5LzQzNjE0MDAuanBn/original/C7vO8d.jpg'
]

export default {
    title: 'Start The Game (Together)',
    link: 'https://ldjam.com/events/ludum-dare/47/start-the-game-(together)',
    desc: <>
        Projet réalisé en 72 heures pour la Ludum Dare 47, dans lequel j'étais développeur gameplay et mini jeu.
    </>,
    tech: ['C#', 'Game Jam', 'Ludum Dare', 'Unity'],
    cover: cover,
    images: [cover, ...images]
};