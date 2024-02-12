import { Html } from "@react-three/drei";
import React from "react";

const MusicApp = (props) => {
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
        href="https://music-jsantamariabf.vercel.app/"
        rel="noreferrer"
      >
        Full Project
      </a>
      <iframe
        title="music app"
        src={"https://music-jsantamariabf..app/"}
        {...props}
      />
    </Html>
  );
};

export default MusicApp;
