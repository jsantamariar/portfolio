import React from "react";
import { useGLTF, Html } from "@react-three/drei";

const Mac = (props) => {
  const mac = useGLTF("./mac-model.gltf");

  return (
    <primitive {...props} object={mac.scene}>
      <Html
        wrapperClass="htmlScreen"
        transform
        distanceFactor={2.6}
        position={[0.15, 1.8, -1.2]}
        rotation-x={-0.3}
      >
        <iframe
          title="mac"
          src="https://jorgesantamaria.com"
          width={450}
          height={285}
        />
      </Html>
    </primitive>
  );
};

export default Mac;
