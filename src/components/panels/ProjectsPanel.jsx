import { useState } from "react";
import { PANEL_DATA } from "../../data/panelData";

export default function ProjectsPanel({onClose}) {
  const data = PANEL_DATA.projects;

  const [selectedProject, setSelectedProject] =
    useState(
      data.folders[0]
    );

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

            background:
              `linear-gradient(
                90deg,
                rgba(255,102,255,0.12),
                rgba(111,183,255,0.12)
              )`,
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
            overflow: "hidden",
          }}
        >
          {/* LEFT PANEL */}

          <div
            style={{
              width: "40%",
              padding: "20px",

              borderRight:
                "1px solid rgba(111,183,255,0.2)",
            }}
          >
            {data.folders?.map(
              (folder) => (
                <div
                  key={folder.name}
                  onClick={() =>
                    setSelectedProject(folder)
                  }
                  style={{
                    padding: "16px",

                    marginBottom: "12px",

                    cursor: "pointer",

                    border:
                      selectedProject?.name === folder.name
                        ? "1px solid #6fb7ff"
                        : "1px solid rgba(111,183,255,0.15)",

                    background:
                      selectedProject?.name === folder.name
                        ? `linear-gradient(
                            90deg,
                            rgba(255,102,255,0.08),
                            rgba(111,183,255,0.08)
                          )`
                        : "transparent",
                    
                    boxShadow:
                      selectedProject?.name === folder.name
                        ? "0 0 18px rgba(255,102,255,0.18)"
                        : "none",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    {/* Folder Icon */}

                    <div
                      style={{
                        position: "relative",

                        width: "42px",
                        height: "34px",

                        transform: "translateY(12px)",
                      }}
                    >
                      {/* Folder Tab */}

                      <div
                        style={{
                          position: "absolute",

                          top: "-5px",
                          left: "4px",

                          width: "14px",
                          height: "8px",

                          border:
                            "2px solid #ff66ff",

                          borderBottom: "none",

                          borderRadius: "4px 4px 0 0",

                          boxShadow:
                            "0 0 10px #ff66ff",
                        }}
                      />

                      {/* Folder Body */}

                      <div
                        style={{
                          position: "absolute",

                          inset: 0,

                          border:
                            "2px solid #6fb7ff",

                          borderRadius: "4px",

                          boxShadow:
                            "0 0 12px #6fb7ff",
                        }}
                      />
                    </div>

                    {/* Project Name */}

                    <div
                      style={{
                        color: "#c68cff",
                        fontSize: "18px",
                      }}
                    >
                      {folder.name}
                    </div>
                  </div>

                  <div
                    style={{
                      marginTop: "8px",
                      marginLeft: "68px",

                      color: "#7df5b7",

                      fontSize: "12px",
                    }}
                  >
                    ◉ {folder.status}
                  </div>
                </div>
              )
            )}
          </div>

          {/* RIGHT PANEL */}

          <div
            style={{
              width: "60%",
              padding: "25px",
            }}
          >
            <div
              style={{
                color: "#ff66ff",
                fontSize: "14px",
                textShadow: "0 0 10px #ff66ff",
                letterSpacing: "2px",
                marginBottom: "8px",
                opacity: 0.8,
              }}
            >
              PREVIEW_WINDOW.EXE
            </div>

            <div
              style={{
                height: "210px",

                border:
                  "1px solid rgba(111,183,255,0.25)",

                boxShadow:
                  "0 0 15px rgba(111,183,255,0.08)",

                overflow: "hidden",

                position: "relative",
              }}
            >

              <img
                src={selectedProject?.image}
                alt={selectedProject?.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  top: "8px",
                  left: "8px",

                  width: "20px",
                  height: "20px",

                  borderTop: "2px solid #6fb7ff",
                  borderLeft: "2px solid #6fb7ff",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  top: "8px",
                  right: "8px",

                  width: "20px",
                  height: "20px",

                  borderTop: "2px solid #6fb7ff",
                  borderRight: "2px solid #6fb7ff",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  bottom: "8px",
                  left: "8px",

                  width: "20px",
                  height: "20px",

                  borderBottom: "2px solid #6fb7ff",
                  borderLeft: "2px solid #6fb7ff",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  bottom: "8px",
                  right: "8px",

                  width: "20px",
                  height: "20px",

                  borderBottom: "2px solid #6fb7ff",
                  borderRight: "2px solid #6fb7ff",
                }}
              />

              <div
                style={{
                  position: "absolute",

                  inset: 0,

                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.5), transparent)",
                }}
              />
            </div>

            <h2
              style={{
                color: "#8fd0ff",
                marginTop: "20px",
              }}
            >
              {selectedProject?.name}
            </h2>

            <p
              style={{
                color: "#cfd8ff",
                lineHeight: "1.7",
              }}
            >
              {selectedProject?.description}
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",

                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
              {selectedProject?.tech?.map(
                (tech) => (
                  <div
                    key={tech}
                    style={{
                      padding: "6px 12px",

                      border:
                        "1px solid rgba(198,140,255,0.25)",

                      background:
                        "rgba(198,140,255,0.08)",

                      color: "#8fd0ff",

                      fontSize: "13px",

                      boxShadow:
                        "0 0 10px rgba(111,183,255,0.08)",
                    }}
                  >
                    {tech}
                  </div>
                )
              )}
            </div>

            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",

                padding: "7px 14px",

                border: "1px solid #7df5b7",

                color: "#7df5b7",

                boxShadow:
                  "0 0 10px rgba(125,245,183,0.2)",
              }}
            >
              ◉ COMPLETE
            </div>
          </div>
        </div>
    </>
  );
}