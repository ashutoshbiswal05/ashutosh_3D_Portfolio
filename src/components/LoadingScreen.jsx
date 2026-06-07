import { useEffect, useState } from "react";

const loadingSteps = [
  "Initializing Profile...",
  "Loading Workspace...",
  "Scanning Interactive Nodes...",
  "Connecting Navigation Systems...",
  "Rendering Environment...",
  "Boot Sequence Complete.",
];

export default function LoadingScreen({
  onComplete,
}) {
  const [progress, setProgress] =
    useState(0);

  const [step, setStep] =
    useState(loadingSteps[0]);

  useEffect(() => {
    let current = 0;

    const interval =
      setInterval(() => {
        current += 20;

        setProgress(current);

        setStep(
          loadingSteps[
            Math.min(
              Math.floor(current / 20),
              loadingSteps.length - 1
            )
          ]
        );

        if (current >= 100) {
          clearInterval(interval);

          setTimeout(() => {
            onComplete();
          }, 600);
        }
      }, 450);

    return () =>
      clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,

        background:
          "linear-gradient(to bottom, #030712, #000000)",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        zIndex: 99999,

        color: "#8fd0ff",

        fontFamily: "monospace",
      }}
    >
      <div
        style={{
          width: "420px",
        }}
      >
        <div
          style={{
            fontSize: "28px",
            letterSpacing: "4px",

            marginBottom: "40px",

            textAlign: "center",
          }}
        >
          PROFILE_3D.EXE
        </div>

        <div
          style={{
            height: "10px",

            border:
              "1px solid rgba(111,183,255,.4)",

            overflow: "hidden",

            marginBottom: "18px",
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              height: "100%",

              background:
                "linear-gradient(90deg,#39b9ff,#8fd0ff)",

              transition:
                "width .4s ease",
            }}
          />
        </div>

        <div
          style={{
            textAlign: "center",

            opacity: 0.85,

            marginBottom: "10px",
          }}
        >
          {step}
        </div>

        <div
          style={{
            textAlign: "center",

            fontSize: "12px",

            opacity: 0.6,
          }}
        >
          [{progress}%]
        </div>
      </div>
    </div>
  );
}