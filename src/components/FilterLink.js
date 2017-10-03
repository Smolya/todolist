import React from 'react';
import { Link } from 'react-router';

const FilterLink = ({ filter, children }) => {
    return <Link
        to={filter}
        style={{
            padding: '10px'
        }}
        activeStyle={{
            textDecoration: 'none',
            color: 'black',
        }}
    >
        {children}
    </Link>
};

export default FilterLink;