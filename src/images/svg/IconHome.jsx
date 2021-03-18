import React from 'react'
import colors from '../../styles/colors';

const IconHome = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <g fill="none" fill-rule="evenodd" stroke={ props.isActive ? colors.aquamarine : '#333331'} stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6">
            <path d="M13.893 5.089C13.31 4.417 12.499 4 11.6 4 9.833 4 8.4 5.611 8.4 7.6c0 1.988 1.433 3.6 3.2 3.6 1.767 0 3.2-1.612 3.2-3.6M8.72 20.795c.817.007 1.769.005 2.88.005 6.598 0 7.6.072 7.6-2s-1.802-6-7.6-6-7.6 3.928-7.6 6c0 1.145.306 1.635 1.694 1.845l3.027.15z"/>
        </g>
    </svg>
    
    )
}

export default IconHome;
