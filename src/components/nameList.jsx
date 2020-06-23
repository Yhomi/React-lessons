import React from 'react';
import Person from './personList';

const List = ()=>{
    const names=['luffy','Zoro',"Sanji","Ussop","Franky","Chopper"]

    const persons =[
      {
        id:1,
        name:'John Doe',
        age:30,
        skill:'Node Js'
      },
      {
        id:2,
        name:'Dev Ed',
        age:25,
        skill:'React Native'
      },
      {
        id:3,
        name:'Net Ninja',
        age:20,
        skill:'Python'
      }
    ]

    const personsList = persons.map(person=> <Person person={person} />)

    // Or
    const NameList=names.map(name=><h2>{name}</h2>)
    return(
        <div>
          {
            NameList
          }
          <div>{personsList}</div>
        </div>
    )
}
export default List
