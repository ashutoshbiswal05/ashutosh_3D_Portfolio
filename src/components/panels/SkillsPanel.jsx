import { PANEL_DATA } from "../../data/panelData";

export default function SkillsPanel({onClose}) {
  const data = PANEL_DATA.skills;

  return (
    <>
      {/* TOP BAR */}

      <div
        style={{
            height: "55px",

            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",

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
            overflowY: "auto",
            padding: "25px",
        }}
        >
        {/* SYSTEM OVERVIEW */}

        <div
            style={{
            marginBottom: "25px",

            padding: "20px",

            border:
                "1px solid rgba(111,183,255,0.15)",

            background:
                "rgba(255,255,255,0.02)",
            }}
        >
            <div
            style={{
                color: "#8fd0ff",
                fontFamily: "monospace",
                marginBottom: "15px",
                letterSpacing: "2px",
            }}
            >
            SYSTEM OVERVIEW
            </div>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "180px 1fr 280px",
                    gap: "40px",
                    alignItems: "center",
                }}
                >
                {/* CPU CHIP */}

                <div
                    style={{
                    position: "relative",
                    width: "110px",
                    height: "110px",
                    margin: "0 auto",

                    border: "2px solid #39b9ff",

                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",

                    boxShadow:
                        "0 0 15px rgba(57,185,255,0.4)",
                    }}
                >
                    <div
                    style={{
                        textAlign: "center",
                        color: "#39b9ff",
                        fontFamily: "monospace",
                        lineHeight: "1.5",
                    }}
                    >
                    CPU
                    <br />
                    VCORE
                    </div>

                    {[...Array(8)].map((_, i) => (
                    <div
                        key={`top-${i}`}
                        style={{
                        position: "absolute",
                        top: "-10px",
                        left: `${10 + i * 12}px`,
                        width: "2px",
                        height: "8px",
                        background: "#39b9ff",
                        }}
                    />
                    ))}

                    {[...Array(8)].map((_, i) => (
                    <div
                        key={`bottom-${i}`}
                        style={{
                        position: "absolute",
                        bottom: "-10px",
                        left: `${10 + i * 12}px`,
                        width: "2px",
                        height: "8px",
                        background: "#39b9ff",
                        }}
                    />
                    ))}

                    {[...Array(8)].map((_, i) => (
                    <div
                        key={`left-${i}`}
                        style={{
                        position: "absolute",
                        left: "-10px",
                        top: `${10 + i * 12}px`,
                        width: "8px",
                        height: "2px",
                        background: "#39b9ff",
                        }}
                    />
                    ))}

                    {[...Array(8)].map((_, i) => (
                    <div
                        key={`right-${i}`}
                        style={{
                        position: "absolute",
                        right: "-10px",
                        top: `${10 + i * 12}px`,
                        width: "8px",
                        height: "2px",
                        background: "#39b9ff",
                        }}
                    />
                    ))}
                </div>

                {/* SYSTEM STATS */}

                <div>
                    {[
                    ["STATUS", "ONLINE", "#7df5b7"],
                    ["HEALTH", "OPTIMAL", "#7df5b7"],
                    ["TEMP", "42°C", "#ee9568"],
                    ["LOAD", "67%", "#ee9568"],
                    ["UPTIME", "2+ YEARS", "#8fd0ff"],
                    ].map(([label, value, color]) => (
                    <div
                        key={label}
                        style={{
                        display: "flex",
                        marginBottom: "14px",
                        fontFamily: "monospace",
                        }}
                    >
                        <span
                        style={{
                            width: "90px",
                            color: "#bd94f8",
                        }}
                        >
                        {label}
                        </span>

                        <span style={{ color }}>
                        {value}
                        </span>
                    </div>
                    ))}
                </div>

                {/* RAM / VRAM */}

                <div>
                    <div
                    style={{
                        color: "#8fd0ff",
                        marginBottom: "8px",
                        fontFamily: "monospace",
                    }}
                    >
                    RAM: 62%
                    </div>

                    <div
                    style={{
                        display: "flex",
                        gap: "3px",
                        marginBottom: "20px",
                    }}
                    >
                    {[...Array(20)].map((_, i) => (
                        <div
                        key={i}
                        style={{
                            width: "8px",
                            height: "10px",

                            background:
                            i < 12
                                ? "#39b9ff"
                                : "rgba(255,255,255,0.06)",

                            boxShadow:
                            i < 12
                                ? "0 0 6px rgba(57,185,255,0.8)"
                                : "none",
                        }}
                        />
                    ))}
                    </div>

                    <div
                    style={{
                        color: "#8fd0ff",
                        marginBottom: "8px",
                        fontFamily: "monospace",
                    }}
                    >
                    VRAM: 48%
                    </div>

                    <div
                    style={{
                        display: "flex",
                        gap: "3px",
                    }}
                    >
                    {[...Array(20)].map((_, i) => (
                        <div
                        key={i}
                        style={{
                            width: "8px",
                            height: "10px",

                            background:
                            i < 9
                                ? "#39b9ff"
                                : "rgba(255,255,255,0.06)",

                            boxShadow:
                            i < 9
                                ? "0 0 6px rgba(57,185,255,0.8)"
                                : "none",
                        }}
                        />
                    ))}
                    </div>
                </div>
                </div>

        {/* CATEGORIES */}

        {data.categories.map((category) => (
            <div
                key={category.title}
                style={{
                    marginBottom: "25px",

                    padding: "15px",

                    border:
                    "1px solid rgba(57,185,255,0.15)",

                    background:
                    "rgba(255,255,255,0.01)",
                }}
            >
            <div
                style={{
                color: "#c68cff",

                fontFamily: "monospace",

                letterSpacing: "2px",

                marginBottom: "15px",

                fontSize: "15px",
                }}
            >
                {category.title}
            </div>

            {category.modules.map((module) => (
                <div
                key={module.name}
                style={{
                    marginBottom: "6px",

                    padding: "8px 0",
                    borderBottom: "1px solid rgba(57,185,255,0.08)",
                }}
                >
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns:
                        "180px 220px 60px 100px 1fr",

                        alignItems: "center",

                        gap: "15px",
                    }}
                    >
                    {/* NAME */}

                    <div
                        style={{
                        color: "#39b9ff",
                        fontFamily: "monospace",
                        }}
                    >
                        {module.name}
                    </div>

                    {/* BAR */}

                    <div
                        style={{
                        display: "flex",
                        gap: "3px",
                        }}
                    >
                        {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            style={{
                            width: "8px",
                            height: "12px",

                            background:
                                i < module.level / 5
                                ? "#39b9ff"
                                : "rgba(255,255,255,0.06)",

                            boxShadow:
                                i < module.level / 5
                                ? "0 0 6px #39b9ff"
                                : "none",
                            }}
                        />
                        ))}
                    </div>

                    {/* PERCENT */}

                    <div
                        style={{
                        color: "#8fd0ff",
                        fontFamily: "monospace",
                        }}
                    >
                        {module.level}%
                    </div>

                    {/* STATUS */}

                    <div
                        style={{
                        color:
                            module.status === "LEARNING"
                            ? "#ffcc66"
                            : module.status === "ACTIVE"
                            ? "#39b9ff"
                            : "#7df5b7",

                        fontFamily: "monospace",
                        }}
                    >
                        {module.status}
                    </div>

                    {/* DESCRIPTION */}

                    <div
                        style={{
                        color: "#cfd8ff",
                        opacity: 0.7,
                        fontSize: "11px",
                        lineHeight: "1.4",
                        }}
                    >
                        {module.description}
                    </div>
                    </div>
                </div>
            ))}
            </div>
        ))}
        </div>

        {/* EXECUTION LOG */}

        <div
            style={{
            marginTop: "20px",

            padding: "18px",

            border:
                "1px solid rgba(111,183,255,0.15)",

            background:
                "rgba(255,255,255,0.02)",

            fontFamily: "monospace",
            }}
        >
            <div
            style={{
                color: "#c68cff",

                marginBottom: "12px",

                letterSpacing: "2px",
            }}
            >
            EXECUTION LOG
            </div>

            <div style={{ color: "#7df5b7" }}>
            [22:41:02] JAVA_CORE loaded
            </div>

            <div style={{ color: "#7df5b7" }}>
            [22:41:03] C_RUNTIME loaded
            </div>

            <div style={{ color: "#7df5b7" }}>
            [22:41:04] PYTHON_ENGINE loaded
            </div>

            <div style={{ color: "#7df5b7" }}>
            [22:41:05] REACT_FRAMEWORK loaded
            </div>

            <div style={{ color: "#7df5b7" }}>
            [22:41:06] ALL MODULES ONLINE
            </div>

            <div
            style={{
                marginTop: "12px",

                color: "#8fd0ff",
            }}
            >
            LAST CHECK: {new Date().toLocaleTimeString()}
            </div>
        </div>
        </div>
    </>
  );
}