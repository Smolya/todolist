import todos  from './todos';
import visibilityFilter from './visibilityFilter';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
    todos,
    visibilityFilter,
    routing: routerReducer
})