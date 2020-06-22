import React from 'react';

const Hello = ()=>{
    // return <h1>Hello World</h1>
    // return React.createElement('div',null,'Hello World')
    return React.createElement('div',null,React.createElement('h1',{id:'hello',className:'bg-light'},'Hello Word'))
}

export default Hello;