import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { Canvas } from '@react-three/fiber'
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Mac from "../models/Mac";
import MusicApp from "../models/MusicApp";
import { ContactShadows, Float, PresentationControls, Text } from "@react-three/drei";
import Fox from "../models/Fox";

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
                     {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                           <h2>Projects</h2>
                           <p>Here you'll find some examples using ThreeJS, React Three Fiber, React Three Drei, Vue JS and others.</p>
                           <Tab.Container id="projects-tabs" defaultActiveKey="first">
                              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                 <Nav.Item>
                                    <Nav.Link eventKey="first">3D Mac Model</Nav.Link>
                                 </Nav.Item>
                                 <Nav.Item>
                                    <Nav.Link eventKey="second">Music App</Nav.Link>
                                 </Nav.Item>
                                 <Nav.Item>
                                    <Nav.Link eventKey="third">3D Fox Animation</Nav.Link>
                                 </Nav.Item>
                              </Nav>
                              <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                 <Tab.Pane className="panel-projects" eventKey="first">
                                    <Canvas
                                       camera={{
                                          fov: 40,
                                          near: 0.5,
                                          far: 1000,
                                          position: [-2, 1, 3.5]
                                       }}
                                    >
                                       <color args={['#000000']} attach="background" />
                                       <ambientLight intensity={2} color="white" />
                                       <group
                                          position={[-0.5, 0, 0]}
                                       >
                                          <PresentationControls
                                             global
                                             rotation={[0.13, 0.1, 0]}
                                             polar={[- 0.4, 0.2]}
                                             azimuth={[- 1, 0.75]}
                                             config={{ mass: 2, tension: 300 }}
                                             snap={{ mass: 4, tension: 400 }}
                                          >
                                             <Float rotationIntensity={0.5}>
                                                <rectAreaLight
                                                   width={2.5}
                                                   height={1.65}
                                                   intensity={65}
                                                   color={'//#endregionA4BE7B'}
                                                   rotation={[0.1, Math.PI, 0]}
                                                   position={[0, 0.55, -1.15]}
                                                />
                                                <Mac scale={0.7} position={[0.5, -0.9, 0]} rotation={[-0, 0.3, -0.2]} />
                                                <Text
                                                   font="./bangers-v20-latin-regular.woff"
                                                   fontSize={0.12}
                                                   letterSpacing={0.05}
                                                   position={[2, 0.4, 0]}
                                                   rotation={[0, -1.3, 0]}
                                                   color="whitesmoke"
                                                   scale={3}
                                                >
                                                   Macbook Pro
                                                </Text>
                                                <Text
                                                   font="./bangers-v20-latin-regular.woff"
                                                   fontSize={0.06}
                                                   letterSpacing={0.12}
                                                   position={[2, 0, 0]}
                                                   rotation={[0, -1.3, 0]}
                                                   color="whitesmoke"
                                                   scale={3}
                                                >
                                                   Chip M1
                                                </Text>
                                             </Float>
                                          </PresentationControls>
                                       </group>
                                       <ContactShadows
                                          position={[0, -1.4, 0]}
                                          opacity={0.4}
                                          scale={5}
                                          blur={2.4}
                                       />
                                    </Canvas>
                                 </Tab.Pane>
                                 <Tab.Pane className="panel-projects" eventKey="second">
                                    <Canvas camera={{
                                       fov: 40,
                                       near: 0.5,
                                       far: 1000,
                                       position: [-2, 1, 3.5]
                                    }}>
                                       <Float rotationIntensity={0.5}>
                                          <MusicApp width={650} height={350} />
                                       </Float>
                                    </Canvas>
                                 </Tab.Pane>
                                 <Tab.Pane className="panel-projects" eventKey="third">
                                    <Canvas camera={{
                                       fov: 40,
                                       near: 0.5,
                                       far: 1000,
                                       position: [-2, 1, 3.5]
                                    }}>
                                       <color args={['#000000']} attach="background" />
                                       <ambientLight intensity={2} color="white" />

                                       <Float rotationIntensity={0.5}>
                                          <Fox scale={0.020} position={[0, -0.5, 0]} />
                                       </Float>
                                    </Canvas>
                                 </Tab.Pane>
                              </Tab.Content>
                           </Tab.Container>
                        </div>}
                  </TrackVisibility>
               </Col>
            </Row>
         </Container>
         <img className="background-image-right" src={colorSharp2}></img>
      </section>
   )
}
