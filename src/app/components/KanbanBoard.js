import React from 'react';
import List from './KanbanList';

class KanbanBoard extends React.Component {

    render() {
        let cards = this.props.cards;
        console.log(cards);
        return <div className="app">
            <List
                id="todo"
                name="To Do"
                cards={this.props.cards.filter((item) => item.status === "todo"
                )}
            />

            <List
                id="in-progress"
                name="In Progress"
                cards={this.props.cards.filter((item) => item.status === "in-progress"
                )}
            />

            <List
                id="done"
                name="Done"
                cards={this.props.cards.filter((item) => item.status === "done"
                )}
            />

        </div>
    }
}

export default KanbanBoard;