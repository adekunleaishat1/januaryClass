import React from 'react'

const Button = (props) => {
    console.log(props);
    
    // console.log(props.value);
  return (
    <div>
        <button onClick={()=>props.click(888)} className={props.style}>{props.value}</button>
    </div>
  )
}

export default Button