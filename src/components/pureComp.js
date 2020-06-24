import React, {PureComponent} from 'react';

class Purecomp extends PureComponent{
  render(){
    console.log('Pure Component render');
    return(
      <div>
        <h1>Pure Component {this.props.name} </h1>
      </div>
    )
  }
}

export default Purecomp
