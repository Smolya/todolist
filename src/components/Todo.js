import React from 'react';

export default function Todo(props) {
    const { text, onClick, completed, onEditTodo } = props;

    const style = {
        textDecoration: completed ? 'line-through' : 'none',
        display: 'inline-block',
        width: '150px'
    };

    if (completed) {
        return (
            <div>
                <input type="checkbox" checked onClick={onClick}/><label style={style}>{text}</label>
                <button onClick={onEditTodo}> EDIT</button>
            </div>
        );
    } else {
        return (
            <div>
                <input type="checkbox" onClick={onClick} /><label style={style}>{text}</label>
                <button onClick={onEditTodo}> EDIT</button>
            </div>
        );
    }
}