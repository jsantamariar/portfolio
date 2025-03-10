import React from "react";
import { Html } from "@react-three/drei";

const WatAI = (props) => {
  return (
    <Html
      wrapperClass="htmlScreen"
      transform
      distanceFactor={2.6}
      position={[1.3, 0, -1.4]}
      rotation-x={-0.226}
    >
      <a
        target="_blank"
        href="https://wordassociationtest.com/en"
        rel="noreferrer"
      >
        Full Project
      </a>
      <iframe
        title="music app"
        src={"https://wordassociationtest.com/en"}
        {...props}
      />
    </Html>
  );
};

export default WatAI;
