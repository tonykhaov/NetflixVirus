import styled from "styled-components";
import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterWrapper>
      <p data-testid="social-message" className="social-message">
        We're also on social medias
      </p>
      <div className="social-media">
        <a
          href="http://twitter.com/netflix"
          className="social-media--link"
          rel="noreferrer noopener"
          target="_blank"
        >
          <FaTwitter />
        </a>
        <a
          href="http://instagram.com/netflix"
          className="social-media--link"
          rel="noreferrer noopener"
          target="_blank"
        >
          <FaInstagram />
        </a>
        <a
          href="http://facebook.com/netflix"
          className="social-media--link"
          rel="noreferrer noopener"
          target="_blank"
        >
          <FaFacebookF />
        </a>
      </div>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  background-color: #222;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 0 0.6rem;

  > * {
    &:first-child {
      padding: 0;
      padding-bottom: 0.3rem;
    }
    &:last-child {
      padding: 0;
      padding-top: 0.3rem;
    }
  }

  .social-message {
    color: grey;
  }

  .social-media {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    max-width: 256px;

    .social-media--link {
      color: white;
      font-size: 24px;

      &:hover {
        color: gray;
      }
    }
  }
`;

export default Footer;
