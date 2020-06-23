import React from 'react';

const bg={
  border:'1px solid #333',
  background:'#555',
  color:'#fff',
  fontSize:'20px',
  width:'30%',
  textAlign:'center'
}
const Inline = ()=>{
  return(
    <div>
      <h1 style={bg}>Inline Styling </h1>
      <h1 className="error">This is using css to style this H1 heading. the css was applied from the parent component App.js</h1>
    </div>
  )
}
export default Inline;
