import React from 'react'

function Button(props) {
    let classUsed = "";
    if(props.variant) {
        classUsed = `${props.variant}` 
    } else if(props.color && props.size) {
        classUsed = `${props.color} ${props.size}`
    } else if(props.startIcon && props.color) {
        classUsed = `${props.startIcon} ${props.color}`
    } else if(props.endIcon && props.color) {
        classUsed = `${props.endIcon} ${props.color}`
    } else if(props.disabled && props.variant) {
        classUsed = `${props.variant} ${props.disabled}`
    } else if(props.disabledShadow && props.color) {
        classUsed = `${props.color} ${props.disabledShadow}`
    }

    return(
        
    <button className={classUsed} >{props.children}</button>
    )
}

export default Button