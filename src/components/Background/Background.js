import React, { useState, useEffect, useRef } from 'react'
import DOTS from 'vanta/dist/vanta.dots.min'

const styles = ({
    background:{
        position:"absolute",
        top:"0",
        left:"0",
        zIndex:"1",
        height: "100%",
        minHeight: "100vh",
        width: "100%",
    }
})

const Background = (props) => {
    const [vantaEffect, setVantaEffect] = useState(0)
    const myRef = useRef(null)
    useEffect(() => {
      if (!vantaEffect) {
        setVantaEffect(DOTS({
          el: myRef.current,
          backgroundColor:"#0e0d0d",
          color:"#ffffff",
          color2:"#0e0d0d",
          mouseControls: true,
          touchControls: false,
          gyroControls: true,
          scale: 1.00,
          scaleMobile: 1.00,
          size: 1.70,
          spacing: 29.00
        }))
      }
      return () => {
        if (vantaEffect) vantaEffect.destroy()
      }
    }, [vantaEffect])
    return <div ref={myRef} style={styles.background}>
    </div>
  }

  export default Background