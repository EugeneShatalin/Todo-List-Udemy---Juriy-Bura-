import React from 'react';
import TodoListItem from './todo-list-item';


const TodoList = ({todos}) => {

    const elements = todos.map((item) => {
        return (
            <li>
                <TodoListItem {...item} />  {/*заменили label={elem.label} important={elem.important}
                                                на {...item} */}
            </li>
        );
    })

    return (
        <ul>
            {elements}
        </ul>
    )
};

export default TodoList;