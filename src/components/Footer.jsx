import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";


export const Footer = () => {
  return (
    <footer className="footer">
      <Container className="pt-4">
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <div>
              <a href="#home">
                <img className="footer-brand-logo" src={logo} alt="Logo" />
              </a>
            </div>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a target="_blank" href="https://www.linkedin.com/in/santamariaramosj/">
                <img src={navIcon1} alt="linkedin" />
              </a>
            </div>
            <p>Made with love by JS</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
