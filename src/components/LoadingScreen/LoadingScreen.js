import React, { Component } from "react";
import { motion } from "framer-motion";

export const LoadingScreen = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "absolute",
        overflow: "hidden",
        zIndex: 999999,
        backgroundColor: "#0e0d0d",
      }}
    >
      <motion.div
        style={{
          position: "absolute",
          backgroundColor: "black",
          width: "100vw",
          height: "4px",
          top: "calc(50vh - 2px)",
          zIndex: 99,
        }}
        x={"-100%"}
        animate={{
          x: "100%",
        }}
        transition={{ duration: 1, ease: "easeOut" }}
      ></motion.div>
      <motion.div
        animate={{ y: "-100%" }}
        transition={{ duration: 1, ease: "easeOut", delay: 1}}
        style={{ backgroundColor: "#fafafa", width: "100vw", height: "50vh" }}
      ></motion.div>
      <motion.div
        animate={{ y: "100%" }}
        transition={{ duration: 1, ease: "easeOut", delay: 1 }}
        style={{ backgroundColor: "#fafafa", width: "100vw", height: "50vh" }}
      ></motion.div>
    </div>
  );
};

export const withLoadingScreen = (WrappedComponent) => {
  return class extends Component {

    state = {
      loading: true
    }

    async componentDidMount() {
      try {
        setTimeout(() => {
          this.setState({
            loading: false,
          });
        },2000);
      } catch (err) {
        console.log(err);
        this.setState({
          loading: false,
        });
      }
    }
    render() {
      if (this.state.loading) return LoadingScreen();

      return <WrappedComponent {...this.props} />;
    }
  };
};
