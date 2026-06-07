import { useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

import { INTERACTIVE_OBJECTS } from "../data/interactiveObjects";
import { CAMERA_PROJECTS, CAMERA_SKILLS, CAMERA_ABOUT, CAMERA_CONTACT, } from "../data/cameraPresets";

function getInteractiveObject(object) {
  let current = object;

  while (current) {
    if (
      INTERACTIVE_OBJECTS[current.name]
    ) {
      return current.name;
    }

    current = current.parent;
  }

  return null;
}

function getInteractiveMesh(object) {
  let current = object;

  while (current) {
    if (
      INTERACTIVE_OBJECTS[current.name]
    ) {
      return current;
    }

    current = current.parent;
  }

  return null;
}

export default function Room({ setActivePanel, setHoveredObject, setCurrentSection, setCurrentView, }) {
  const { scene } = useGLTF("/models/room.glb");

  useEffect(() => {
    scene.traverse((child) => {
      {/*if (
        INTERACTIVE_OBJECTS[child.name]
      ) {
        const pos = new THREE.Vector3();

        child.getWorldPosition(pos);

        console.log(
          child.name,
          pos
        );
      }*/}

      if (!child.isMesh) return;

      const mat = child.material;

      if (!mat || !mat.map) return;

      // Sekiro monitor
      if (
        mat.name === "Sekiro 3" ||
        mat.name === "Sekiro 4"
      ) {
        mat.map.center.set(0.5, 0.5);
        mat.map.rotation = Math.PI / 2;
        mat.map.needsUpdate = true;
      }

      // Blender monitor
      if (
        mat.name === "Blender 3" ||
        mat.name === "Blender 4"
      ) {
        mat.map.center.set(0.5, 0.5);
        mat.map.rotation = Math.PI / 2;
        mat.map.needsUpdate = true;
      }

      if (
        mat.name === "Sekiro 3" ||
        mat.name === "Sekiro 4" ||
        mat.name === "Blender 3" ||
        mat.name === "Blender 4"
      ) {
        mat.map.wrapS = THREE.RepeatWrapping;
        mat.map.repeat.x = -1;
        mat.map.offset.x = 1;
      }
    });
  }, [scene]);

  const PANEL_TO_CAMERA = {
    projects: CAMERA_PROJECTS,

    skills: CAMERA_SKILLS,

    timeline: CAMERA_ABOUT,
    futuregoals: CAMERA_ABOUT,

    learning: CAMERA_CONTACT,

    contact: CAMERA_CONTACT,
  };

  const PANEL_TO_SECTION = {
    projects: "projects",

    skills: "skills",

    timeline: "about",
    futuregoals: "about",

    learning: "contact",

    contact: "contact",
  };

  const handleClick = (e) => {
    e.stopPropagation();

    const interactiveName =
      getInteractiveObject(e.object);

    const panel =
        INTERACTIVE_OBJECTS[
            interactiveName
        ]?.panel;

    if (panel) {

      const targetSection =
        PANEL_TO_SECTION[panel];

      const targetCamera =
        PANEL_TO_CAMERA[panel];

      if (targetSection)
        setCurrentSection(targetSection);

      if (targetCamera)
        setCurrentView(targetCamera);

      setTimeout(() => {
        setActivePanel(panel);
      }, 500);
    }
  };

  return (
      <primitive
        object={scene}
        scale={1}
        position={[0, 0, 0]}
        onClick={handleClick}
        onPointerMove={(e) => {
          const hit = e.intersections.find(
            (intersection) =>
              getInteractiveObject(intersection.object)
          );

          if (hit) {
            document.body.style.cursor = "pointer";

            setHoveredObject(
              getInteractiveObject(hit.object)
            );
          } else {
            document.body.style.cursor = "default";

            setHoveredObject(null);
          }
        }}
        onPointerOut={() => {
          document.body.style.cursor = "default";
          setHoveredObject(null);
        }}
      />
  );
}