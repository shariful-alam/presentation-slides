import { Cpu } from "lucide-react";

function Slide01() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white p-4">
      <div className="relative w-full max-w-[1920px] overflow-hidden bg-white" style={{ aspectRatio: "1920/1080" }}>
        {/* Background gradient */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #EEF2FF 0%, #FAF5FF 100%)" }} />

        {/* Decorative ellipse bottom-right */}
        <div className="absolute" style={{ left: "72.92%", top: "46.30%", width: "31.25%", height: "55.56%", borderRadius: "50%", background: "#7C3AED08" }} />

        {/* Label chip */}
        <div className="absolute flex items-center justify-center rounded-full border bg-[#EEF2FF]" style={{ left: "6.25%", top: "11.11%", width: "19.79%", height: "5.93%", borderColor: "#C7D2FE", fontFamily: "Inter, sans-serif" }}>
          <span className="font-medium text-[#6366F1]" style={{ fontSize: "1.667vw" }}>Design Systems × AI</span>
        </div>

        {/* Headline */}
        <h1 className="absolute whitespace-pre-line font-bold text-[#1E1B4B]" style={{ left: "6.25%", top: "14.81%", width: "39.58%", fontSize: "5vw", letterSpacing: "-0.104vw", lineHeight: 1.1, fontFamily: "Inter, sans-serif" }}>
          {"Meet your new\ndesign teammate."}
        </h1>

        {/* Accent bar */}
        <div className="absolute bg-[#7C3AED]" style={{ left: "6.25%", top: "45.37%", width: "4.17%", height: "0.37%" }} />

        {/* Body text */}
        <p className="absolute font-normal text-[#6B7280]" style={{ left: "6.25%", top: "47.78%", width: "35.42%", fontSize: "2.083vw", lineHeight: 1.4, fontFamily: "Inter, sans-serif" }}>
          An AI-powered agent that designs, iterates, and delivers — autonomously.
        </p>

        {/* Big circle - radial gradient */}
        <div className="absolute rounded-full" style={{ left: "56.25%", top: "18.52%", width: "31.25%", height: "55.56%", background: "radial-gradient(circle, #7C3AED20 0%, #7C3AED00 100%)" }} />

        {/* Dashed circle */}
        <div className="absolute rounded-full" style={{ left: "57.29%", top: "23.15%", width: "25%", height: "44.44%", border: "1.5px solid #C4B5FD" }} />

        {/* Inner circle with shadow */}
        <div className="absolute rounded-full border-2 border-[#E0E7FF] bg-white" style={{ left: "60.94%", top: "26.85%", width: "16.67%", height: "29.63%", boxShadow: "0 8px 24px #7C3AED18" }} />

        {/* CPU icon */}
        <div className="absolute flex items-center justify-center" style={{ left: "67.19%", top: "37.96%", width: "4.17%", height: "7.41%" }}>
          <Cpu className="h-full w-full text-[#7C3AED]" />
        </div>

        {/* Speed pill */}
        <div className="absolute flex items-center justify-center rounded-full border border-[#C4B5FD] bg-[#F5F3FF]" style={{ left: "53.65%", top: "31.48%", width: "8.33%", height: "5.19%", fontFamily: "Inter, sans-serif" }}>
          <span className="font-medium text-[#7C3AED]" style={{ fontSize: "1.458vw" }}>Speed</span>
        </div>

        {/* Precision pill */}
        <div className="absolute flex items-center justify-center rounded-full border border-[#C4B5FD] bg-[#F5F3FF]" style={{ left: "77.08%", top: "33.33%", width: "11.46%", height: "5.19%", fontFamily: "Inter, sans-serif" }}>
          <span className="font-medium text-[#7C3AED]" style={{ fontSize: "1.458vw" }}>Precision</span>
        </div>

        {/* Scale pill */}
        <div className="absolute flex items-center justify-center rounded-full border border-[#C4B5FD] bg-[#F5F3FF]" style={{ left: "65.10%", top: "53.70%", width: "9.38%", height: "5.19%", fontFamily: "Inter, sans-serif" }}>
          <span className="font-medium text-[#7C3AED]" style={{ fontSize: "1.458vw" }}>Scale</span>
        </div>

        {/* Slide number */}
        <p className="absolute font-normal text-[#C4B5FD]" style={{ left: "92.71%", top: "94.44%", fontSize: "1.458vw", fontFamily: "Inter, sans-serif" }}>01</p>
      </div>
    </div>
  );
}

export default Slide01;
