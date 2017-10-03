import React from 'react';
import TodoList from '../containers/TodoList';
import AddTodo from '../containers/AddTodo';
import Footer from './Footer';

export default function App() {
    return (
        <div>
            <AddTodo />
            <TodoList />
            <Footer />
        </div>
    );
}
