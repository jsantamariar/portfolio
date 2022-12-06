import React from 'react';
import { useGLTF, Html } from '@react-three/drei';

const Iphone = (props) => {
    const iphone = useGLTF('./iphone-model.gltf');

    return (
        <primitive {...props} object={iphone.scene}>
            <Html
                wrapperClass='iphoneModel-banner'
                transform
                distanceFactor={2.6}
                position={[0, 0, 0]}
                rotation-x={-0.226}
            >
                {/* <iframe src="https://www.apple.com/" width={250} height={250} /> */}
            </Html>
        </primitive>
    )
};

export default Iphone;