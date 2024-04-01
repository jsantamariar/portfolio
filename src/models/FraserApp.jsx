import React from "react";
import { Html } from "@react-three/drei";

const FraserApp = (props) => {
  return (
    <Html
      wrapperClass="htmlScreen"
      transform
      distanceFactor={2.6}
      position={[1.3, 0, -1.4]}
      rotation-x={-0.226}
    >
      <a target="_blank" href="https:/fraserlee.com" rel="noreferrer">
        Full Project
      </a>
      <iframe title="Fraser Lee" src={"https:/fraserlee.com"} {...props} />
    </Html>
  );
};

export default FraserApp;
