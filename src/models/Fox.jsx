import React, { useEffect, useState } from 'react';
import { useGLTF, useAnimations, Html } from "@react-three/drei";
import { useControls } from 'leva';

const Fox = (props) => {
    const fox = useGLTF('./Fox.glb');
    const animations = useAnimations(fox.animations, fox.scene);
    const [closeInfo, setCloseInfo] = useState(false);

    const { foxAnimation } = useControls({
        foxAnimation: {
            options: animations.names,
        },
    });

    useEffect(() => {
        const action = animations.actions[foxAnimation];
        action
            .reset()
            .fadeIn(0.5)
            .play();

        return () => {
            action.fadeOut(0.5);
            setCloseInfo(true);

        }
    }, [foxAnimation]);


    return (
        <>
            {!closeInfo &&
                <Html
                    wrapperClass={"htmlScreen"}
                    transform
                    distanceFactor={2.6}
                    position={[0, -0.3, -1.4]}
                    rotation-x={-0.226}
                >
                    <p className={!closeInfo ? "close-info" : "close-htmlScreen"} onClick={() => null}>
                        You'll see the controls <br /> in the upper right corner &#128521;
                    </p>
                </Html>
            }
            <primitive {...props} object={fox.scene} />
        </>

    )
};

export default Fox;