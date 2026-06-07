export default function CyberNav({
  currentSection,
  navigateTo,
  items,
}) {
  return (
    <div
      style={{
        position: "absolute",
        left: "50px",
        top: "50%",
        transform: "translateY(-50%)",

        zIndex: 1000,

        display: "flex",
        flexDirection: "column",

        gap: "20px",

        padding: "30px 24px",

        background: "rgba(10,15,25,0.15)",

        backdropFilter: "blur(10px)",

        border:
          "1px solid rgba(120,180,255,0.25)",

        boxShadow:
          "0 0 20px rgba(120,180,255,0.15)",
      }}
    >
      <div
        style={{
          color: "#8fd3ff",

          fontSize: "12px",

          letterSpacing: "3px",

          marginBottom: "20px",

          opacity: 0.7,
        }}
      >
        SYSTEM
      </div>

      {items.map((item) => (
        <div
          key={item.section}
          onClick={() =>
            navigateTo(
              item.section,
              item.camera
            )
          }
          style={{
            cursor: "pointer",

            color:
              currentSection === item.section
                ? "#8fd3ff"
                : "#ffffff",

            textShadow:
              currentSection === item.section
                ? "0 0 10px #8fd3ff"
                : "none",

            transform:
              currentSection === item.section
                ? "translateX(6px)"
                : "translateX(0px)",

            transition: "all .2s ease",

            letterSpacing: "2px",

            fontSize: "16px",
          }}
        >
          ◈ {item.name}
        </div>
      ))}
    </div>
  );
}