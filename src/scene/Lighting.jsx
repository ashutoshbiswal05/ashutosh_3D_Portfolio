import { useRef, useEffect } from "react";
import * as THREE from "three";

import { RectAreaLightUniformsLib } from "three/examples/jsm/lights/RectAreaLightUniformsLib.js";

RectAreaLightUniformsLib.init();

function WindowLight() {
  const lightRef = useRef();

  useEffect(() => {
    if (!lightRef.current) return;

    lightRef.current.lookAt(
      0,
      0,
      0
    );
  }, []);

  return (
    <rectAreaLight
      ref={lightRef}
      position={[0, 1.8, -2]}
      width={5}
      height={3.6}
      intensity={2}
      color="#aacfff"
    />
  );
}

function MonitorLights() {
  return (
    <>
      {/* Left Monitor */}
      <group
        position={[-0.62, 1.09, -0.06]}
        rotation={[
          THREE.MathUtils.degToRad(-180),
          THREE.MathUtils.degToRad(-8),
          0
        ]}
      >
        <rectAreaLight
          width={0.68}
          height={0.40}
          intensity={40}
          color="#aacfff"
        />
      </group>

      {/* Right Monitor */}
      <group
        position={[0.10, 1.09, -0.06]}
        rotation={[
          THREE.MathUtils.degToRad(-180),
          THREE.MathUtils.degToRad(8),
          0
        ]}
      >
        <rectAreaLight
          width={0.68}
          height={0.40}
          intensity={40}
          color="#aacfff"
        />
      </group>
    </>
  );
}

function BedLamp1() {
  return (
    <rectAreaLight
      position={[2.16, 0.80, 3.04]}
      rotation={[
        THREE.MathUtils.degToRad(-90),
        0,
        0
      ]}
      width={0.14}
      height={0.14}
      intensity={100}
      color="#ffcc88"
    />
  );
}

function BedLamp2() {
  return (
    <rectAreaLight
      position={[2.16, 0.80, 1.16]}
      rotation={[
        THREE.MathUtils.degToRad(-90),
        0,
        0
      ]}
      width={0.14}
      height={0.14}
      intensity={100}
      color="#ffcc88"
    />
  );
}

function LampLight() {
  const lightRef = useRef();
  return (
    <group
      position={[-0.21, 1.42, 0.03]}
      rotation={[
        THREE.MathUtils.degToRad(-90),
        THREE.MathUtils.degToRad(0),
        THREE.MathUtils.degToRad(0)
      ]}
    >
      <rectAreaLight
        ref={lightRef}
        width={1.25}
        height={0.03}
        intensity={170}
        color="#ffcc88"
      />
    </group>
  );
}

function BedLampUpperLights() {
  return (
    <>
      {/* Right Lamp */}
      <group
        position={[2.21, 1.00, 3.04]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <rectAreaLight
          width={0.10}
          height={0.10}
          intensity={70}
          color="#ffcc88"
        />
      </group>

      {/* Left Lamp */}
      <group
        position={[2.21, 1.00, 1.16]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <rectAreaLight
          width={0.10}
          height={0.10}
          intensity={70}
          color="#ffcc88"
        />
      </group>
    </>
  );
}

function ShelfLights() {
  return (
    <>
      {/* Shelf 1 */}
      <group
        position={[2.21, 1.16, 0.27]}
        rotation={[-Math.PI / 2, Math.PI, 0]}
      >
        <rectAreaLight
          width={0.02}
          height={1.10}
          intensity={20}
          color="#ffcc88"
        />
      </group>

      {/* Shelf 2 */}
      <group
        position={[2.21, 1.56, 0.32]}
        rotation={[-Math.PI / 2, Math.PI, 0]}
      >
        <rectAreaLight
          width={0.02}
          height={1.20}
          intensity={20}
          color="#ffcc88"
        />
      </group>

      {/* Shelf 3 */}
      <group
        position={[2.21, 1.96, 0.37]}
        rotation={[-Math.PI / 2, Math.PI, 0]}
      >
        <rectAreaLight
          width={0.02}
          height={1.30}
          intensity={20}
          color="#ffcc88"
        />
      </group>
    </>
  );
}

function DeskInvisibleLight() {
  return (
    <group
      position={[-2.14, 2.68, 2.52]}
      rotation={[-Math.PI / 2, 0, 0]}
    >
      <rectAreaLight
        width={0.34}
        height={0.34}
        intensity={50}
        color="#ffcc88"
      />
    </group>
  );
}

function ChairFillLight() {
  return (
    <rectAreaLight
      position={[-0.9, 1.9, 0.6]}
      rotation={[
        THREE.MathUtils.degToRad(-60),
        THREE.MathUtils.degToRad(-26),
        THREE.MathUtils.degToRad(0)
      ]}
      width={0.45}
      height={0.45}
      intensity={35}
      color="#6fb7ff"
    />
  );
}

export default function Lighting() {
  return (
    <>
      <ambientLight intensity={0.2} />

      <WindowLight />
      <MonitorLights />
      <LampLight />
      <BedLamp1 />
      <BedLamp2 />
      <BedLampUpperLights />
      <ShelfLights />
      <DeskInvisibleLight />
      <ChairFillLight />
    </>
  );
}