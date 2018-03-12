import React from 'react';

class CheckList extends React.Component
{
    render() {

        console.log(this.props);
        let tasks = this.props.tasks.map((task) => {
            return <li key={task.id} className="tasks__item">
                <input type="checkbox" defaultChecked={task.done}/>
                {task.name}
            </li>
        });

        return <div className="tasks__container">
                <ul className="tasks">
                    {tasks}
                </ul>
            </div>

    }
}

export default CheckList;