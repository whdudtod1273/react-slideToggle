import { useState } from "react";
import SlideToggle from "../lib/SlideToggle.js";
function Example() {
  const [toggleState, setToggleState] = useState(false);
  const clickEvent = () => {
    setToggleState(prev => !prev)
  }
  return (
    <div>
      <div onClick={clickEvent}>click</div>
      <SlideToggle state={toggleState} duration={0.5}>
        <div className="test" style={{ backgroundColor: 'skyblue', padding: '30px 0px' }}>
          content
        </div>
      </SlideToggle>
    </div>
  );
}

export default Example;
