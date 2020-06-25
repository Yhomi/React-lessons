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
import Parent from "./components/parentComp.jsx";
import Condition from "./components/userGreeting";
import List from "./components/nameList";
import Stylesheet from "./components/styleSheet";
import Inline from "./components/inline";
import './appStyles.css';
import styles from './appStyles.module.css';
import Form from "./components/form";
import CycleA from "./components/lifeCycleA";
import Fragment from "./components/fragmentDemo";
import Table from "./components/table";
import Purecomp from './components/pureComp';
import Parentcomp from './components/Parentcomp';
import Ref from "./components/refDemo";
import ParentRef from "./components/parenRef";
import ParentFr from './components/FRparent';
import PortalDemo from './components/portal_demo';
import Hero from "./components/hero";
import ErrorBoundary from './components/errorBoundary';
import ClickCounter from "./components/clickCounter";
import HoverCounter from "./components/hoverCounter";
import ClickTwo from "./components/clickTwo";
import HoverTwo from "./components/hoverTwo";
import User from "./components/user";
import CounterComp from "./components/counterComponent";
import CompC from "./components/compC";
import {UserProvider} from "./components/userContext";


function App() {
  return (
    <div className="App">

      {/*<CounterComp render={(count,incrementCount)=><ClickTwo count={count} incrementCount={incrementCount} />} />
      <CounterComp render={(count,incrementCount)=><HoverTwo count={count} incrementCount={incrementCount} />} />*/}

      {/* Passing as children */}
      {/*<CounterComp>{(count,incrementCount)=><ClickTwo count={count} incrementCount={incrementCount} />}</CounterComp>
      <CounterComp>{(count,incrementCount)=><HoverTwo count={count} incrementCount={incrementCount} />}</CounterComp>*/}
      {/*<CompC />*/}
      <UserProvider value="John Doe">
          <CompC />
      </UserProvider>

      {/*}<Form />*/}
      {/*<CycleA />*/}
      {/*<Fragment />*/}
      {/*<Table />*/}
      {/*<Purecomp />*/}
      {/*<Parentcomp />*/}
      {/*<Ref />*/}
      {/*<ParentRef />*/}
      {/*<ParentFr />*/}
      {/*<PortalDemo />*/}
      {/*<ErrorBoundary>
          <Hero heroName="Batman" />
      </ErrorBoundary>
      <ErrorBoundary>
          <Hero heroName="Superman" />
      </ErrorBoundary>
      <ErrorBoundary>
          <Hero heroName="joker" />
      </ErrorBoundary>*/}

      {/*<ClickCounter name="Yhomi" />
      <HoverCounter name="John Doe" />*/}

      {/*<ClickTwo />
      <HoverTwo />
      <User render={(isLoggedIn)=>isLoggedIn ? 'John Doe':"Guest"} /> */}

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
