import React from 'react'

export default function Alert(props) {
  return (
    props.alert && <div className={`alert alert-${props.alert.typ} alert-dismissible fade show position-absolute container`} role="alert">
        <strong>{props.alert.msg}</strong> 
    </div>
  )
}
