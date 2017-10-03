import React from 'react';
import { Component } from 'react';
import { withRouter, browserHistory } from 'react-router';
import Todo from '../components/Todo';
import { connect } from 'react-redux';
import { changeCompleteStatus, editTodo, applyEditTodo } from '../actions/actions';
import Paginations from '../components/Paginations'
import { v4 } from 'node-uuid'
import FilterLink from "../components/FilterLink";

class TodoList extends Component {
    getTodos(todos, onTodoClick, onEditTodo) {
        return todos.map((todo) => {
            if(!todo.editing) {
                return <Todo {...todo}
                             key={todo.id}
                             onClick={() => onTodoClick(todo.id)}
                             onEditTodo={() => onEditTodo(todo.id)} />
            } else {
                return browserHistory.push(`/task/${todo.id}`);
            }
        });
    }

    getPages(countPages) {
        const pages = [];

        if (countPages !== 1) {
            for (let i = 0; i < countPages; i++) {
                pages.push(i + 1);
            }
        }

        return pages;
    }

    render() {
        const { todos, onTodoClick, onEditTodo, onApplyEditTodo, ownProps } = this.props;

        const leftTodos = this.getTodos(todos, onTodoClick, onEditTodo, onApplyEditTodo);

        const countPages = Math.ceil(todos.length / 10);
        const pages = this.getPages(countPages);

        return (
            <div>
                <Paginations page={countPages} id={ownProps.params.id} todos={leftTodos} />
                {pages.map((page) => {
                    return (<FilterLink key={v4()} filter={`/${ownProps.params.filter || 'all'}/page/${page}`}>{page}</FilterLink>);
                })}

            </div>
        );
    }
}

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case '/':
            return todos;
        case 'completed':
            return todos.filter(t => t.completed);
        case 'active':
            return todos.filter(t => !t.completed);
        default:
            return todos;
    }
};

function mapStateToProps(state, ownProps) {
    return {
        todos: getVisibleTodos(
            state.todos,
            ownProps.params.filter
        ),
        ownProps
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onTodoClick: (id) => dispatch(changeCompleteStatus(id)),
        onEditTodo: (id) => dispatch(editTodo(id)),
        onApplyEditTodo: (text, id) => dispatch(applyEditTodo(text, id))
    }

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TodoList));