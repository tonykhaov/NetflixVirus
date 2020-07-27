import styled from "styled-components";

const Footer = () => {
  return (
    <FooterWrapper>
      <p className="social-message">We're also on social medias</p>
      <div className="social-medias">
        <a href="http://twitter.com/netflix">Twitter</a>
        <a href="http://instagram.com/netflix">Instagram</a>
        <a href="http://facebook.com/netflix">Facebook</a>
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

  .social-medias {
    display: flex;
    justify-content: space-around;
    background: red;
    align-items: center;
    width: 100%;
    max-width: 720px;
  }

  @media (min-width: 720px) {
    .social-medias {
      width: 720px;
    }
  }
`;

export default Footer;
