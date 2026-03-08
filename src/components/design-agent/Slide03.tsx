import { Inbox, Cpu, Layers, CircleCheck } from "lucide-react";

const steps = [
  {
    num: "01", icon: Inbox,
    title: "Receive Brief",
    body: "Prompt or design spec arrives.",
    x: "3.13%",
  },
  {
    num: "02", icon: Cpu,
    title: "Analyze & Plan",
    body: "Agent parses intent and context.",
    x: "26.35%",
  },
  {
    num: "03", icon: Layers,
    title: "Generate Design",
    body: "Layouts, styles, content \u2014 built.",
    x: "49.58%",
  },
  {
    num: "04", icon: CircleCheck,
    title: "Deliver & Iterate",
    body: "Output ready. Feedback loop starts.",
    x: "72.81%",
  },
];

function Slide03() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white p-4">
      <div className="relative w-full max-w-[1920px] overflow-hidden bg-white" style={{ aspectRatio: "1920/1080" }}>
        {/* Background gradient */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #EEF2FF 0%, #FAF5FF 100%)" }} />

        {/* Deco ellipse */}
        <div className="absolute rounded-full" style={{ left: "72.92%", top: "46.30%", width: "31.25%", height: "55.56%", background: "#7C3AED08" }} />

        {/* Chip */}
        <div className="absolute flex items-center justify-center rounded-full border border-[#C4B5FD] bg-[#F5F3FF]" style={{ left: "6.25%", top: "7.41%", width: "12.5%", height: "5.93%", fontFamily: "Inter, sans-serif" }}>
          <span className="font-medium text-[#7C3AED]" style={{ fontSize: "1.667vw" }}>The Process</span>
        </div>

        {/* Headline */}
        <h2 className="absolute font-bold text-[#1E1B4B]" style={{ left: "6.25%", top: "16.48%", fontSize: "5vw", fontFamily: "Inter, sans-serif" }}>
          Four steps. Zero friction.
        </h2>

        {/* Connector line */}
        <div className="absolute" style={{ left: "9.38%", top: "55.56%", width: "81.25%", height: "2px", background: "linear-gradient(90deg, #6366F1, #7C3AED)" }} />

        {/* Step cards */}
        {steps.map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.num} className="absolute overflow-hidden rounded-[20px] border border-[#E0E7FF] bg-white" style={{ left: s.x, top: "40.74%", width: "20.83%", height: "33.33%" }}>
              {/* Step number */}
              <p className="absolute font-bold text-[#EEF2FF]" style={{ left: "6%", top: "4.44%", fontSize: "4.167vw", lineHeight: 1, fontFamily: "Inter, sans-serif" }}>{s.num}</p>

              {/* Icon badge */}
              <div className="absolute flex items-center justify-center rounded-full" style={{ left: "41%", top: "16.67%", width: "3.75vw", height: "3.75vw", background: "linear-gradient(135deg, #6366F1, #7C3AED)" }}>
                <Icon style={{ width: "1.875vw", height: "1.875vw", color: "#FFFFFF" }} />
              </div>

              {/* Title */}
              <p className="absolute font-semibold text-[#1E1B4B]" style={{ left: "6%", top: "44.44%", fontSize: "2.292vw", fontFamily: "Inter, sans-serif" }}>{s.title}</p>

              {/* Body */}
              <p className="absolute font-normal text-[#6B7280]" style={{ left: "6%", top: "60.56%", fontSize: "1.667vw", fontFamily: "Inter, sans-serif", width: "88%" }}>{s.body}</p>

              {/* Bottom dot */}
              <div className="absolute rounded-full bg-[#7C3AED]" style={{ left: "48.5%", top: "90.56%", width: "0.625vw", height: "0.625vw" }} />
            </div>
          );
        })}

        {/* Slide number */}
        <p className="absolute font-normal text-[#C4B5FD]" style={{ left: "92.71%", top: "94.44%", fontSize: "1.458vw", fontFamily: "Inter, sans-serif" }}>03</p>
      </div>
    </div>
  );
}

export default Slide03;
