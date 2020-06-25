import React from 'react';


// const UpdatedComponent = (OriginalComponent)=>{
//   class NewComponent extends React.Component {
//     constructor() {
//       super()
//       this.state={
//         count:0
//       }
//     }
//     incrementCount = ()=>{
//       this.setState(prevState=>{
//         return{count:prevState.count + 1}
//       })
//     }
//       render(){
//         return <OriginalComponent name="Yhomi" count={this.state.count} incrementCount={this.incrementCount} />
//       }
//   }
//   return NewComponent
// }

// General Naming Conventions

const withCounter = (WrappedComponent,incrementNumber)=>{
  class withCounter extends React.Component {
    constructor() {
      super()
      this.state={
        count:0
      }
    }
    incrementCount = ()=>{
      this.setState(prevState=>{
        return{count:prevState.count + incrementNumber}
      })
    }
      render(){
        return <WrappedComponent count={this.state.count} incrementCount={this.incrementCount} {...this.props} />
      }
  }
  return withCounter
}

export default withCounter;
