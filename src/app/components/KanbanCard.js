import React from 'react';
import CheckList from './KanbanCheckList';

class Card extends React.Component
{
    render() {
        console.log('test',this.props.tasks);



        return <div className="card">
            <div className="card__title">
                {this.props.title}
            </div>
            <div className="card__details">
                <CheckList tasks={this.props.tasks} />
                {this.props.description}
            </div>
        </div>
    }
}

export default Card;