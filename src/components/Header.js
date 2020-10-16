import Link from "next/link";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderWrapper>
      <h1 className="title">
        <Link href="/">
          <a>
            <span className="title--red">Netflix</span>
            <span className="title--lightgray">Virus</span>
          </a>
        </Link>
      </h1>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  background-color: #222;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.6rem 0 0.8rem;
  height: 48px;

  .title {
    font-size: 36px;

    .title--red {
      color: #e50914;
    }
    .title--lightgray {
      color: #e2e2e2;
    }
  }
`;

export default Header;
