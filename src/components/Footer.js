import styles from "../styles/footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles["social-message"]}>We're also on social medias</p>
      <div className={styles["social-medias"]}>
        <a href="http://twitter.com/netflix">Twitter</a>
        <a href="http://instagram.com/netflix">Instagram</a>
        <a href="http://facebook.com/netflix">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
