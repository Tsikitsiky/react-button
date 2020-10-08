import React from 'react'

function Button(props) {
    return(
        
        <button variant={`variant ? "${props.variant}" : ""`}>Default</button>
    )
}

export default Button