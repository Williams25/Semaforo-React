import React from 'react'

export default props => <label htmlFor={props.input}>{props.text}: {props.children}</label>