import React from 'react';
import ReactDOM from 'react-dom';
import KanbanBoard from "./app/components/KanbanBoard";

let cards = [
    {
        id: 1,
        title: 'Изучение html',
        description: 'Изучить html5',
        status: 'in-progress',
        tasks: []
    },

    {
        id: 2,
        title: 'Изучение CSS',
        description: 'Изучить CSS3',
        status: 'todo',
        tasks: [
            {
                id: 1,
                name: 'tables',
                done: true
            },

            {
                id: 2,
                name: 'transitions',
                done: false
            },

            {
                id: 3,
                name: 'flexbox',
                done: true
            }
        ]
    },

    {
        id: 3,
        title: 'Изучение JS',
        description: 'Изучить ES6',
        status: 'done',
        tasks: [
            {
                id: 1,
                name: 'tables',
                done: true
            },

            {
                id: 2,
                name: 'transitions',
                done: false
            },

            {
                id: 3,
                name: 'flexbox',
                done: true
            }
        ]
    },

    {
        id: 4,
        title: 'Изучение React',
        description: 'Изучить ReactJS',
        status: 'in-progress',
        tasks: []
    }
];


const app = document.getElementById('app');

ReactDOM.render(
    <KanbanBoard cards={cards}/>
,app);