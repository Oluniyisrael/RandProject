import React from 'react'
import './CustomButton.css'

function CustomButton( props) {
  return (
    <button id='CustomButton' class={props.class}>
        {props.title}
    </button>
    )
}

export default CustomButton