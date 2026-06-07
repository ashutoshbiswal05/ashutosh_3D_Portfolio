import { useState } from "react";
import { PANEL_DATA } from "../../data/panelData";

export default function LearningPanel({ onClose }) {
  const data = PANEL_DATA.learning;

  const [selectedCategory, setSelectedCategory] =
    useState(data.categories[0]);

  if (!data) return null;

  return (
    <>
      {/* TOP BAR */}

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
            fontFamily: "monospace",
            letterSpacing: "2px",
          }}
        >
          {data.title}
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

            fontSize: "18px",

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
          overflow: "hidden",
        }}
      >
        {/* LEFT SIDE */}

        <div
          style={{
            width: "32%",

            padding: "20px",

            borderRight:
              "1px solid rgba(111,183,255,0.2)",

            overflowY: "auto",
          }}
        >
          {data.categories.map((category) => (
            <div
              key={category.id}
              onClick={() =>
                setSelectedCategory(category)
              }
              style={{
                cursor: "pointer",

                marginBottom: "12px",

                padding: "14px",

                border:
                  selectedCategory.id === category.id
                    ? "1px solid #6fb7ff"
                    : "1px solid rgba(111,183,255,0.15)",

                background:
                  selectedCategory.id === category.id
                    ? `
                      linear-gradient(
                        90deg,
                        rgba(255,102,255,0.08),
                        rgba(111,183,255,0.08)
                      )
                    `
                    : "transparent",

                boxShadow:
                  selectedCategory.id === category.id
                    ? "0 0 18px rgba(111,183,255,0.15)"
                    : "none",
              }}
            >
              <div
                style={{
                  color: "#8fd0ff",
                  fontSize: "15px",
                  letterSpacing: "1px",
                }}
              >
                {category.title}
              </div>

              <div
                style={{
                  marginTop: "6px",

                  color: "#7df5b7",

                  fontSize: "12px",
                }}
              >
                ◉ {category.status}
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE */}

        <div
          style={{
            width: "68%",
            padding: "25px",
            overflowY: "auto",
          }}
        >
          {/* TERMINAL LABEL */}

          <div
            style={{
              color: "#ff66ff",

              fontSize: "13px",

              letterSpacing: "2px",

              marginBottom: "10px",

              textShadow:
                "0 0 10px rgba(255,102,255,0.5)",
            }}
          >
            RESEARCH_DATABASE.EXE
          </div>

          {/* TITLE */}

          <h2
            style={{
              color: "#8fd0ff",

              marginBottom: "12px",

              letterSpacing: "2px",
            }}
          >
            {selectedCategory.title}
          </h2>

          {/* STATUS */}

          <div
            style={{
              display: "inline-flex",

              alignItems: "center",

              gap: "8px",

              padding: "7px 14px",

              marginBottom: "20px",

              border:
                "1px solid rgba(125,245,183,0.3)",

              color: "#7df5b7",

              boxShadow:
                "0 0 10px rgba(125,245,183,0.15)",
            }}
          >
            ◉ {selectedCategory.status}
          </div>

          {/* DESCRIPTION */}

          <p
            style={{
              color: "#cfd8ff",

              lineHeight: "1.8",

              marginBottom: "30px",
            }}
          >
            {selectedCategory.description}
          </p>

          {/* TOPICS */}

          <div
            style={{
              color: "#ff66ff",

              marginBottom: "15px",

              letterSpacing: "2px",
            }}
          >
            CURRENT RESEARCH TOPICS
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
            }}
          >
            {selectedCategory.topics.map(
              (topic) => (
                <div
                  key={topic}
                  style={{
                    padding: "10px 16px",

                    border:
                      "1px solid rgba(111,183,255,0.25)",

                    background:
                      "rgba(111,183,255,0.08)",

                    color: "#8fd0ff",

                    boxShadow:
                      "0 0 10px rgba(111,183,255,0.08)",
                  }}
                >
                  {topic}
                </div>
              )
            )}
          </div>

          {/* DATABASE FOOTER */}

          <div
            style={{
              marginTop: "40px",

              paddingTop: "20px",

              borderTop:
                "1px solid rgba(111,183,255,0.15)",

              color: "rgba(255,255,255,0.4)",

              fontSize: "12px",

              letterSpacing: "2px",
            }}
          >
            KNOWLEDGE ARCHIVE • ACTIVE
          </div>
        </div>
      </div>
    </>
  );
}