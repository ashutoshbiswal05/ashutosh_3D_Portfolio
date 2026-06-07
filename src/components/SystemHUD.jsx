import { useEffect, useState } from "react";

const buildMessages = [
  "works on my machine",
  "coffee powered build",
  "99 little bugs in the code",
  "ship first, debug later",
  "please don't inspect console",
];

export default function SystemHUD({
  currentSection,
}) {
  const [time, setTime] =
    useState("");

  const [message] = useState(
    buildMessages[
      Math.floor(
        Math.random() *
        buildMessages.length
      )
    ]
  );

    const activeNodes = {
    home: 14,
    projects: 2,
    skills: 7,
    about: 9,
    contact: 5,
    };

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      setTime(
        now.toLocaleTimeString()
      );
    };

    updateTime();

    const interval =
      setInterval(updateTime, 1000);

    return () =>
      clearInterval(interval);
  }, []);

  return (
    <>
      {/* LEFT */}

      <div
        style={{
          position: "fixed",

          top: "25px",
          left: "70px",

          zIndex: 999,

          pointerEvents: "none",

          color: "#8fd0ff",

          fontFamily: "monospace",

          textShadow:
            "0 0 8px rgba(111,183,255,.4)",
        }}
      >
        <div
          style={{
            fontSize: "16px",
            letterSpacing: "2px",
            marginBottom: "10px",
          }}
        >
          ASHUTOSH BISWAL_3D.EXE
        </div>

        <div
          style={{
            color: "#7df5b7",
            marginBottom: "25px",
          }}
        >
          ◉ ONLINE
        </div>
        <div
          style={{
            color: "#cbd0d6",
            fontSize: "13px",
            opacity: 0.7,
          }}
        >
          MOST OBJECTS ARE INTERACTABLE 
        </div>

        <div
          style={{
            fontSize: "11px",
            opacity: 0.7,
          }}
        >
          CURRENT TARGET
        </div>

        <div
          style={{
            marginBottom: "20px",
            letterSpacing: "2px",
          }}
        >
          {currentSection.toUpperCase()}
        </div>
      </div>

      <div
        style={{
          position: "fixed",

          bottom: "50px",
          left: "70px",

          zIndex: 999,

          pointerEvents: "none",

          color: "#8fd0ff",

          fontFamily: "monospace",

          textShadow:
            "0 0 8px rgba(111,183,255,.4)",
        }}
      >
        <div
          style={{
            fontSize: "11px",
            opacity: 0.7,
          }}
        >
          OBJECTS DETECTED
        </div>

        <div
          style={{
            marginBottom: "20px",
          }}
        >
          {
            activeNodes[
              currentSection.toLowerCase()
          ] || 0
          }
        </div>

        <div
          style={{
            fontSize: "11px",
            opacity: 0.7,
          }}
        >
          LOCAL TIME
        </div>

        <div>{time}</div>

      </div>

      {/* RIGHT */}

      <div
        style={{
          position: "fixed",

          right: "25px",
          bottom: "25px",

          zIndex: 999,

          pointerEvents: "none",

          color: "#8fd0ff",

          fontFamily: "monospace",

          textAlign: "right",

          textShadow:
            "0 0 8px rgba(111,183,255,.4)",
        }}
      >
        <div>
          BUILD v1.0.0
        </div>

        <div
          style={{
            opacity: 0.7,
            fontSize: "12px",
            marginTop: "5px",
          }}
        >
          {message}
        </div>
      </div>
    </>
  );
}