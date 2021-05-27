import React from 'react';
import './index.scss';


class TaskList extends React.Component
{
    render() {
        return(
            <div className="task">
                <ul className="task_list">
                    
                    {this.props.allTasks.map((task) => (
                        <li 
                            className={task.done ? 'task_item done' : 'task_item'}
                            key={task.id}
                        >
                            <p 
                                className="item_content"
                            >
                               { task.label}
                            </p>
                            <input
                                id={task.id}
                                type="checkbox"
                                className="item_checkbox"
                                checked={task.done}
                                onChange={(event) => {
                                    this.props.checkTask(event.currentTarget.checked, task.id)
                                    
                                }}
                             />
                        </li>
                    ))}
                    
                </ul>
            </div>
        )
    }
}

export default TaskList;