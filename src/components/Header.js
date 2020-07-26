import Link from "next/link";

const Header = () => {
  return (
    <header>
      <h1>
        <Link href="/">
          <a>
            <span>Netflix</span>
            <span>Virus</span>
          </a>
        </Link>
      </h1>
      <p>React & Nextjs</p>
    </header>
  );
};

export default Header;
