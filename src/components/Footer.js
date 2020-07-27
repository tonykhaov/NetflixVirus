import styled from "styled-components";
import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterWrapper>
      <p className="social-message">We're also on social medias</p>
      <div className="social-media">
        <a href="http://twitter.com/netflix" class="social-media--link" rel="noreferrer">
          <FaTwitter />
        </a>
        <a href="http://instagram.com/netflix" class="social-media--link" rel="noreferrer">
          <FaInstagram />
        </a>
        <a href="http://facebook.com/netflix" class="social-media--link" rel="noreferrer">
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
  padding: 0.6rem 0 0.8rem;

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
