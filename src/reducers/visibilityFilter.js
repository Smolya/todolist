const initialValue = 'SHOW_ALL';

export default function visibilityFilter(state = initialValue, action) {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter;
        default:
            return state;
    }
}