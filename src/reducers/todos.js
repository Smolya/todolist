const initialValue = [
    {id: '97ed6252-f726-4447-a2a5-e75820ceee0c', text: 'React', content: 'This is React library', completed: false, editing: false},
    {id: '0efef630-efe9-4c48-85fb-eaf26a7f96f6', text: 'Redux', content: 'This is Redux library', completed: false, editing: false},
    {id: '7695bdd2-05bd-4ed1-b5ac-dc7dc5181cde', text: 'Immutable', content: 'This is Immutable library', completed: false, editing: false},
];

function setProperties(state, action, firstProp, secondProp, thirdProp) {
    if (state.id === action.id) {
        if (secondProp && thirdProp) {
            return {...state, [firstProp]: !state[firstProp], [secondProp]: action[secondProp], [thirdProp]: action[thirdProp]};
        }

        return {...state, [firstProp]: !state[firstProp]};
    }

    return state;
}

function todo(state, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                content: action.content,
                completed: false,
                editing: false
            };
        case 'TOGGLE_TODO':
            return setProperties(state, action, 'completed');
        case 'EDIT_TODO':
            return setProperties(state, action, 'editing');
        case 'APPLY_EDIT_TODO':
            return setProperties(state, action, 'editing', 'text', 'content');
        default:
            return state;
    }
}

export default function todos (state = initialValue, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, todo(state, action)];
        case 'EDIT_TODO':
            return state.map(t => todo(t, action));
        case 'TOGGLE_TODO':
            return state.map(t => todo(t, action));
        case 'APPLY_EDIT_TODO':
            return state.map(t => todo(t, action));
        default:
            return state;
    }
}