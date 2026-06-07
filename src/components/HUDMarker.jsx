import { Html } from "@react-three/drei";

export default function HUDMarker({
  position,
  label,
  onClick,
  isActive,
  isClicked,
}) {
  return (
    <Html
      position={position}
      center
      distanceFactor={2}
    >
      <div
        onClick={onClick}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "2px",

          cursor: "pointer",
          userSelect: "none",

          transform: isClicked
            ? "scale(1.45)"
            : isActive
            ? "scale(1.25)"
            : "scale(1)",

          transition:
            "all 0.22s ease",
        }}
      >
        {/* Cyberpunk Target */}
        <div 
          style={{
            position: "relative",
            width: "24px",
            height: "24px",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              border: "1px solid #6fb7ff",
              borderRadius: "50%",
              boxShadow: isClicked
                ? "0 0 40px #6fb7ff"
                : isActive
                ? "0 0 20px #6fb7ff"
                : "0 0 8px #6fb7ff",
            }}
          />

          <div
            style={{
              position: "absolute",
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#6fb7ff",

              top: "50%",
              left: "50%",

              transform:
                "translate(-50%, -50%)",

              boxShadow: isActive
                ? "0 0 25px #6fb7ff"
                : "0 0 8px #6fb7ff",

              transform: isActive
                ? "translate(-50%, -50%) scale(1.4)"
                : "translate(-50%, -50%) scale(0)",

              transition: "width .6s cubic-bezier(.22,1,.36,1)",
            }}
          />
        </div>

        {/* Connector Line */}
        <div
          style={{
            width: isActive
              ? "14px"
              : "0px",

            height: "1px",

            background: "#6fb7ff",

            boxShadow:
              "0 0 6px #6fb7ff",

            transition:
              "width .4s ease",
          }}
        />

        {/* Label */}
        <div
          style={{
            position: "relative",

            padding: isActive
              ? "5px 14px"
              : "5px 0px",

            maxWidth: isActive
              ? "180px"
              : "0px",

            overflow: "hidden",

            whiteSpace: "nowrap",

            opacity: isActive
              ? 1
              : 0,

            color: "#8fd0ff",

            transition:
              "all .7s cubic-bezier(.22,1,.36,1) .2s",

            border:
              "1px solid #6fb7ff",

            background:
              "rgba(10,20,40,0.55)",

            backdropFilter:
              "blur(8px)",

            fontFamily:
              "monospace",

            letterSpacing:
              "2px",

            textTransform:
              "uppercase",

            boxShadow: isActive
              ? "0 0 30px #6fb7ff"
              : "0 0 12px rgba(111,183,255,0.4)",
          }}
        >
          <span
            style={{
              transition:
                "opacity .5s ease .45s",

              opacity:
                isActive ? 1 : 0,
            }}
          >
            {label}
          </span>

          {/* Top Right Corner */}
          <div
            style={{
              position: "absolute",
              top: "-1px",
              right: "-1px",

              width: "10px",
              height: "10px",

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

              width: "10px",
              height: "10px",

              borderBottom:
                "2px solid #6fb7ff",

              borderLeft:
                "2px solid #6fb7ff",
            }}
          />
        </div>
      </div>
    </Html>
  );
}