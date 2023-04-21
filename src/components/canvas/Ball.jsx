import React, { Suspense, useRef, useState  } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  const [rotation, setRotation] = useState([0, 0, 0]);
  const ballRef = useRef();

  const handleMouseMove = (event) => {
    const rect = ballRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const width = rect.width;
    const height = rect.height;
    const speed = 0.10;

    const rotY = (x - width / 2) * speed;
    const rotX = (y - height / 2) * speed;
    
    setRotation([rotX, rotY, 0]);
  };

  const handleMouseLeave = () => {
    setRotation([0, 0, 0]);
  };

  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <OrbitControls enableZoom={false} />
      <Suspense fallback={<CanvasLoader />}>
        <Ball imgUrl={icon} ref={ballRef} rotation={rotation} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
  // return (
  //   <Canvas
  //     frameloop='demand'
  //     dpr={[1, 2]}
  //     gl={{ preserveDrawingBuffer: true }}
  //   >
  //     <Suspense fallback={<CanvasLoader />}>
  //       <OrbitControls enableZoom={false} />
  //       <Ball imgUrl={icon} />
  //     </Suspense>

  //     <Preload all />
  //   </Canvas>
  // );
};

export default BallCanvas;
