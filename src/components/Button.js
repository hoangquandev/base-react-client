import React from 'react'

const Button = (props) => {
    const { text, icon, onClick } = props
    return (
        <button className='flex text-white' onClick={onClick}>
            {text ? (<div className='leading-5 text-sm pr-1'>{text}</div>) : null}
            {icon}
        </button>
    )
}

export default Button