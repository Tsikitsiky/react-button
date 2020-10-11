import React from 'react'

function Button(props) {
    let classUsed = "";
    if(props.variant && props.disabled) {
        classUsed = `${props.variant} disabled` 
    } else if(props.variant) {
        classUsed = `${props.variant} `
    } else if(props.color && props.size) {
        classUsed = `${props.color} ${props.size}`
    } else if(props.startIcon && props.color) {
        classUsed = `${props.startIcon} ${props.color}`
    } else if(props.endIcon && props.color) {
        classUsed = `${props.endIcon} ${props.color}`
    } else if(props.disabledShadow && props.color) {
        classUsed = `${props.color} disabledShadow`
    }

    return(
        
    <button className={classUsed && classUsed} disabled= {props.disabled && 'disabled'} variant= {props.variant && props.variant} disabled= {props.disabled && 'disabled'} disabledshadow= {props.disabledShadow && 'disabledShadow'}>{props.children}</button>
    )
}

export default Button