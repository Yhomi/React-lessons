import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greeting from "./components/Greet";
import {Ace} from './components/Ace';
import Welcome from './components/welcome';
import Hello from "./components/Hello";
import Message from "./components/message";
import Counter from "./components/counter";
import ClickFun from "./components/eventClick";
import ClickClass from "./components/classClick";
import Eventbind from "./components/eventBind";
import Parent from "./components/parentComp";
import Condition from "./components/userGreeting";
import List from "./components/nameList";
import Stylesheet from "./components/styleSheet";
import Inline from "./components/inline";
import './appStyles.css';
import styles from './appStyles.module.css';
import Form from "./components/form";
import CycleA from "./components/lifeCycleA";



function App() {
  return (
    <div className="App">

      {/*}<Form />*/}
      <CycleA />

        {/*<Condition /> */}
      {/*<List />*/}
      {/*}<Stylesheet />
      <hr />
      <Inline />
      <br />
      <h1 className="error">Error</h1>
      <h1 className={styles.success}>Success</h1>*/}
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

      {/* <Counter /> */}
      {/* <Ace />

      <Hello /> */}

    {/* <ClickFun />
    <ClickClass /> */}

    {/* <Eventbind /> */}

      {/* <Parent /> */}
    </div>
  );
}

export default App;
