import { MessageSquare, Cpu, Layers, Eye, CircleCheck, ChevronRight } from "lucide-react";

const steps = [
  {
    num: "01", numColor: "#EEF2FF",
    icon: MessageSquare, iconColor: "#6366F1", iconBg: "#EEF2FF",
    title: "Write\nthe Brief",
    body: "Plain-language\ndesign prompt.",
    titleColor: "#1E1B4B", bodyColor: "#6B7280",
    dotColor: "#6366F1", dotShadow: "#6366F140",
    bg: "#FFFFFF", border: "#E0E7FF",
    x: "3.13%", w: "15.63%",
  },
  {
    num: "02", numColor: "#F5F3FF",
    icon: Cpu, iconColor: "#7C3AED", iconBg: "#F5F3FF",
    title: "Agent\nParses",
    body: "Intent, context\nand constraints.",
    titleColor: "#1E1B4B", bodyColor: "#6B7280",
    dotColor: "#7C3AED", dotShadow: "#7C3AED40",
    bg: "#FFFFFF", border: "#E0E7FF",
    x: "21.88%", w: "15.63%",
  },
  {
    num: "03", numColor: "#FFFFFF30",
    icon: Layers, iconColor: "#FFFFFF", iconBg: "#FFFFFF20",
    title: "Design\nGenerated",
    body: "Layouts, colors,\ntypography built.",
    titleColor: "#FFFFFF", bodyColor: "#FFFFFFAA",
    dotColor: "#FFFFFF", dotShadow: "none",
    bg: "linear-gradient(135deg, #7C3AED, #6366F1)", border: "transparent",
    x: "40.63%", w: "15.63%",
    isGradient: true,
  },
  {
    num: "04", numColor: "#F5F3FF",
    icon: Eye, iconColor: "#F59E0B", iconBg: "#FFF7ED",
    title: "Review\n& Refine",
    body: "Human checks,\nagent adjusts.",
    titleColor: "#1E1B4B", bodyColor: "#6B7280",
    dotColor: "#7C3AED", dotShadow: "#7C3AED40",
    bg: "#FFFFFF", border: "#E0E7FF",
    x: "59.38%", w: "15.63%",
  },
  {
    num: "05", numColor: "#F0FDF4",
    icon: CircleCheck, iconColor: "#22C55E", iconBg: "#F0FDF4",
    title: "Ship &\nDeliver",
    body: "Production-ready\nassets exported.",
    titleColor: "#1E1B4B", bodyColor: "#6B7280",
    dotColor: "#22C55E", dotShadow: "#22C55E40",
    bg: "#FFFFFF", border: "#E0E7FF",
    x: "78.13%", w: "18.75%",
  },
];

const arrows = [
  { x: "19.38%" },
  { x: "38.13%" },
  { x: "56.88%" },
  { x: "75.63%" },
];

function Slide05() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white p-4">
      <div className="relative w-full max-w-[1920px] overflow-hidden bg-white" style={{ aspectRatio: "1920/1080" }}>
        {/* Background gradient */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #EEF2FF 0%, #FAF5FF 100%)" }} />

        {/* Deco ellipses */}
        <div className="absolute rounded-full" style={{ left: "72.92%", top: "46.30%", width: "36.46%", height: "64.81%", background: "#7C3AED06", filter: "blur(100px)" }} />
        <div className="absolute rounded-full" style={{ left: "-4.17%", top: "-7.41%", width: "20.83%", height: "37.04%", background: "#6366F110", filter: "blur(60px)" }} />

        {/* Chip */}
        <div className="absolute flex items-center justify-center rounded-full border border-[#C7D2FE] bg-[#EEF2FF]" style={{ left: "6.25%", top: "9.26%", width: "12.5%", height: "4.81%", fontFamily: "Inter, sans-serif" }}>
          <span className="font-medium text-[#6366F1]" style={{ fontSize: "1.563vw" }}>Live Example</span>
        </div>

        {/* Title */}
        <h2 className="absolute whitespace-pre-line font-bold text-[#1E1B4B]" style={{ left: "6.25%", top: "16.48%", width: "87.5%", fontSize: "4.167vw", letterSpacing: "-0.104vw", lineHeight: 1.1, fontFamily: "Inter, sans-serif" }}>
          {"From brief to shipped design\nin under 60 seconds."}
        </h2>

        {/* Connector line */}
        <div className="absolute" style={{ left: "9.38%", top: "58.89%", width: "81.25%", height: "2px", background: "linear-gradient(90deg, #C7D2FE 0%, #DDD6FE 50%, #C7D2FE 100%)" }} />

        {/* Step cards */}
        {steps.map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.num}
              className="absolute overflow-hidden rounded-[24px]"
              style={{
                left: s.x, top: "48.15%", width: s.w, height: "40.74%",
                background: s.isGradient ? s.bg : s.bg,
                border: s.isGradient ? "none" : `1px solid ${s.border}`,
                ...(s.isGradient ? { background: s.bg } : {}),
              }}
            >
              {/* Step number */}
              <p className="absolute font-bold" style={{ left: "9.33%", top: "6.82%", fontSize: "3.75vw", lineHeight: 1, fontFamily: "Inter, sans-serif", color: s.numColor }}>{s.num}</p>

              {/* Icon bg */}
              <div className="absolute flex items-center justify-center rounded-full" style={{ left: "9.33%", top: "26.82%", width: "4.167vw", height: "4.167vw", background: s.iconBg }}>
                <Icon style={{ width: "2.083vw", height: "2.083vw", color: s.iconColor }} />
              </div>

              {/* Title */}
              <p className="absolute whitespace-pre-line font-bold" style={{ left: "9.33%", top: "50%", fontSize: "2.083vw", lineHeight: 1.15, fontFamily: "Inter, sans-serif", color: s.titleColor }}>{s.title}</p>

              {/* Body */}
              <p className="absolute whitespace-pre-line font-normal" style={{ left: "9.33%", top: "72.27%", fontSize: "1.563vw", lineHeight: 1.4, fontFamily: "Inter, sans-serif", color: s.bodyColor }}>{s.body}</p>
            </div>
          );
        })}

        {/* Dots on connector line */}
        {steps.map((s, i) => {
          const dotLeft = parseFloat(s.x) + parseFloat(s.w) / 2 - 0.3;
          return (
            <div
              key={`dot-${i}`}
              className="absolute rounded-full"
              style={{
                left: `${dotLeft}%`,
                top: "57.78%",
                width: "1.25vw",
                height: "1.25vw",
                background: s.dotColor,
                boxShadow: s.dotShadow !== "none" ? `0 0 12px 2px ${s.dotShadow}` : undefined,
              }}
            />
          );
        })}

        {/* Chevron arrows between steps */}
        {arrows.map((a, i) => (
          <div key={`arr-${i}`} className="absolute" style={{ left: a.x, top: "57.31%", width: "1.875vw", height: "1.875vw" }}>
            <ChevronRight className="h-full w-full text-[#C4B5FD]" />
          </div>
        ))}

        {/* Slide number */}
        <p className="absolute font-normal text-[#C4B5FD]" style={{ left: "92.71%", top: "94.44%", fontSize: "1.458vw", fontFamily: "Inter, sans-serif" }}>05</p>
      </div>
    </div>
  );
}

export default Slide05;
