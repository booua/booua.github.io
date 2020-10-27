import React from "react";
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer";

const style = {
    gradientStyle: {
        position:"absolute",
        zIndex: "3",
        width: "100vw",
        opacity: "0.7"
    }
}

const pathVariants = {
    hidden: {
        opacity: 0,
      },
    visible: (i) => ({
        opacity: 1,
        transition: {
            delay: i * 0.1,
            duration: 0.4,
            ease: "easeOut"
        }
    })
}

let trigger = false;

export const GradientBackground = () => {

    const [ref, inView] = useInView({
        threshold: 0.7,
    });

    if (inView) trigger = true
    
    return(
        <motion.svg ref={ref} style={style.gradientStyle} viewBox="0 -200 1300 860" className="topography-shape js-shape"  version="1.1" xmlns="http://www.w3.org/2000/svg">
            <motion.path variants={pathVariants} initial="hidden" animate={trigger ? "visible" : "hidden"} custom={12} d="M734.567 34.372c-28.692 61.724-23.266 100.422 16.275 116.094 59.313 23.508 200.347 32.911 259.299 83.906 58.95 50.994 238.697 11.572 269.438-75.95C1310.32 70.9 1365.669-64 1073.808-64c-194.576 0-307.654 32.79-339.24 98.372h-.001z" fill="#FFFA72" fillRule="nonzero" style={{position: 'relative', zIndex: 0, fill: 'rgb(101, 32, 96)'}} transform="translate(-1800, 60) scale(2.8, 2.8) skewX(30) " />
            <motion.path variants={pathVariants} initial="hidden" animate={trigger ? "visible" : "hidden"} custom={11} d="M734.567 34.372c-28.692 61.724-23.266 100.422 16.275 116.094 59.313 23.508 200.347 32.911 259.299 83.906 58.95 50.994 238.697 11.572 269.438-75.95C1310.32 70.9 1365.669-64 1073.808-64c-194.576 0-307.654 32.79-339.24 98.372h-.001z" fill="#FFFA72" fillRule="nonzero" style={{position: 'relative', zIndex: 1, fill: 'rgb(96, 47, 106)'}} transform="translate(-1650, 55) scale(2.65, 2.65) skewX(27.5) " />
            <motion.path variants={pathVariants} initial="hidden" animate={trigger ? "visible" : "hidden"} custom={10} d="M734.567 34.372c-28.692 61.724-23.266 100.422 16.275 116.094 59.313 23.508 200.347 32.911 259.299 83.906 58.95 50.994 238.697 11.572 269.438-75.95C1310.32 70.9 1365.669-64 1073.808-64c-194.576 0-307.654 32.79-339.24 98.372h-.001z" fill="#FFFA72" fillRule="nonzero" style={{position: 'relative', zIndex: 2, fill: 'rgb(92, 63, 115)'}} transform="translate(-1500, 50) scale(2.5, 2.5) skewX(25) " />
            <motion.path variants={pathVariants} initial="hidden" animate={trigger ? "visible" : "hidden"} custom={9} d="M734.567 34.372c-28.692 61.724-23.266 100.422 16.275 116.094 59.313 23.508 200.347 32.911 259.299 83.906 58.95 50.994 238.697 11.572 269.438-75.95C1310.32 70.9 1365.669-64 1073.808-64c-194.576 0-307.654 32.79-339.24 98.372h-.001z" fill="#FFFA72" fillRule="nonzero" style={{position: 'relative', zIndex: 3, fill: 'rgb(87, 79, 124)'}} transform="translate(-1350, 45) scale(2.3499999999999996, 2.3499999999999996) skewX(22.5) " />
            <motion.path variants={pathVariants} initial="hidden" animate={trigger ? "visible" : "hidden"} custom={8} d="M734.567 34.372c-28.692 61.724-23.266 100.422 16.275 116.094 59.313 23.508 200.347 32.911 259.299 83.906 58.95 50.994 238.697 11.572 269.438-75.95C1310.32 70.9 1365.669-64 1073.808-64c-194.576 0-307.654 32.79-339.24 98.372h-.001z" fill="#FFFA72" fillRule="nonzero" style={{position: 'relative', zIndex: 4, fill: 'rgb(83, 94, 133)'}} transform="translate(-1200, 40) scale(2.2, 2.2) skewX(20) " />
            <motion.path variants={pathVariants} initial="hidden" animate={trigger ? "visible" : "hidden"} custom={7} d="M734.567 34.372c-28.692 61.724-23.266 100.422 16.275 116.094 59.313 23.508 200.347 32.911 259.299 83.906 58.95 50.994 238.697 11.572 269.438-75.95C1310.32 70.9 1365.669-64 1073.808-64c-194.576 0-307.654 32.79-339.24 98.372h-.001z" fill="#FFFA72" fillRule="nonzero" style={{position: 'relative', zIndex: 5, fill: 'rgb(79, 110, 143)'}} transform="translate(-1050, 35) scale(2.05, 2.05) skewX(17.5) " />
            <motion.path variants={pathVariants} initial="hidden" animate={trigger ? "visible" : "hidden"} custom={6} d="M734.567 34.372c-28.692 61.724-23.266 100.422 16.275 116.094 59.313 23.508 200.347 32.911 259.299 83.906 58.95 50.994 238.697 11.572 269.438-75.95C1310.32 70.9 1365.669-64 1073.808-64c-194.576 0-307.654 32.79-339.24 98.372h-.001z" fill="#FFFA72" fillRule="nonzero" style={{position: 'relative', zIndex: 6, fill: 'rgb(74, 126, 152)'}} transform="translate(-900, 30) scale(1.9, 1.9) skewX(15) " />
            <motion.path variants={pathVariants} initial="hidden" animate={trigger ? "visible" : "hidden"} custom={5} d="M734.567 34.372c-28.692 61.724-23.266 100.422 16.275 116.094 59.313 23.508 200.347 32.911 259.299 83.906 58.95 50.994 238.697 11.572 269.438-75.95C1310.32 70.9 1365.669-64 1073.808-64c-194.576 0-307.654 32.79-339.24 98.372h-.001z" fill="#FFFA72" fillRule="nonzero" style={{position: 'relative', zIndex: 7, fill: 'rgb(70, 141, 161)'}} transform="translate(-750, 25) scale(1.75, 1.75) skewX(12.5) " />
            <motion.path variants={pathVariants} initial="hidden" animate={trigger ? "visible" : "hidden"} custom={4} d="M734.567 34.372c-28.692 61.724-23.266 100.422 16.275 116.094 59.313 23.508 200.347 32.911 259.299 83.906 58.95 50.994 238.697 11.572 269.438-75.95C1310.32 70.9 1365.669-64 1073.808-64c-194.576 0-307.654 32.79-339.24 98.372h-.001z" fill="#FFFA72" fillRule="nonzero" style={{position: 'relative', zIndex: 8, fill: 'rgb(65, 157, 170)'}} transform="translate(-600, 20) scale(1.6, 1.6) skewX(10) " />
            <motion.path variants={pathVariants} initial="hidden" animate={trigger ? "visible" : "hidden"} custom={3} d="M734.567 34.372c-28.692 61.724-23.266 100.422 16.275 116.094 59.313 23.508 200.347 32.911 259.299 83.906 58.95 50.994 238.697 11.572 269.438-75.95C1310.32 70.9 1365.669-64 1073.808-64c-194.576 0-307.654 32.79-339.24 98.372h-.001z" fill="#FFFA72" fillRule="nonzero" style={{position: 'relative', zIndex: 9, fill: 'rgb(61, 173, 180)'}} transform="translate(-450, 15) scale(1.45, 1.45) skewX(7.5) " />
            <motion.path variants={pathVariants} initial="hidden" animate={trigger ? "visible" : "hidden"} custom={2} d="M734.567 34.372c-28.692 61.724-23.266 100.422 16.275 116.094 59.313 23.508 200.347 32.911 259.299 83.906 58.95 50.994 238.697 11.572 269.438-75.95C1310.32 70.9 1365.669-64 1073.808-64c-194.576 0-307.654 32.79-339.24 98.372h-.001z" fill="#FFFA72" fillRule="nonzero" style={{position: 'relative', zIndex: 10, fill: 'rgb(56, 188, 189)'}} transform="translate(-300, 10) scale(1.3, 1.3) skewX(5) " />
            <motion.path variants={pathVariants} initial="hidden" animate={trigger ? "visible" : "hidden"} custom={1} d="M734.567 34.372c-28.692 61.724-23.266 100.422 16.275 116.094 59.313 23.508 200.347 32.911 259.299 83.906 58.95 50.994 238.697 11.572 269.438-75.95C1310.32 70.9 1365.669-64 1073.808-64c-194.576 0-307.654 32.79-339.24 98.372h-.001z" fill="#FFFA72" fillRule="nonzero" style={{position: 'relative', zIndex: 11, fill: 'rgb(52, 204, 198)'}} transform="translate(-150, 5) scale(1.15, 1.15) skewX(2.5) " />
        </motion.svg>
    )
}
