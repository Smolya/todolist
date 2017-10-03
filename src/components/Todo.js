import React from 'react';

export default function Todo(props) {
    const { text, onClick, completed, onEditTodo } = props;

    const style = {
        textDecoration: completed ? 'line-through' : 'none',
        display: 'inline-block',
        width: '150px'
    }

    return (
        <div>
            <li onClick={onClick} style={style}>{text}</li>
            <button onClick={onEditTodo}> EDIT</button>
        </div>
    );
}