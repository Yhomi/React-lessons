import React,{Component} from 'react';

class Form extends Component{
  constructor(){
    super()
    this.state={
      username:'',
      comments:'',
      topic:''
    }
  }
  handleUsername = (e)=>{
    this.setState({
      username:e.target.value
    })
  }
  handleComment = (e)=>{
    this.setState({
      comments:e.target.value
    })
  }

  handleTopic = (e)=>{
    this.setState({
      topic:e.target.value
    })
  }

  handleSubmit = (e)=>{
    e.preventDefault()
    console.log(`${this.state.username}, ${this.state.comments}, ${this.state.topic}`)
  }

  render(){
    const{username,comments,topic}=this.state
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Username</label>
            <input type="text" value={username} onChange={this.handleUsername} />
          </div>
          <div>
            <label>Comments</label>
            <textarea value={comments} onChange={this.handleComment}></textarea>
          </div>
          <div>
            <label>Topic</label>
            <select value={topic} onChange={this.handleTopic}>
              <option value=""></option>
              <option value="React">React</option>
              <option value="Angular">Angular</option>
              <option value="Vue">Vue</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}
export default Form
