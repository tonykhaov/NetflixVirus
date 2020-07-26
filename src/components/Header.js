import Link from "next/link";
import styles from "../styles/header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        <Link href="/">
          <a>
            <span className={styles["title--red"]}>Netflix</span>
            <span className={styles["title--light-gray"]}>Virus</span>
          </a>
        </Link>
      </h1>
    </header>
  );
};

export default Header;
