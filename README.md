# @todys/react-slideToggle

In react, display the matched elements in the sliding action.

## Installation

```
npm i @todys/react-slide-toggle
or
yarn add @todys/react-slide-toggle
```

## Usage

```javascript
import { SlideToggle } from '@todys/react-slide-toggle'

const [toggleState, setToggleState] = useState(false);
const clickEvent = () => {
  setToggleState(prev => !prev)
}

ReactDOM.render(
  <div>
    <button type="button" onClick={clickEvent}>
      click!
    </button>
    <SlideToggle 
      state={toggleState} 
      duration={0.5}
    >
      {/* Add the elements that will be slid here. */}
    </SlideToggle>
  </div>
)
```
example code link
<https://github.com/whdudtod1273/react-slideToggle/blob/main/src/example/index.js>

## Props

| params | value | defaultValue | description |
|--------|-------|--------------|-------------|
|state|Boolean|false|Boolean value that determines whether elements are represented within the slideToggle component|
|duration|Number|0.5|A number determining how long the animation will run.|
