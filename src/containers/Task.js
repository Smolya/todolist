import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { applyEditTodo } from '../actions/actions';
import InputForm from '../components/InputForm';


class Task extends Component {
    render() {
        const { todos, onApplyEditTodo } = this.props;
        const id = this.props.params.id;

        const editTodo = todos.filter((todo) => {
            return todo.id === id;
        });

        return <InputForm text={editTodo[0].text}
                          content={editTodo[0].content}
                          onClick={(text, content) => onApplyEditTodo(text, content, id)}
                          btnName={'EDIT'}
        />;
    }
}

function mapStateToProps(state) {
    return {
        todos: state.todos
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onApplyEditTodo: (text, content, id) => dispatch(applyEditTodo(text, content, id)),
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Task);