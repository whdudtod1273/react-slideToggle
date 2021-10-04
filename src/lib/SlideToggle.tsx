import React, { useEffect, useRef, useState } from 'react'
import './SlideToggle.css'

type Props = {
  state:Boolean,
  duration:number
}

const SlideToggle:React.FC<Props> = ({ children, state = false, duration = 0.5 }) => {
  const [contentDefault, setContentDefault] = useState<any>();
  const [contentH, setContentH] = useState<any>(0);
  const contentRef = useRef<any>(null);

  useEffect(() => {
    const { current } = contentRef;
    if (current !== null) {
      setContentDefault(current.offsetHeight);
      setContentH(current.offsetHeight);
    }
    state ? setContentH(contentDefault) : setContentH(0);
  }, [contentDefault, state])

  return (
    <>
      <div className="rst-container" style={{ height: contentH, transition: `all ${duration}s` }}>
        <div className="rst-content" ref={contentRef}>
          {children}
        </div>
      </div>

      <style jsx="true" >
        {`
          .rst-container{
            height: 0;
            overflow: hidden;
          }
        `}
      </style>
    </>
  )
}

export default SlideToggle