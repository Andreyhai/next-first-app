// import logoIcon from "../../assets/icons/logoIcon.svg";
// import logoText from "../../assets/icons/logoTeext.svg";

// import facebook from "../../assets/icons/social/facebook.svg";
// import twiter from "../../assets/icons/social/twiter.svg";
// import inn from "../../assets/icons/social/in.svg";
// import instagramm from "../../assets/icons/social/instagramm.svg";

import Link from "next/link";
import styles from "./Footer.module.scss";

import Image from 'next/image';

const Footer = () => {
  const socials = ['facebook', 'twiter', 'in', 'instagramm'];

  const pages = ["Style Guide", "Protected", "Licenses", "Changelog", "404"];
  const explore = ["About Us", "Recent Blog", "Pricing Plan", "Our Projects", "Contact Us"];
  const contact = ["53, East Birchwood Ave. Brooklyn, New York 11201, USA.", "contact@interno.com", "(123) 456 - 7890"];


  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <article className={styles.footerBlock}>
          <article className={styles.block}>
            <Link
              href="/test"
              className={styles.logo}
              aria-label="Вернуться на главную"
            >
              <Image src={'/icons/logo/logoIcon.svg'} alt="Логотип" width={30} height={30} />
              <Image src={'/icons/logo/logoTeext.svg'} alt="Логотип" width={100} height={30} />
            </Link>
            <p className={styles.link}>
              We are the leading architect and interior design firm in the
              world.
            </p>
            <div className={styles.socials}>
              {socials.map((social) => (
                <Image key={social} src={`/icons/social/${social}.svg`} alt={social} width={20} height={20} />
              ))}
            </div>
          </article>
          <article className={styles.block}>
            <span className={styles.title}>Pages</span>
            {pages.map((link) => (
              <span key={link} className={styles.link}>{link}</span>
            ))}
          </article>
          <article className={styles.block}>
            <span className={styles.title}>Explore</span>
            {explore.map((link) => (
              <span key={link} className={styles.link}>{link}</span>
            ))}
          </article>
          <article className={styles.block}>
            <span className={styles.title}>Contact</span>
            {contact.map((link) => (
              <span key={link} className={styles.link}>{link}</span>
            ))}
          </article>
        </article>
       
      </div>
    </footer>
  );
};

export default Footer;
