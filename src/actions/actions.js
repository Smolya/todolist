import { v4 } from 'node-uuid'

export const changeCompleteStatus = (id) => ({
    type: 'TOGGLE_TODO',
    id
});

export const addTodo = (text, content) => ({
    type: 'ADD_TODO',
    id: v4(),
    text,
    content
});

export const editTodo = (id) => ({
   type: 'EDIT_TODO',
   id
});

export const applyEditTodo = (text, content, id) => ({
    type: 'APPLY_EDIT_TODO',
    text,
    content,
    id
});