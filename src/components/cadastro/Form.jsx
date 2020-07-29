import React from 'react'

export default props => <form onSubmit={props.submit}>{props.children}</form>