import React from 'react';

const childComp = (props)=>{
    return(
        <div>
                        {/* Without Parameter
                        <button onClick={props.click}>Greet Me</button> */}

            {/* Passing Parameter to parentcomponent */}
            <button onClick={()=>props.click('Johnny')}>Greet Me</button>
        </div>
    )
}

export default childComp;