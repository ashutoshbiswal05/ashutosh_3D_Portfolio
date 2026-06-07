import { useState } from "react";
import Gear from "../Gear";
import { PANEL_DATA } from "../../data/panelData";

export default function TimelinePanel({ onClose }) {
  const data = PANEL_DATA.timeline;

  const [selectedYear, setSelectedYear] =
    useState("2026");

  const selectedMilestone =
    data.modules.find(
    (item) => item.year === selectedYear
  );

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
            "1px solid rgba(180,140,80,0.3)",

          background: `
            linear-gradient(
              90deg,
              rgba(184,138,68,0.15),
              rgba(150,150,150,0.08)
            )
          `,
        }}
      >
        <div>
          <div
            style={{
              color: "#b88a44",
              fontFamily: "serif",
              fontSize: "22px",
              letterSpacing: "2px",
            }}
          >
            CHRONO TIMELINE ENGINE
          </div>

          <div
            style={{
              color: "#8a8174",
              fontSize: "11px",
              letterSpacing: "1px",
            }}
          >
            Evolution Timeline
          </div>
        </div>

        <button
          onClick={onClose}
          className="cyber-close"
          style={{
            width: "32px",
            height: "32px",

            border:
              "1px solid rgba(184,138,68,0.4)",

            background:
              "rgba(184,138,68,0.08)",

            color: "#b88a44",

            cursor: "pointer",

            fontSize: "18px",

            transition: "all .2s ease",
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
          overflow: "hidden",

          background: "#f4f0e8",
        }}
      >
        {/* LEFT SIDE */}

        <div
          style={{
            width: "65%",

            overflowY: "auto",

            padding: "25px",

            borderRight:
              "1px solid rgba(184,138,68,0.2)",
          }}
        >
          {[...data.modules].reverse().map((item) => (
            <div
                key={item.year}
                onClick={() =>
                    setSelectedYear(item.year)
                }
                style={{
                    cursor: "pointer",

                    marginBottom: "30px",

                    padding: "16px",

                    borderLeft:
                    selectedYear === item.year
                        ? "4px solid #b88a44"
                        : "4px solid transparent",

                    background:
                    selectedYear === item.year
                        ? "rgba(184,138,68,0.08)"
                        : "transparent",

                    transition: "all .2s ease",

                    borderBottom:
                    "1px solid rgba(184,138,68,0.15)",
                }}
            >
              {/* YEAR */}

              <div
                style={{
                  color: "#b88a44",

                  fontSize: "28px",

                  fontWeight: "bold",

                  marginBottom: "6px",
                }}
              >
                {item.year}
              </div>

              {/* TITLE */}

              <div
                style={{
                  color: "#3f3424",

                  fontSize: "18px",

                  fontWeight: "600",

                  marginBottom: "8px",
                }}
              >
                {item.title}
              </div>

              {/* DESCRIPTION */}

              <div
                style={{
                  color: "#6d6253",

                  lineHeight: "1.7",

                  marginBottom: "14px",
                }}
              >
                {item.description}
              </div>

              {/* PROGRESS BAR */}

              <div
                style={{
                  height: "8px",

                  background:
                    "rgba(184,138,68,0.15)",

                  borderRadius: "20px",

                  overflow: "hidden",

                  marginBottom: "10px",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",

                    background:
                      "linear-gradient(90deg,#b88a44,#d4af37)",
                  }}
                />
              </div>

              {/* STATUS */}

              <div
            style={{
                fontSize: "13px",
                letterSpacing: "1px",

                color:
                item.year === "2026"
                    ? "#3c8a4d"
                    : "#8c6d2e",
            }}
            >
            {
                item.year === "2026"
                ? "◉ IN PROGRESS"
                : "✓ ARCHIVED"
            }
            </div>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE */}

        <div
          style={{
            width: "35%",

            padding: "25px",

            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {/* GEAR AREA */}

          <div
            style={{
              flex: 1,

              border:
                "1px solid rgba(184,138,68,0.2)",

              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* BIG GEAR */}

            {selectedYear >= "2024" && (
            <div
                style={{
                position: "absolute",
                top: "70px",
                left: "140px",
                }}
            >
                <Gear
                size={110}
                teeth={16}
                color="#b88a44"
                speed={80}
                />
            </div>
            )}

            {/* SMALL GEAR */}

            {selectedYear >= "2022" && (
            <div
                style={{
                position: "absolute",
                top: "25px",
                left: "87px",
                }}
            >
                <Gear
                size={70}
                teeth={12}
                color="#9a9a9a"
                speed={60}
                reverse
                />
            </div>
            )}

            {/* MINI GEAR */}

            {selectedYear >= "2005" && (
            <div
                style={{
                position: "absolute",
                top: "95px",
                left: "80px",
                }}
            >
                <Gear
                size={45}
                teeth={8}
                color="#b88a44"
                speed={40}
                />
            </div>
            )}

          </div>

          {/* STATUS BOX */}

          <div
            style={{
              padding: "18px",

              border:
                "1px solid rgba(184,138,68,0.2)",

              color: "#4b3c28",
            }}
          >
            <div
              style={{
                color: "#8c6d2e",

                fontSize: "18px",

                marginBottom: "15px",
              }}
            >
              GEARBOX STATUS
            </div>

            TOTAL GEARS :
            {
            selectedYear <= "2021"
                ? 1
                : selectedYear <= "2023"
                ? 2
                : 3
            }

            <br />

            TEETH COUNT :
            {
            selectedYear === "2005"
                ? 6
                : selectedYear === "2021"
                ? 12
                : selectedYear === "2022"
                ? 18
                : selectedYear === "2023"
                ? 24
                : selectedYear === "2024"
                ? 30
                : selectedYear === "2025"
                ? 36
                : 42
            }

            <br />

            COMPLEXITY :

            {
            selectedYear === "2005"
                ? "LOW"
                : selectedYear <= "2022"
                ? "LOW-MEDIUM"
                : selectedYear <= "2024"
                ? "MEDIUM"
                : "MEDIUM-HIGH"
            }

            <div
              style={{
                marginTop: "15px",
                color: "#3c8a4d",
              }}
            >
              EVOLUTION STATUS : ACTIVE
            </div>

            <div
              style={{
                marginTop: "20px",

                fontStyle: "italic",

                color: "#6d6253",
              }}
            >
              {selectedMilestone.description}
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}