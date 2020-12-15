import React from "react";

const styles = {
  cursor: {
    width: "1.5rem",
    height: "1.5rem",
    borderLeft: "1.5px solid white",
    position: "absolute",
    pointerEvents: "none",
    zIndex: "999999",
    transition: "all 0.2 ease",
    transitionProperty: "background, border, transform",

  },
  line:{
    width: "1.35rem",
    height: "1.5rem",
    borderTop: "1.5px solid white",
    transform: "translateX(-14px) translateY(3px) rotate(50deg)",
    transitionProperty: "background, border, transform",
    transition: "all 0.2 ease",
  }
};

export const handleMouseDown = () => {
  const cursor = document.querySelector(".cursor");
  cursor.style.transform = "scale(0.8)"
} 
export const handleMouseUp = () => {
  const cursor = document.querySelector(".cursor");
  cursor.style.transform = "scale(1)"
} 
export const handleMouseEnter = () => {
  const cursor = document.querySelector(".cursor");
  const line = document.querySelector(".line");
  if(cursor) cursor.style.borderLeft = "1.5px solid rgb(52, 204, 198)"
  line.style.borderTop = "1.5px solid rgb(52, 204, 198)"
} 
export const handleMouseLeave = () => {
  const cursor = document.querySelector(".cursor");
  const line = document.querySelector(".line");
  line.style.borderTop = "1.5px solid white"
  cursor.style.borderLeft = "1.5px solid white"
} 

export const handleCursorMove = (e) => {
  e.persist();
  const cursor = document.querySelector(".cursor");
  cursor.style.left = `${e.pageX}px`
  cursor.style.top = `${e.pageY}px`
};

const Cursor = (props) => {
  return (
    <div className="cursor" style={styles.cursor}>
      <div className="line" style={styles.line}></div>
    </div>
  );
};

export default Cursor;
