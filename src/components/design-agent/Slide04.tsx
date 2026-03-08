import { Figma, Cpu, Zap } from "lucide-react";

const tools = [
  {
    icon: Figma, iconColor: "#6366F1", iconBg: "#EEF2FF",
    title: "Figma",
    tag: "Design Layer", tagColor: "#7C3AED", tagBg: "#F5F3FF",
    body: "Component libraries,\nauto-layout, tokens\nand design systems.",
    barGradient: "linear-gradient(90deg, #6366F1, #7C3AED)",
    x: "6.25%", w: "29.17%",
  },
  {
    icon: Cpu, iconColor: "#7C3AED", iconBg: "#F5F3FF",
    title: "AI Models",
    tag: "Intelligence Layer", tagColor: "#7C3AED", tagBg: "#F5F3FF",
    body: "LLMs, vision models,\nand code generation\nfor design reasoning.",
    barGradient: "linear-gradient(90deg, #7C3AED, #A855F7)",
    x: "37.5%", w: "29.17%",
  },
  {
    icon: Zap, iconColor: "#6366F1", iconBg: "#EEF2FF",
    title: "Automation",
    tag: "Execution Layer", tagColor: "#6366F1", tagBg: "#EEF2FF",
    body: "APIs, scripts, and\npipelines that trigger\ndesign actions.",
    barGradient: "linear-gradient(90deg, #A855F7, #6366F1)",
    x: "68.75%", w: "25%",
  },
];

function Slide04() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white p-4">
      <div className="relative w-full max-w-[1920px] overflow-hidden bg-white" style={{ aspectRatio: "1920/1080" }}>
        {/* Background gradient */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #EEF2FF 0%, #FAF5FF 100%)" }} />

        {/* Deco ellipses */}
        <div className="absolute rounded-full" style={{ left: "78.13%", top: "-9.26%", width: "31.25%", height: "55.56%", background: "#7C3AED08", filter: "blur(80px)" }} />
        <div className="absolute rounded-full" style={{ left: "-5.21%", top: "64.81%", width: "20.83%", height: "37.04%", background: "#6366F110", filter: "blur(60px)" }} />

        {/* Chip */}
        <div className="absolute flex items-center justify-center rounded-full border border-[#C4B5FD] bg-[#F5F3FF]" style={{ left: "6.25%", top: "9.26%", width: "10.42%", height: "4.81%", fontFamily: "Inter, sans-serif" }}>
          <span className="font-medium text-[#7C3AED]" style={{ fontSize: "1.563vw" }}>The Tools</span>
        </div>

        {/* Title */}
        <h2 className="absolute font-bold text-[#1E1B4B]" style={{ left: "6.25%", top: "16.48%", width: "87.5%", fontSize: "4.583vw", letterSpacing: "-0.104vw", lineHeight: 1.1, fontFamily: "Inter, sans-serif" }}>
          Powered by best-in-class tools.
        </h2>

        {/* Subtitle */}
        <p className="absolute font-normal text-[#6B7280]" style={{ left: "6.25%", top: "29.44%", width: "62.5%", fontSize: "1.979vw", fontFamily: "Inter, sans-serif" }}>
          Three layers that make autonomy possible.
        </p>

        {/* Tool cards */}
        {tools.map((t) => {
          const Icon = t.icon;
          return (
            <div key={t.title} className="absolute overflow-hidden rounded-[28px] border border-[#E0E7FF] bg-white" style={{ left: t.x, top: "40.74%", width: t.w, height: "51.85%" }}>
              {/* Gradient top bar */}
              <div className="absolute left-0 top-0 w-full rounded-t-[28px]" style={{ height: "1.07%", background: t.barGradient }} />

              {/* Icon bg */}
              <div className="absolute flex items-center justify-center rounded-full" style={{ left: "7.14%", top: "10.71%", width: "5.208vw", height: "5.208vw", background: t.iconBg }}>
                <Icon style={{ width: "2.5vw", height: "2.5vw", color: t.iconColor }} />
              </div>

              {/* Title */}
              <p className="absolute font-bold text-[#1E1B4B]" style={{ left: "7.14%", top: "34.29%", fontSize: "2.917vw", fontFamily: "Inter, sans-serif" }}>{t.title}</p>

              {/* Tag */}
              <div className="absolute flex items-center justify-center rounded-full" style={{ left: "7.14%", top: "47.86%", height: "2.292vw", paddingLeft: "1.2vw", paddingRight: "1.2vw", background: t.tagBg, fontFamily: "Inter, sans-serif" }}>
                <span className="font-medium" style={{ fontSize: "1.354vw", color: t.tagColor }}>{t.tag}</span>
              </div>

              {/* Body */}
              <p className="absolute whitespace-pre-line font-normal text-[#6B7280]" style={{ left: "7.14%", top: "60%", fontSize: "1.771vw", lineHeight: 1.5, fontFamily: "Inter, sans-serif", width: "85.71%" }}>{t.body}</p>
            </div>
          );
        })}

        {/* Slide number */}
        <p className="absolute font-normal text-[#C4B5FD]" style={{ left: "92.71%", top: "94.44%", fontSize: "1.458vw", fontFamily: "Inter, sans-serif" }}>04</p>
      </div>
    </div>
  );
}

export default Slide04;
