export default function Gear({
  size = 120,
  teeth = 16,
  color = "#b88a44",
  speed = 60,
  reverse = false,
}) {
  const toothCount = Array.from(
    { length: teeth },
    (_, i) => i
  );

  return (
    <div
      className={
        reverse
          ? "gear-spin-reverse"
          : "gear-spin"
      }
      style={{
        width: size,
        height: size,
        position: "relative",
        animationDuration: `${speed}s`,
      }}
    >
      {/* TEETH */}

      {toothCount.map((i) => (
        <div
          key={i}
          style={{
            position: "absolute",

            width: size * 0.12,
            height: size * 0.12,

            background: color,

            zIndex: 3,

            left: "50%",
            top: "-5%",

            transform: `
              translateX(-50%)
              rotate(${(360 / teeth) * i}deg)
            `,

            transformOrigin: `
              50%
              ${size/1.8}px
            `,
          }}
        />
      ))}

      {/* OUTER RING */}

      <div
        style={{
          position: "absolute",

          inset: 0,

          zIndex: 2,

          borderRadius: "50%",

          border: `${size * 0.08}px solid ${color}`,

          boxSizing: "border-box",

          background: "#f4f0e8",
        }}
      />

      {/* INNER HUB */}

      {/* HUB */}

      <div
        style={{
          position: "absolute",

          width: size * 0.35,
          height: size * 0.35,

          borderRadius: "50%",

          border: `${size * 0.05}px solid ${color}`,

          background: "#f4f0e8",

          boxShadow:
            "0 0 8px rgba(0,0,0,.08) inset",

          top: "50%",
          left: "50%",

          transform:
            "translate(-50%, -50%)",

          zIndex: 5,
        }}
      >
        {/* AXLE */}

        <div
          style={{
            position: "absolute",

            width: size * 0.16,
            height: size * 0.16,

            borderRadius: "50%",

            background: color,

            top: "50%",
            left: "50%",

            transform:
              "translate(-50%, -50%)",
          }}
        />
      </div>
    </div>
  );
}