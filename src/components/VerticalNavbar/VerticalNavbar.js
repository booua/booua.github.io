import React from "react"
import { Link } from "react-router-dom";

function VerticalNavbar (props) {

    const styles = ({
        navBar:{
            color: "#afafaf",
            padding:"30px 10px 10px 0px",
            display: "flex",
            flex: "1 0 auto",
            backgroundColor: "transparent",
            width: "100vh",
            height: "4rem",
            transformOrigin: "top left",
            position: "fixed",
            left: "0",
            top: "100%",
            transform: "rotate(-90deg)"
        },
        logo:{
            display: "flex",
            flexDirection: "row",
            flex: "1 0 auto",
            justifyContent: "right",
            alignItems: "right",
            marginRight: "30px",
        },
        navContainer:{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            flex: "5 0 auto"
        },
        contactIcon:{
            display: "flex",
            flexDirection: "row",
            flex: "1 0 auto",
            marginLeft: "30px",
        },
        navItem:{
            color: "#afafaf",
            paddingLeft:"30px",
            textDecoration:"none",
            
        }
        
    })
    return (
        <div className="navBar" style={styles.navBar}>
            <span style={styles.contactIcon}>contact</span>
            <div style={styles.navContainer}>
                <Link to="/about" className="item" style={styles.navItem}>About</Link>
                <Link to="/articles" className="item" style={styles.navItem}>Articles</Link>
                <Link to="/projects" className="item" style={styles.navItem}>Projects</Link>
            </div>
            <span style={styles.logo}>logo</span>
        </div>
    )

}

export default VerticalNavbar;