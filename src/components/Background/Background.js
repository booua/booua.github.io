import React, { useState, useEffect, useRef } from "react";
import DOTS from "vanta/dist/vanta.dots.min";

const styles = {
  background: {
    position: "absolute",
    top: "0",
    left: "0",
    zIndex: "1",
    height: "100vh",
    maxHeight: "100vh",
    width: "100vw",
  },
};

const Background = (props) => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        DOTS({
          el: myRef.current,
          backgroundColor: "#0e0d0d",
          color: "#ffffff",
          color2: "#0e0d0d",
          mouseControls: true,
          touchControls: false,
          gyroControls: true,
          scale: 1.0,
          scaleMobile: 1.0,
          size: 1.7,
          spacing: 29.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return <div ref={myRef} style={styles.background}></div>;
};

export default Background;
