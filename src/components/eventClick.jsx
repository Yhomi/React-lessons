import React from 'react';

const clickEvent = ()=>{
    function clickHandler(){
        console.log('button clicked')
    }
    return(
        <div>
            <button onClick={clickHandler}>Click me</button>
        </div>
    )
}

export default clickEvent;