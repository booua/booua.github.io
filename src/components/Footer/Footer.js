import React from "react"

function Footer (props) {

    const styles = ({
        footer:{
            display:"flex",
            flexDirection: 'column'
        }
    })
    return (
        <footer className="footer" style={styles.footer}>
           <h1>FOOTER</h1>
        </footer>
    )

}

export default Footer;