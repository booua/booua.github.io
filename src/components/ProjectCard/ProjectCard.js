import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";
import { interpolate } from "@popmotion/popcorn";
import { Link } from "react-router-dom";
import {
  handleMouseDown,
  handleMouseEnter,
  handleMouseLeave,
  handleMouseUp,
} from "../Cursor/Cursor";

let isSafari = navigator.userAgent.indexOf("Safari") > -1;

const Container = styled.div`
  border-radius: 8px;
  transform-style: preserve-3d;
  transform: perspective(921px);
  display: flex;
  position: relative;
  padding: 25px;
  max-width: 100%;
`;

const Content = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  transform-style: preserve-3d;
  -webkit-transform-style: preserve-3d;
  overflow: visible !important;
  perspective: 800px;
  backface-visibility: hidden;
`;

const Shadow = styled.div`
  position: absolute;
  top: 5%;
  left: 5%;
  width: 90%;
  border-radius: 1rem;
  height: 90%;
  transition: all 0.2s ease-out 0s;
  box-shadow: ${isSafari
    ? ""
    : "rgba(0, 0, 0, 6) 0px 50px 100px -30px"}; //rgba(0, 0, 0, 6) 0px 50px 100px -30px;
`;

const RelativeContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  overflow: hidden;
  transform-style: preserve-3d;
  perspective: 800px;
  backface-visibility: hidden;
`;

const Image = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  /* transform: translateZ(0px); */
  bottom: 0;
  background-size: cover;
  border-radius: 1rem;
  background-image: url(${(props) => props.image});
  background-position: center;
`;

const Gradient = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: all 0.5s ease;
`;

export function ProjectCard({
  title,
  height = 400,
  width = 300,
  index,
  size,
  irregularGrid,
  id,
  image,
  link,
}) {
  const ref = useRef();
  const [hover, setHover] = useState(false);
  const [tapped, setTapped] = useState(false);

  const centerPoint = [width / 2, height / 2];
  const xy = useMotionValue(centerPoint);

  const tx = 0.03;

  const transformX = interpolate([0, width], [width * tx, width * tx * -1]);
  const rotateY = useTransform(xy, ([x]) => transformX(x));

  const transformY = interpolate(
    [0, height],
    [height * tx * -1, height * tx * 1]
  );
  const rotateX = useTransform(xy, ([, y]) => transformY(y));

  const config = {
    stiffness: 150,
    damping: 20,
  };

  const springX = useSpring(rotateX, config);
  const springY = useSpring(rotateY, config);

  const gradientOpacity = useTransform(xy, ([, y]) => {
    return interpolate([0, height], [0, 0.3])(y);
  });

  const gradientOpacitySpring = useSpring(gradientOpacity, config);

  const gradient = useTransform(gradientOpacitySpring, (opacity) => {
    let [x, y] = xy.get();
    if (y === centerPoint[1]) {
      y = centerPoint[1] + 1;
    }

    const angle = Math.atan2(y - centerPoint[1], x - centerPoint[0]);
    const degree =
      ((angle > 0 ? angle : 2 * Math.PI + angle) * 360) / (2 * Math.PI) - 90;
    return `linear-gradient(${degree}deg, rgba(255,255,255,${opacity}), rgba(255,255,255,0) 80%)`;
  });

  function onMouseOver(e) {
    if (tapped) return;
    const rect = e.target.getBoundingClientRect();
    xy.set([e.clientX - rect.left, e.clientY - rect.top]);
  }

  function hoverStart() {
    setHover(true);
  }

  function hoverEnd() {
    setHover(false);
  }

  useEffect(() => {
    if (!hover) {
      xy.set(centerPoint);
    }
  }, [hover, xy, centerPoint]);

  function getValidIndicesArray(size) {
    let validIndicesArray = [];
    for (let i = 0; i <= size; i++) {
      validIndicesArray.push(4 * i);
      validIndicesArray.push(4 * i + 3);
    }
    return validIndicesArray;
  }

  function getContainerWidth() {
    return !irregularGrid
      ? "100%"
      : getValidIndicesArray(size).find((id) => id === index + 2)
      ? "35%"
      : "50%";
  }

  return (
    <Container
      ref={ref}
      style={{
        height: `${height}px`,
        flex: `0 0 ${getContainerWidth()}`,
        maxWidth: `${getContainerWidth()}`,
      }}
    >
      <Content
        style={{
          scale: isSafari ? 0.9 : 1,
          rotateX: springX,
          rotateY: springY,
          translateZ: isSafari ? "100px" : "0",
        }}
        whileHover={{
          scale: isSafari ? 0.93 : 1.03,
        }}
        whileTap={{
          scale: isSafari ? 0.87 : 0.97,
        }}
        onTapCancel={(e) => {
          setTapped(false);
          onMouseOver(e);
        }}
        onTapStart={() => {
          setTapped(true);
        }}
        onTap={(e) => {
          setTapped(false);
        }}
        onHoverStart={hoverStart}
        onHoverEnd={hoverEnd}
        onMouseMove={onMouseOver}
      >
        <Link
          style={{ cursor: "none" }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseDown={handleMouseDown}
          to={`/projects/${id}`}
        >
          <Shadow hover={hover} />
          <RelativeContainer>
            <h1
              style={{
                zIndex: "99999",
                fontFamily: "Montserrat",
                width: "100%",
                color: "white",
                fontSize: "1.7rem",
                textShadow: "4px 4px 7px rgba(0, 0, 0, 1)",
                textAlign: "center",
                textDecoration: "none",
                position: "absolute",
              }}
            >
              {irregularGrid ? title : ""}
            </h1>
            <Image image={image} />
          </RelativeContainer>
          <Gradient
            style={{
              background: gradient,
            }}
          />
        </Link>
      </Content>
    </Container>
  );
}
