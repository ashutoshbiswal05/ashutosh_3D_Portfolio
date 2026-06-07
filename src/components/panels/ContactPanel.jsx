import { useState } from "react";

export default function ContactPanel({
  onClose,
}) {
  const [hovered, setHovered] =
    useState(null);

  const buttonStyle = (id) => ({
    width: "200px",

    padding: "16px",

    textAlign: "center",

    textDecoration: "none",

    color: "#8fd0ff",

    border:
      "1px solid rgba(111,183,255,0.3)",

    background:
      hovered === id
        ? "rgba(111,183,255,0.15)"
        : "rgba(111,183,255,0.06)",

    transform:
      hovered === id
        ? "translateY(-2px)"
        : "translateY(0)",

    boxShadow:
      hovered === id
        ? "0 0 15px rgba(111,183,255,0.2)"
        : "none",

    letterSpacing: "2px",

    transition: "all .2s ease",

    cursor: "pointer",
  });

  return (
    <>
      {/* HEADER */}

      <div
        style={{
          height: "55px",

          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",

          padding: "0 20px",

          borderBottom:
            "1px solid rgba(111,183,255,0.25)",

          background: `
            linear-gradient(
              90deg,
              rgba(255,102,255,0.12),
              rgba(111,183,255,0.12)
            )
          `,
        }}
      >
        <span
          style={{
            color: "#8fd0ff",
            letterSpacing: "2px",
            fontFamily: "monospace",
          }}
        >
          COMMUNICATION_TERMINAL
        </span>

        <button
          onClick={onClose}
          className="cyber-close"
          style={{
            width: "32px",
            height: "32px",

            border:
              "1px solid rgba(57,185,255,0.4)",

            background:
              "rgba(57,185,255,0.08)",

            color: "#8fd0ff",

            cursor: "pointer",

            fontFamily: "monospace",
            fontSize: "18px",

            transition: "all .2s ease",

            boxShadow:
              "0 0 8px rgba(57,185,255,0.15)",
          }}
        >
          ✕
        </button>
      </div>

      {/* CONTENT */}

      <div
        style={{
          flex: 1,

          display: "flex",
          flexDirection: "column",

          alignItems: "center",

          paddingTop: "70px",
        }}
      >
        {/* STATUS */}

        <div
        style={{
            textAlign: "center",

            marginBottom: "30px",
        }}
        >
        <div
            style={{
            color: "#7df5b7",

            fontSize: "12px",

            letterSpacing: "2px",

            marginBottom: "10px",
            }}
        >
            ◉ ONLINE
        </div>

        <div
            style={{
            color:
                "rgba(255,255,255,0.5)",

            fontSize: "12px",

            lineHeight: "1.6",
            }}
        >
            Need to reach me?
        </div>
        </div>

        {/* BUTTONS */}

        <div
          style={{
            display: "flex",

            flexDirection: "column",

            gap: "18px",
          }}
        >
          <a
            href="https://github.com/ashutoshbiswal05"
            target="_blank"
            rel="noreferrer"
            style={buttonStyle("github")}
            onMouseEnter={() =>
              setHovered("github")
            }
            onMouseLeave={() =>
              setHovered(null)
            }
          >
            {"> GITHUB"}
          </a>

          <a
            href="https://www.linkedin.com/in/ashutosh-biswal-2b21732b1"
            target="_blank"
            rel="noreferrer"
            style={buttonStyle("linkedin")}
            onMouseEnter={() =>
              setHovered("linkedin")
            }
            onMouseLeave={() =>
              setHovered(null)
            }
          >
            {"> LINKEDIN"}
          </a>

          <a
            href="mailto:ashutoshbiswal.ab2005@gmail.com"
            style={buttonStyle("email")}
            onMouseEnter={() =>
              setHovered("email")
            }
            onMouseLeave={() =>
              setHovered(null)
            }
          >
            {"> EMAIL"}
          </a>

          <a
            href="https://drive.google.com/file/d/1l2LvoLWBvinY6PHe6l5gv2VYIVbKiOoj/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            style={buttonStyle("resume")}
            onMouseEnter={() =>
              setHovered("resume")
            }
            onMouseLeave={() =>
              setHovered(null)
            }
          >
            {"> RESUME"}
          </a>
        </div>
      </div>
    </>
  );
}