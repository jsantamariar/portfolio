import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { Canvas } from "@react-three/fiber";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import Mac from "../models/Mac";
import MusicApp from "../models/MusicApp";
import {
  ContactShadows,
  Float,
  PresentationControls,
  Text,
} from "@react-three/drei";
import Fox from "../models/Fox";
import FraserApp from "../models/FraserApp";
import WatAI from "../models/WatAI";

export const Projects = () => {
  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div>
                  <h2>Projects</h2>
                  <p>
                    Here you'll find some examples using React JS, React Three
                    Fiber, Vue JS and others.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">WAT AI</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Vue Music App</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Fraser Lee</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp">
                      <Tab.Pane className="panel-projects" eventKey="first">
                        <Canvas
                          camera={{
                            fov: 40,
                            near: 0.5,
                            far: 1000,
                            position: [-2, 1, 3.5],
                          }}
                        >
                          <color args={["#000000"]} attach="background" />
                          <ambientLight intensity={2} color="white" />

                          <Float rotationIntensity={0.5}>
                            <WatAI width={650} height={350} />
                          </Float>
                        </Canvas>
                      </Tab.Pane>
                      <Tab.Pane className="panel-projects" eventKey="second">
                        <Canvas
                          camera={{
                            fov: 40,
                            near: 0.5,
                            far: 1000,
                            position: [-2, 1, 3.5],
                          }}
                        >
                          <Float rotationIntensity={0.5}>
                            <MusicApp width={650} height={350} />
                          </Float>
                        </Canvas>
                      </Tab.Pane>
                      <Tab.Pane className="panel-projects" eventKey="third">
                        <Canvas
                          camera={{
                            fov: 40,
                            near: 0.5,
                            far: 1000,
                            position: [-2, 1, 3.5],
                          }}
                        >
                          <Float rotationIntensity={0.5}>
                            <FraserApp width={650} height={350} />
                          </Float>
                        </Canvas>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
