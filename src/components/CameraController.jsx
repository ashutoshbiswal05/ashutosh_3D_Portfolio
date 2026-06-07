import { useThree, useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function CameraController({
  controlsRef,
  preset,
}) {
  const { camera } = useThree();

  const targetPosition = useRef(
    new THREE.Vector3(...preset.position)
  );

  const targetLookAt = useRef(
    new THREE.Vector3(...preset.target)
  );

  useEffect(() => {
    targetPosition.current.set(
      ...preset.position
    );

    targetLookAt.current.set(
      ...preset.target
    );

    console.log("Preset changed");
    console.log("Camera:", preset.position);
    console.log("Target:", preset.target);
  }, [preset]);

  useFrame(() => {
    camera.position.lerp(
      targetPosition.current,
      0.08
    );

    if (controlsRef.current) {
      controlsRef.current.target.lerp(
        targetLookAt.current,
        0.08
      );
    }
  });

  return null;
}