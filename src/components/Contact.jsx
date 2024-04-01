import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
// import 'animate.css';
import TrackVisibility from "react-on-screen";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code == 200) {
      setStatus({ succes: true, message: "Message sent successfully" });
    } else {
      setStatus({
        succes: false,
        message: "Something went wrong, please try again later.",
      });
    }
  };

  const handleWhatsApp = () => {
    return window.open(
      "https://wa.me/573106000773?text=Hey%20Jorge,%20I%20want%20to%20get%20in%20touch%20with%20you.",
      "_blank"
    );
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <form onSubmit={handleSubmit}>
                    <h2>Get In Touch</h2>
                    <p className="contact-description">
                      If you want to contact me, please press the{" "}
                      <strong>CONTACT</strong> button and write me an email.
                      <br />
                      I'd be glad to answer you as soon as possible{" "}
                      <span className="fs-3">&#129309;&#127996;</span>.
                    </p>
                    <p className="contact-description">
                      Phone Number:{" "}
                      <span
                        className="button-whatsapp pointer"
                        onClick={handleWhatsApp}
                      >
                        +57 3106000773
                      </span>
                    </p>
                    <p className="contact-description">
                      E-mail: santamaria.web.dev@gmail.com
                    </p>

                    <Row>
                      <Col size={12} className="px-1">
                        <button
                          onClick={() =>
                            window.open("mailto:santamaria.web.dev@gmail.com")
                          }
                          type="submit"
                        >
                          <span>CONTACT</span>
                        </button>
                      </Col>
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
