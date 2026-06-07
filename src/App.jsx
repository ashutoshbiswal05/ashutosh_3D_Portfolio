import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Selection } from "@react-three/postprocessing";
import { Suspense, useRef, useState, useEffect } from "react";
import * as THREE from "three";

import { Leva } from "leva";

import CameraController from "./components/CameraController";
import InfoPanel from "./components/InfoPanel";
import HUDMarker from "./components/HUDMarker";
import CyberNav from "./components/CyberNav";
import SystemHUD from "./components/SystemHUD";
import LoadingScreen from "./components/LoadingScreen";

import { CAMERA_HOME, CAMERA_PROJECTS, CAMERA_CONTACT, CAMERA_ABOUT, CAMERA_SKILLS } from "./data/cameraPresets";
import { INTERACTIVE_OBJECTS } from "./data/interactiveObjects";
import { SECTION_MARKERS } from "./data/sectionMarkers"
import { ORBIT_SETTINGS } from "./data/orbitSettings";

import Lighting from "./scene/Lighting";
import PostProcessing from "./scene/PostProcessing";
import Room from "./scene/Room";

export default function App() {
  const [loading, setLoading] =
    useState(true);

  const controlsRef = useRef();

  const [currentSection, setCurrentSection] =
    useState("home");

  const [currentView, setCurrentView] =
    useState(CAMERA_HOME);

  const [activePanel, setActivePanel] =
    useState(null);

  const [clickedMarker, setClickedMarker] =
    useState(null);

  const [markersVisible, setMarkersVisible] =
    useState(false);
      useEffect(() => {
      setMarkersVisible(false);

      const timer =
        setTimeout(() => {
          setMarkersVisible(true);
        }, 600);

      return () =>
        clearTimeout(timer);
    }, [currentSection]);

  const [hoveredObject, setHoveredObject] =
    useState(null);

  const navigateTo = (section, camera) => {
    setCurrentSection(section);
    setCurrentView(camera);
  };

  const NAV_ITEMS = [
    {
      name: "Home",
      section: "home",
      camera: CAMERA_HOME,
    },

    {
      name: "About",
      section: "about",
      camera: CAMERA_ABOUT,
    },

    {
      name: "Skills",
      section: "skills",
      camera: CAMERA_SKILLS,
    },

    {
      name: "Projects",
      section: "projects",
      camera: CAMERA_PROJECTS,
    },

    {
      name: "Contact",
      section: "contact",
      camera: CAMERA_CONTACT,
    },
  ];

  const PANEL_TO_SECTION = {
    projects: "projects",
    skills: "skills",
    timeline: "about",
    futuregoals: "about",
    learning: "contact",
    contact: "contact",
  };

  const orbit =
    ORBIT_SETTINGS[currentSection] ??
    ORBIT_SETTINGS.home;

  if (loading) {
    return (
      <LoadingScreen
        onComplete={() =>
          setLoading(false)
        }
      />
    );
  }

  return (
  <>
    {!activePanel && (
    <CyberNav
      currentSection={currentSection}
      navigateTo={navigateTo}
      items={NAV_ITEMS}
    />
    )}

    {!activePanel && (
      <SystemHUD
        currentSection={currentSection}
      />
    )}

    {
      activePanel && (
       <InfoPanel
        panel={activePanel}
        onClose={() =>
          setActivePanel(null)
        }
      />
      )
    }

    <Leva collapsed={false} />

    {
      !activePanel &&
      hoveredObject && (
        <div
          style={{
            position: "absolute",
            bottom: 30,
            left: "50%",
            transform: "translateX(-50%)",

            display: "flex",
            alignItems: "center",
            gap: "6px",

            padding: "8px 18px",

            border: "1px solid #6fb7ff",

            background:
              "rgba(10,20,40,0.65)",

            backdropFilter:
              "blur(12px)",

            color: "#8fd0ff",

            fontFamily: "monospace",

            letterSpacing: "2px",

            textTransform: "uppercase",

            boxShadow: `
              0 0 12px rgba(111,183,255,0.35),
              0 0 24px rgba(111,183,255,0.15)
            `,

            pointerEvents: "none",

            zIndex: 999,
          }}
        >
          {/* Mini HUD Circle */}
          <div
            style={{
              position: "relative",
              width: "12px",
              height: "12px",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,

                border:
                  "1px solid #6fb7ff",

                borderRadius: "50%",
              }}
            />

            <div
              style={{
                position: "absolute",

                width: "4px",
                height: "4px",

                background: "#6fb7ff",

                borderRadius: "50%",

                top: "50%",
                left: "50%",

                transform:
                  "translate(-50%, -50%)",

                boxShadow:
                  "0 0 6px #6fb7ff",
              }}
            />
          </div>

          {/* Tiny Connector */}
          <div
            style={{
              width: "7px",
              height: "1px",

              background: "#6fb7ff",
            }}
          />

          {/* Label */}
          <span>
            {
              INTERACTIVE_OBJECTS[
                hoveredObject
              ]?.label
            }
          </span>

          {/* Top Right Corner */}
          <div
            style={{
              position: "absolute",

              top: "-1px",
              right: "-1px",

              width: "8px",
              height: "8px",

              borderTop:
                "2px solid #6fb7ff",

              borderRight:
                "2px solid #6fb7ff",
            }}
          />

          {/* Bottom Left Corner */}
          <div
            style={{
              position: "absolute",

              bottom: "-1px",
              left: "-1px",

              width: "8px",
              height: "8px",

              borderBottom:
                "2px solid #6fb7ff",

              borderLeft:
                "2px solid #6fb7ff",
            }}
          />
        </div>
      )
    }

    <Canvas
      dpr={[1, 1.5]}
      style={{
        width: "100vw",
        height: "100vh",
      }}
      gl={{
        antialias: false,
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 1.0,
      }}
      camera={{
        position: CAMERA_HOME.position,
        fov: 50,
      }}
    >

      <Selection>
        <CameraController
          controlsRef={controlsRef}
          preset={currentView}
        />

        {/* --------------------- */}
        {/* CYBERPUNK LIGHTING */}
        {/* --------------------- */}

        <Lighting />

        <Suspense fallback={null}>
          <Room 
            setActivePanel={setActivePanel}
            setHoveredObject={setHoveredObject}
            setCurrentSection={setCurrentSection}
            setCurrentView={setCurrentView}
          />
        </Suspense>

        {
          !activePanel &&
          SECTION_MARKERS[currentSection]?.map(
            (marker) => (
              <HUDMarker
                key={marker.panel}
                position={marker.position}
                label={marker.label}
                isActive={markersVisible}
                isClicked={
                  clickedMarker === marker.panel
                }
                onClick={() => {
                  setClickedMarker(marker.panel);

                  setTimeout(() => {
                    setActivePanel(marker.panel);
                    setClickedMarker(null);
                  }, 300);
                }}
              />
            )
          )
        }

        <PostProcessing/>

        <OrbitControls
          ref={controlsRef}
          enableDamping
          dampingFactor={0.05}

          enablePan={false}

          minDistance={orbit.minDistance}
          maxDistance={orbit.maxDistance}

          minPolarAngle={orbit.minPolarAngle}
          maxPolarAngle={orbit.maxPolarAngle}

          minAzimuthAngle={orbit.minAzimuthAngle}
          maxAzimuthAngle={orbit.maxAzimuthAngle}

          rotateSpeed={0.3}
        />
      </Selection>
    </Canvas>
  </>
  );
}

useGLTF.preload("/models/room.glb");