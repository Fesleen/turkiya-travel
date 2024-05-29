import React from "react";
import styles from "./style.module.css"
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from "react-router-dom";




function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footer__top}>
          <div className={styles.footer__top_left}>
            <h2>Istanjourney</h2>
            <p>Would you like a free consultation? Perhaps your existing</p>
            <span>Call us today at</span>
            <strong>1-233-456-4789</strong>
            <div className={styles.icons}>
              <YouTubeIcon className={styles.Icon} />
              <TwitterIcon className={styles.Icon} />
              <InstagramIcon className={styles.Icon} />
            </div>
          </div>
          <div className={styles.footer__top_center}>
            <h1>Quick Links</h1>
            <div className={styles.menu}>
              <Link className={styles.link} id="#home">Home</Link>
              <Link className={styles.link} to={"#about"}>About Us</Link>
              <Link className={styles.link} to={"#tours"}>Tours</Link>
              <Link className={styles.link} to={"#"}>FAQ </Link>
              <Link className={styles.link} to={"#contact"}>Contact</Link>
            </div>
          </div>
          <div className={styles.footer__top_right}>
            <h1>Resource</h1>
            <div className={styles.footer__top_right_item}>
              <Link className={styles.link} id="#home">Support</Link>
              <Link className={styles.link} to={"#about"}>Development</Link>
              <Link className={styles.link} to={"#tours"}>Contact</Link>
              <Link className={styles.link} to={"#"}>Term and Condition  </Link>
              <Link className={styles.link} to={"#contact"}>Safety and Security</Link>
            </div>
          </div>
          <div className={styles.footer__top_right}>
            <h1 className={styles.footer__h1}>Resource</h1>
            <div className={styles.footer__top_right_item}>
              <Link className={styles.link} id="#home">Support</Link>
              <Link className={styles.link} to={"#about"}>Development</Link>
              <Link className={styles.link} to={"#tours"}>Contact</Link>
              <Link className={styles.link} to={"#"}>Term and Condition  </Link>
              <Link className={styles.link} to={"#contact"}>Safety and Security</Link>
            </div>
          </div>
        </div>
        <hr />
        <div className={styles.footer__bottom}>
          <p>2023 ©ISTANJOURNEY. All Rights Reserved.</p>
        </div>
      </div>
    </div>

  )
}

export default Footer