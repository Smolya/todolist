import React from 'react';

export default function Paginations(props) {
    const { id, todos } = props;

    const filter = id || 1; //None filter, path = '/'

    return (
        <div>
            {todos.slice( ((filter - 1) * 10), (filter * 10) )}
        </div>
    );
}