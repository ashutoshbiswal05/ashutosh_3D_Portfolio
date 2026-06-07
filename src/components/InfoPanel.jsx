import ProjectsPanel from "./panels/ProjectsPanel";
import SkillsPanel from "./panels/SkillsPanel";
import TimelinePanel from "./panels/TimelinePanel";
import FutureGoalsPanel from "./panels/FutureGoalsPanel";
import LearningPanel from "./panels/LearningPanel";
import HologramPanel from "./panels/HologramPanel";
import ContactPanel from "./panels/ContactPanel";

export default function InfoPanel({
  panel,
  onClose,
}) {
  const holograms = {
      games: {
        title: "[GAME_LIBRARY]",
        lines: [
          "Open worlds > competitive games.",
          "RDR2 remains undefeated.",
        ],
      },

      racing: {
        title: "[MOTORSPORT_LOG]",
        lines: [
          "Monaco looks impossible.",
          "That's why it's awesome.",
        ],
      },

      engineering: {
        title: "[MECHANICAL_ARCHIVE]",
        lines: [
          "Anything with gears",
          "instantly gets my attention.",
        ],
      },

      robotics: {
        title: "[ROBOTICS_LOG]",
        lines: [
          "Software is cool.",
          "Machines that move are cooler.",
        ],
      },

      plants: {
        title: "[PLANT_STATUS]",
      },

      guitar: {
        title: "[GUITAR_STATUS]",
        lines: [
          "Thought I'd become a guitarist.",
          "The guitar disagreed.",
        ],
      },

      music: {
        title: "[MUSIC_MODULE]",
        lines: [
          "Genre doesn't matter.",
          "If the vibe is right, it's going into the playlist.",
        ],
      },

      facts: {
        title: "[SYSTEM_FACT]",
      },
    };

    const mugFacts = [
    [
    "Professional bug creator.",
    "Part-time bug fixer."
    ],

    [
    '"One quick fix."',
    "Last words before 3 AM."
    ],

    [
    "Can spend 2 hours aligning",
    "something nobody notices."
    ],

    [
    "Built an entire 3D portfolio",
    "to avoid making a normal website."
    ],

    [
    "95% coding.",
    "5% wondering why it worked."
    ]
    ];

    const plantStatus = [
    [
      "Love having plants around.",
      "Remembering to water them is another story.",
    ],

    [
      "Used to grow plants.",
      "The plants were more consistent than me.",
    ],

    [
      "Plants survived.", 
      "Which says more about them than me."
    ],
    ]

    let hologramData = holograms[panel];

    if (panel === "facts") {
      hologramData = {
        ...hologramData,
        lines:
          mugFacts[
            Math.floor(
              Math.random() * mugFacts.length
            )
          ],
      };
    }

    if (panel === "plants") {
      hologramData = {
        ...hologramData,
        lines:
          plantStatus[
            Math.floor(
              Math.random() * plantStatus.length
            )
          ],
      };
    }

    const isHologram = holograms[panel];

    const isContact = panel === "contact";

    const mainPanelStyle = {
      width: "850px",
      height: "550px",

      background:
        "rgba(10,20,40,0.85)",

      border:
        "1px solid #6fb7ff",

      boxShadow:
        "0 0 20px rgba(111,183,255,0.3)",

      overflow: "hidden",

      display: "flex",
      flexDirection: "column",
    };

    const hologramStyle = {
      width: "400px",
      height: "220px",

      background: `
        linear-gradient(
          135deg,
          rgba(15,20,40,0.45),
          rgba(0,40,80,0.25),
          rgba(30,10,60,0.35)
        )
      `,

      backdropFilter: "blur(20px)",

      border:
        "1px solid rgba(111,183,255,0.35)",

      boxShadow: `
        0 0 20px rgba(0,150,255,0.2),
        0 0 40px rgba(255,0,255,0.08)
      `,

      overflow: "hidden",

      display: "flex",
      flexDirection: "column",
    };

    const contactStyle = {
      width: "300px",
      height: "500px",

      background: `
        linear-gradient(
          180deg,
          rgba(4,8,20,0.96),
          rgba(2,5,15,0.96)
        )
      `,

      border:
        "1px solid rgba(111,183,255,0.35)",

      boxShadow: `
        0 0 20px rgba(0,150,255,0.2),
        0 0 40px rgba(255,0,255,0.08)
      `,

      overflow: "hidden",

      display: "flex",
      flexDirection: "column",
    };

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,

        background: "rgba(0,0,0,0.45)",

        backdropFilter: "blur(12px)",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        zIndex: 9999,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={
          isHologram
            ? hologramStyle
            : isContact
            ? contactStyle
            : mainPanelStyle
        }
      >
        {panel === "projects" && (
          <ProjectsPanel
            onClose={onClose}
          />
        )}
        {panel === "skills" && (
          <SkillsPanel 
            onClose={onClose}
          />
        )}
        {panel === "timeline" && (
          <TimelinePanel 
            onClose={onClose}
          />
        )}
        {panel === "futuregoals" && (
          <FutureGoalsPanel
            onClose={onClose}
          />
        )}
        {panel === "learning" && (
          <LearningPanel
            onClose={onClose}
          />
        )}
        {isHologram && (
          <HologramPanel
            onClose={onClose}
            title={hologramData.title}
            lines={hologramData.lines}
          />
        )}
        {panel === "contact" && (
          <ContactPanel
            onClose={onClose}
          />
        )}
      </div>
    </div>
  );
}