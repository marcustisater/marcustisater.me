import React from "react"

import styles from "./index.css"

const Footer = () => (
  <footer className={ styles.footer }>
    { /* I still love you Phenomic <3 */ }
    <p className={ styles.ref } >
        { "Want to get in touch? "}
        <a className= {styles.refunderline} href="mailto:marcus.tisater@gmail.com">
        { "You can always write me"}
        </a>
    </p>
  </footer>
)

export default Footer
