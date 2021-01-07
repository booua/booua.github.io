import React from "react";
import ContentSection from "../../components/ContentSection/ContentSection";
import { styles as defaultStyles } from "../../tools/DefaultStyles";
import { motion } from "framer-motion";
import { SplitText } from "../../components/SplitText/SplitText";
import { FiChevronDown } from "react-icons/fi";
import { DiJavascript1, DiReact, DiJava, DiPython, DiGo, DiCss3, DiHtml5, DiNodejs, DiMysql } from "react-icons/di";
import { BiCool, BiVideo } from "react-icons/bi";
import { SiArduino } from "react-icons/si";
import { FaRegKissWinkHeart } from "react-icons/fa";


const AboutPage = () => {
  return (
    <div style={defaultStyles.root}>
      <ContentSection id="about">
        <div>
          <SplitText
            style={{
              fontSize: "4rem",
              color: "black",
              backgroundColor: "white",
              display: "inline-block",
              willChange: "transform",
            }}
            initial={{ y: "100%" }}
            animate="visible"
            variants={{
              visible: (i) => ({
                y: 0,
                transition: {
                  delay: i * 0.24,
                },
              }),
            }}
          >
            Hi, I'm Jack
          </SplitText>
        </div>
        <div>
          <SplitText
            style={{
              fontSize: "4rem",
              color: "black",
              backgroundColor: "white",
              display: "inline-block",
              willChange: "transform",
              padding: "5px",
            }}
            initial={{ y: "100%" }}
            animate="visible"
            variants={{
              visible: (i) => ({
                y: 0,
                transition: {
                  delay: i * 0.24 + 0.6,
                },
              }),
            }}
          >
            and I can do stuff
          </SplitText>
        </div>

        <pre style={{fontSize: '2rem', zIndex: 11,}}>
        I like to call myself a full stack developer. <br></br>
        I can write some front and some back end stuff. <br></br>
        I'm trying to get better at it all the time.<br></br>
        I'm also a car guy, tech enthusiast and overall geek.
        </pre>
        <motion.span
          animate={{ y: 20 }}
          transition={{
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
            duration: 1,
          }}
          style={{ fontSize: "3rem" }}
        >
          <FiChevronDown />
        </motion.span>
        <img
          src="./img/test.png"
          style={{
            height: "75vh",
            bottom: "-25px",
            right: "0",
            position: "absolute",
            zIndex: 10,
          }}
          alt="le me"
        />
      </ContentSection>
      <ContentSection id="skills">
        <div
          style={{
            display: "grid",
            height: "100%",
            width: "100%",
            gridTemplateColumns: "1fr 1fr 1fr",
            placeItems: "center" 
          }}
        >
          <div>
            <span style={{fontSize: '3.2rem'}}>FrontEnd</span>
            <ul style={{listStyle: 'none',fontSize: '2rem'}}>
              <li> <DiJavascript1 style={{fontSize: '3rem'}}/> JavaScript</li>
              <li><DiReact style={{fontSize: '3rem'}}/> React</li>
              <li><DiCss3 style={{fontSize: '3rem'}}/> CSS3/SCSS</li>
              <li><DiHtml5 style={{fontSize: '3rem'}}/> HTML5</li>
            </ul>
          </div>
          <div>
            <span style={{fontSize: '3.2rem'}}>BackEnd</span>
            <ul style={{listStyle: 'none', fontSize: '2rem'}}>
              <li><DiNodejs style={{fontSize: '3rem'}}/> Node.JS</li>
              <li><DiJava style={{fontSize: '3rem'}}/> Java</li>
              <li><DiMysql style={{fontSize: '3rem'}}/> SQL</li>
              <li><DiPython style={{fontSize: '3rem'}}/> Python</li>
              <li><DiGo style={{fontSize: '3rem'}}/> Go</li>
            </ul>
          </div>
          <div>
            <span style={{fontSize: '3.2rem'}}>Other</span>
            <ul style={{listStyle: 'none', fontSize: '2rem'}}>
              <li><BiCool style={{fontSize: '3rem'}}/> My Mom thinks I'm cool</li>
              <li> <SiArduino style={{fontSize: '3rem'}}/> Hardware stuff (Arduino, Raspberry n'shit)</li>
              <li><BiVideo style={{fontSize: '3rem'}}/> Some video editing alongside with basic Photoshop work</li>
              <li><FaRegKissWinkHeart style={{fontSize: '3rem'}}/> I have a cool girlfriend Marta <span role='img' aria-label='heart'>💕</span></li>
            </ul>
          </div>
        </div>
      </ContentSection>
      <ContentSection id="otherStuff">
        things I do
      </ContentSection>
    </div>
  );
};

export default AboutPage;
