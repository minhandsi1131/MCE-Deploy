import React from 'react'
import colors from '../../styles/colors'
const IconLibrary = (props) => {
    return (
        <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="26" viewBox="0 0 24 26">
        <defs>
            <filter id="k7eqfs089a">
                <feColorMatrix in="SourceGraphic" values="0 0 0 0 0.612624 0 0 0 0 0.676200 0 0 0 0 0.701135 0 0 0 1.000000 0"/>
            </filter>
        </defs>
        <g fill="none" fill-rule="evenodd">
            <g>
                <g>
                    <g filter="url(#k7eqfs089a)" transform="translate(-856 -863) translate(491 839) translate(365 24)">
                        <path stroke={ props.isActive ? colors.aquamarine : '#FEFEFE'} stroke-width="2.4" d="M7.678 24.93H2.456c-1.265 0-2.292-1.009-2.292-2.255V2.745C.164 1.499 1.191.487 2.456.487h5.222C8.943.487 9.97 1.5 9.97 2.745v19.93c0 1.246-1.027 2.255-2.292 2.255z"/>
                        <path fill={colors.aquamarine} d="M6.025 19.594c0 .6-.493 1.09-1.103 1.09s-1.105-.49-1.105-1.09c0-.6.495-1.089 1.105-1.089s1.103.489 1.103 1.09"/>
                        <path stroke={ props.isActive ? colors.aquamarine : '#FEFEFE'}stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4" d="M4.922 5.87L4.922 9.807"/>
                        <path stroke={ props.isActive ? colors.aquamarine : '#FEFEFE'} stroke-width="2.4" d="M9.69 1.7l6.6-1.475c1.232-.29 2.467.458 2.76 1.67l4.706 19.384c.294 1.214-.465 2.43-1.695 2.719l-5.08 1.196c-1.23.289-2.467-.459-2.76-1.67L9.899 6.257"/>
                        <path fill="#FEFEFE" d="M19.193 19.185c.142.583-.225 1.171-.817 1.311-.595.14-1.19-.222-1.331-.805-.142-.583.225-1.17.817-1.31.592-.14 1.19.221 1.33.804"/>
                        <path stroke={ props.isActive ? colors.aquamarine : '#FEFEFE'} stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4" d="M14.88 6.092L15.809 9.919"/>
                    </g>
                </g>
            </g>
        </g>
    </svg>
    
    )
}

export default IconLibrary
