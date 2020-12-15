import React, { useState } from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import { revealAnimation, exitAnimation } from "../../tools/AnimationTypes";
import { AtSign, Coffee, GitHub, Linkedin, Loader, X } from "react-feather";

const styles = {
  contactPane: {
    cursor: "none",
    width: "80vw",
    height: "200px",
    marginLeft: "10vw",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderTopLeftRadius: "30px",
    borderTopRightRadius: "30px",
    position: "fixed",
    padding: "20px",
    bottom: "0",
    zIndex: "99999",
    display: "grid",
    gridGap: "1rem",
    gridTemplateColumns: "1fr 1fr",
  },
  closeBtn: {
    position: "absolute",
    top: "10px",
    right: "10px",
  },
  formContainer: {
    textAlign: "center",
  },
  textArea: {
    backgroundColor: "rgba(255,255,255,0.6)",
    height: "100px",
    gridColumn: "1 / span 12",
    borderRadius: "10px",
    border: 'none'
  },
  socialMediaContainer: {
    display: "grid",
    placeItems: "center",
  },
  form: {
    display: "grid",
    gridTemplate: "1fr auto / 1fr 1fr",
  },
  submitBtn: {
    gridColumn: "1 / 3",
    width: "100px",
    margin: "0 auto",
    marginTop: "10px",
    background: "rgba(255, 255, 255, 0.5)",
    borderRadius: "20px",
    border: 'none',
    padding: '5px'
  },
  socialMediaLinks: {
    textDecoration: "none",
    paddingLeft: "20px",
    color: "#dfdfdf",
    cursor: "none",
  },
  icon: {
    color: "white",
    size: 20,
  },
  nameInput: {
    marginRight: "10px",
    marginBottom: "10px",
    borderRadius: "10px",
    border: 'none',
  },
  emailInput: {
    marginLeft: "10px",
    marginBottom: "10px",
    borderRadius: "10px",
    border: 'none',
  },
};

const socialMediaLinks = {
  LinkedIn: {
    url: "https://www.linkedin.com/in/jacek-paciorek/",
    icon: <Linkedin {...styles.icon} />,
  },
  GitHub: {
    url: "https://github.com/booua",
    icon: <GitHub {...styles.icon} />,
  },
  BuyMeACoffee: {
    url: "buymeacoffee.com/booua",
    icon: <Coffee {...styles.icon} />,
  },
  "Cern Alumni": {
    url: "https://alumni.cern/users/3660163",
    icon: <Loader {...styles.icon} />,
  },
  "jack.paciorek@gmail.com": {
    url: "mailto:jack.paciorek@gmail.com",
    icon: <AtSign {...styles.icon} />,
  },
};

const ContactPane = ({ isToggled, hide }) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const submitForm = (event) => {
    event.preventDefault();
    let formData = new URLSearchParams();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);

    fetch(
      "https://send.pageclip.co/ZNkoaHD4pa6u7nBwUqIuzhxFOvheidAY/portfolio",
      {
        body: formData,
        method: "post",
      }
    );
  };

  return ReactDOM.createPortal(
    <motion.section
      style={styles.contactPane}
      initial={false}
      animate={isToggled ? revealAnimation : exitAnimation}
    >
      <div style={styles.socialMediaContainer}>
        {Object.keys(socialMediaLinks).map((key) => {
          return (
            <div
              key={key}
              style={{ display: "flex", justifyContent: "center" }}
            >
              {socialMediaLinks[key].icon}
              <a
                href={socialMediaLinks[key].url}
                style={styles.socialMediaLinks}
              >
                <span>{key}</span>
              </a>
            </div>
          );
        })}
      </div>
      <div style={styles.formContainer}>
        <div style={{ fontSize: "1rem", color: "#dfdfdf", padding: "15px" }}>
          Feel free to drop me a message
        </div>
        <form onSubmit={(e) => submitForm(e)} style={styles.form}>
          <input
            name="name"
            onInput={(e) => setName(e.target.value)}
            style={styles.nameInput}
            type="text"
            placeholder="  Your Name"
          />

          <input
            style={styles.emailInput}
            onInput={(e) => setEmail(e.target.value)}
            name="email"
            type="email"
            placeholder="  your@email.com"
            required
          />
          <textarea
            style={styles.textArea}
            onInput={(e) => setMessage(e.target.value)}
            name="message"
            type="text"
            placeholder=" Your message"
            required
          />
          <button style={styles.submitBtn} type="submit">
            Submit
          </button>
        </form>
      </div>
      <div onClick={hide} style={styles.closeBtn}>
        <X color="white" />
      </div>
    </motion.section>,
    document.body
  );
};

export default ContactPane;
