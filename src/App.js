import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greeting from "./components/Greet";
import {Ace} from './components/Ace';
import Welcome from './components/welcome';
import Hello from "./components/Hello";
import Message from "./components/message";
import Counter from "./components/counter";

function App() {
  return (
    <div className="App">
      {/* <Greeting name="Bruce" heroName="Batman">
      <p>This is children props</p>
      </Greeting>
      <Greeting name="Diana" heroname="Wonder Woman">
        <button>Action</button>
      </Greeting>
      <Greeting name="Clark" heroName="Superman" />
      <Welcome name="Bruce" heroName="Batman" />
      <Welcome name="Diana" heroname="Wonder Woman" />
      <Welcome name="Clark" heroName="Superman" />

      <Message /> */}

  {/* // Destructuring 

  <Greeting name="Bruce" heroName="Batman">
      <p>This is children props</p>
      </Greeting>
      <Welcome name="Clark" heroName="Superman" /> */}
      <Counter />
      {/* <Ace />
      
      <Hello /> */}
    </div>
  );
}

export default App;
