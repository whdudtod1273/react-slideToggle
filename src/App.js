import { useState } from "react";
import SlideToggle from "./lib/SlideToggle";
import './app.css'
function App() {
  const [toggleState, setToggleState] = useState(false);
  const clickEvent = () => {
    setToggleState(prev => !prev)
  }
  return (
    <div className="App">
      <div onClick={clickEvent}>click</div>
      <SlideToggle state={toggleState} delay={0.5}>
        <div className="test" style={{ backgroundColor: 'skyblue', padding: '30px 0px' }}>
          content
        </div>
      </SlideToggle>
    </div>
  );
}

export default App;
