import React from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import { revealAnimation, exitAnimation } from "../../tools/AnimationTypes";

const styles = {
  contactPane: {
    width: "80vw",
    height: "200px",
    marginLeft: "10vw",
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    borderTopLeftRadius: "30px",
    borderTopRightRadius: "30px",
    position: "fixed",
    padding: "20px",
    bottom: "0",
    zIndex: "99999",
  },
};

const ContactPane = ({ isToggled, hide }) =>
  ReactDOM.createPortal(
    <motion.section
      style={styles.contactPane}
      initial={false}
      animate={isToggled ? revealAnimation : exitAnimation}
    >
      contact
      <div>Email</div>
      <div>linkedin</div>
      <div>Feel free to drop me a message</div>

      <form className="contact-form" onSubmit={(e) => this.formSubmit(e)}>
        <label htmlFor="message-input">
          Your Message
        </label>
        <textarea
          onChange={(e) => this.setState({ message: e.target.value })}
          name="message"
          type="text"
          placeholder="Please write your message here"
          required
        />

        <label htmlFor="message-name">
          Your Name
        </label>
        <input
          onChange={(e) => this.setState({ name: e.target.value })}
          name="name"
          type="text"
          placeholder="Your Name"
        />

        <label htmlFor="message-email">
          Your Email
        </label>
        <input
          onChange={(e) => this.setState({ email: e.target.value })}
          name="email"
          type="email"
          placeholder="your@email.com"
          required
        />

        <div className="button--container">
          <button type="submit" className="button button-primary">
          </button>
        </div>
      </form>
      <div onClick={hide}>CLOSE</div>
    </motion.section>,
    document.body
  );
export default ContactPane;
