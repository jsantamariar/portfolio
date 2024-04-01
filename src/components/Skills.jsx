import htmlLogo from "../assets/img/html-logo.svg";
import cssLogo from "../assets/img/css-logo.svg";
import jsLogo from "../assets/img/js-logo.svg";
import vueLogo from "../assets/img/vue-logo.svg";
import reactLogo from "../assets/img/react-logo.svg";
import reactNativeLogo from "../assets/img/reactnative-logo.svg";
import threejsLogo from "../assets/img/threejs-logo.svg";
import jestLogo from "../assets/img/jest-logo.svg";
import vitestLogo from "../assets/img/vitest-logo.svg";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>I work primarily on Javascript-based technology stacks.</p>
              <br />
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={jsLogo} alt="javascript" />
                  <h5>Javascript (+ES6)</h5>
                </div>
                <div className="item">
                  <img src={cssLogo} alt="css" />
                  <h5>CSS 3</h5>
                </div>
                <div className="item">
                  <img src={htmlLogo} alt="html" />
                  <h5>HTML 5</h5>
                </div>
                <div className="item">
                  <img src={reactLogo} alt="react" />
                  <h5>React JS</h5>
                </div>
                <div className="item">
                  <img src={reactNativeLogo} alt="react native" />
                  <h5>React Native</h5>
                </div>
                <div className="item">
                  <img src={vueLogo} alt="vue" />
                  <h5>Vue JS</h5>
                </div>
                <div className="item">
                  <img src={threejsLogo} alt="threejs" />
                  <h5>Three JS</h5>
                </div>
                <div className="item">
                  <img src={jestLogo} alt="jestjs" />
                  <h5>Jest JS</h5>
                </div>
                <div className="item">
                  <img src={vitestLogo} alt="vitest" />
                  <h5>Vitest</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img
        className="background-image-left"
        src={colorSharp}
        alt="colorsharp"
      />
    </section>
  );
};
