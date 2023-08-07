import React from 'react'

import classes from './Imput.module.css'

const Input = () => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
    </div>
  )
}

export default Input