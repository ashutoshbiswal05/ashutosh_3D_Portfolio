export default function HologramPanel({
  title,
  lines,
  onClose,
}) {
  return (
    <>
      <div
        style={{
          height: "50px",

          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",

          padding: "0 18px",

          borderBottom:
            "1px solid rgba(111,183,255,0.2)",

          background:
            "rgba(111,183,255,0.05)",
        }}
      >
        <span
          style={{
            color: "#8fd0ff",
            letterSpacing: "2px",
          }}
        >
          {title}
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

      <div
        style={{
          flex: 1,

          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          textAlign: "center",

          padding: "30px",

          color: "#d7e7ff",

          lineHeight: "1.8",

          fontSize: "18px",
        }}
      >
        <div>
          {lines.map((line, index) => (
            <div
              key={index}
              style={{
                marginBottom: "12px",
              }}
            >
              {line}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}