import React from 'react';

const Person = ({person}) =>{

  return(
        <div><h3>My name is {person.name}, I am {person.age}, I know {person.skill}</h3> </div>
  )
}

export default Person
