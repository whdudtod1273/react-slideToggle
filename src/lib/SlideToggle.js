import React, { useEffect, useRef, useState } from 'react'
import './SlideToggle.css'

const SlideToggle = ({ children, state = false, duration = 0.5 }) => {
  const [contentDefault, setContentDefault] = useState();
  const [contentH, setContentH] = useState(0);
  const contentRef = useRef(null);

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

      <style jsx>
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