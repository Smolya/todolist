import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/actions'
import InputForm from '../components/InputForm'

class AddTodo extends Component {
    render() {
        const { addNewTodo } = this.props;
        return <InputForm text={'Name'}
                          content={'Description'}
                          onClick={addNewTodo}
                          btnName={'Add'}
        />;
    }
}


function mapDispatchToProps(dispatch) {
    return {
        addNewTodo: (text, content) => dispatch(addTodo(text, content))
    }

}

export default connect(null, mapDispatchToProps)(AddTodo);

