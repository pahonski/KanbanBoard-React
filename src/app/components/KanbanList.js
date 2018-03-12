import React from 'react';
import Card from './KanbanCard';

class List extends React.Component
{
    render() {

        let cards = this.props.cards.map((card, index) => {
            return <Card
                title={card.title}
                key={index}
                description={card.description}
                tasks={card.tasks}
            />
        });


        return <div className="list">
            <h1>{this.props.name}</h1>
            {cards}
        </div>
    }
}

export default List;