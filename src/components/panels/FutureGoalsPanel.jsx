import { useState } from "react";
import { PANEL_DATA } from "../../data/panelData";

export default function FutureGoalsPanel({
  onClose,
}) {
  const data = PANEL_DATA.futuregoals;

  const [selected, setSelected] =
    useState("unknown");

  const activeModule =
    data.modules.find(
      (m) => m.id === selected
    );

  return (
    <>
      {/* HEADER */}

      <div
        style={{
          height: "45px",
          padding: "0 28px",

          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",

          borderBottom:
            "1px solid rgba(101,214,255,.25)",

          background:
            "linear-gradient(90deg, rgba(101,214,255,.08), rgba(90,100,130,.06))",
        }}
      >
        <div>
          <div
            style={{
              color: "#65d6ff",
              fontSize: "26px",
              letterSpacing: "2px",
            }}
          >
            FUTURE SYSTEMS
          </div>

          <div
            style={{
              color: "#6d86a8",
              fontSize: "13px",
            }}
          >
            Blueprint Archive
          </div>
        </div>

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

      {/* BODY */}

        <div
        style={{
            flex: 1,

            display: "flex",

            minHeight: 0,

            overflow: "hidden",

            background: "#08111f",
        }}
        >

        {/* LEFT SIDE */}    

        <div
        style={{
            width: "45%",

            display: "flex",
            flexDirection: "column",

            minHeight: 0,

            padding: "20px",

            overflowY: "auto",

            borderRight:
            "1px solid rgba(101,214,255,.15)",
        }}
        >
        {data.modules.map((module) => (
            <div
            key={module.id}
            onClick={() =>
                setSelected(module.id)
            }
            style={{
                cursor: "pointer",

                flexShrink: 0,

                marginBottom: "15px",

                padding: "15px",

                border:
                selected === module.id
                    ? "1px solid #65d6ff"
                    : "1px solid rgba(255,255,255,.08)",

                background:
                selected === module.id
                    ? "rgba(101,214,255,.06)"
                    : "transparent",

                transition: "all .2s ease",
            }}
            >
            <div
                style={{
                color: "#65d6ff",

                fontSize: "18px",

                marginBottom: "8px",
                }}
            >
                {module.title}
            </div>

            <div
                style={{
                color:
                    module.status === "???"
                    ? "#ffcc66"
                    : "#7b8da8",

                fontSize: "12px",

                marginBottom: "10px",
                }}
            >
                STATUS : {module.status}
            </div>

            <div
                style={{
                color: "#9ab0ca",

                fontSize: "13px",

                lineHeight: "1.6",
                }}
            >
                {module.description}
            </div>
            </div>
        ))}
        </div>

        {/* RIGHT SIDE */}  

        <div
        style={{
            width: "55%",
            padding: "20px",

            display: "flex",
            flexDirection: "column",

            gap: "16px",
        }}
        >
        {/* BLUEPRINT */}

        <div
            style={{
            height: "270px",

            position: "relative",

            border:
                "1px solid rgba(101,214,255,.15)",

            flexShrink: 0,
            }}
        >
            {/* vertical line */}

            <div
            style={{
                position: "absolute",

                width: "2px",
                height: "50px",

                left: "50%",
                top: "70px",

                transform: "translateX(-50%)",

                opacity: .4,

                background:
                "repeating-linear-gradient(to bottom,#65d6ff 0 8px,transparent 8px 16px)",
            }}
            />

            {/* horizontal */}

            <div
            style={{
                position: "absolute",

                width: "120px",
                height: "2px",

                left: "50%",
                top: "125px",

                transform: "translateX(-50%)",

                opacity: .4,

                background:
                "repeating-linear-gradient(to right,#65d6ff 0 8px,transparent 8px 16px)",
            }}
            />

            {/* core */}

            <div
            style={{
                position: "absolute",

                width: "80px",
                height: "80px",

                borderRadius: "50%",

                border: "2px solid #65d6ff",

                left: "50%",
                top: "47%",

                transform:
                "translate(-50%, -50%)",

                display: "flex",
                justifyContent: "center",
                alignItems: "center",

                color: "#65d6ff",

                fontSize: "42px",
                fontWeight: "bold",
            }}
            >
            ?
            </div>

            {/* nodes */}

            <div
            style={{
                position: "absolute",

                top: "25px",
                left: "50%",

                transform: "translateX(-50%)",

                color:
                selected === "unknown"
                    ? "#7df5b7"
                    : "#65d6ff",
            }}
            >
            UNKNOWN
            </div>

            <div
            style={{
                position: "absolute",

                left: "60px",
                top: "110px",

                color:
                selected === "robotics"
                    ? "#7df5b7"
                    : "#65d6ff",
            }}
            >
            ROBOTICS
            </div>

            <div
            style={{
                position: "absolute",

                right: "50px",
                top: "110px",

                color:
                selected === "ai"
                    ? "#7df5b7"
                    : "#65d6ff",
            }}
            >
            AI SYSTEMS
            </div>

            <div
            style={{
                position: "absolute",

                left: "90px",
                bottom: "45px",

                color:
                selected === "products"
                    ? "#7df5b7"
                    : "#65d6ff",
            }}
            >
            PRODUCTS
            </div>

            <div
            style={{
                position: "absolute",

                right: "45px",
                bottom: "45px",

                color:
                selected === "systems"
                    ? "#7df5b7"
                    : "#65d6ff",
            }}
            >
            SYSTEM DESIGN
            </div>
        </div>

        {/* STATUS */}

        <div
            style={{
            border:
                "1px solid rgba(101,214,255,.15)",

            padding: "12px",

            color: "#9ab0ca",

            lineHeight: "1.1",

            flexShrink: 0,
            }}
        >
            <div
            style={{
                color: "#65d6ff",

                marginBottom: "12px",
            }}
            >
            FUTURE SYSTEM STATUS
            </div>

            KNOWN PATHS : 4
            <br />

            UNKNOWN PATHS : ∞
            <br />

            CURRENT PHASE : EXPLORATION
            <br />

            DESTINATION : UNDEFINED

            <div
            style={{
                marginTop: "14px",

                color: "#7df5b7",
            }}
            >
            {activeModule.description}
            </div>

            <div
            style={{
                marginTop: "12px",

                color: "#ffcc66",

                fontSize: "12px",
            }}
            >
            BLUEPRINT INCOMPLETE
            </div>

            <div
            style={{
                color: "#6d86a8",

                fontSize: "12px",
            }}
            >
            FUTURE PATH NOT YET DETERMINED
            </div>
        </div>
        </div>
</div>
</>
);
}