import React from 'react';

const Number = props =>{
const style = {
    backgroundColor: props.color1,
    color: props.color2
}
    return(
        <div>
            {isNaN(props.num) ? <h1 style={style}>The word is {props.num}</h1> :
            <h1 style={style}>The number is {props.num}</h1>}
        </div>
    )
}

export default Number;