import { Zap, RefreshCw, ShieldCheck, ArrowRight } from "lucide-react";

function Slide06() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white p-4">
      <div className="relative w-full max-w-[1920px] overflow-hidden bg-white" style={{ aspectRatio: "1920/1080" }}>
        {/* Background gradient */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #EEF2FF 0%, #FAF5FF 100%)" }} />

        {/* Deco ellipses */}
        <div className="absolute rounded-full" style={{ left: "67.71%", top: "37.04%", width: "41.67%", height: "74.07%", background: "#7C3AED06", filter: "blur(120px)" }} />
        <div className="absolute rounded-full" style={{ left: "-7.81%", top: "-9.26%", width: "26.04%", height: "46.30%", background: "#6366F10C", filter: "blur(80px)" }} />

        {/* Green chip */}
        <div className="absolute flex items-center justify-center rounded-full border border-[#86EFAC] bg-[#F0FDF4]" style={{ left: "6.25%", top: "9.26%", width: "11.46%", height: "4.81%", fontFamily: "Inter, sans-serif" }}>
          <span className="font-medium text-[#16A34A]" style={{ fontSize: "1.563vw" }}>The Results</span>
        </div>

        {/* Title */}
        <h2 className="absolute whitespace-pre-line font-bold text-[#1E1B4B]" style={{ left: "6.25%", top: "16.48%", width: "44.79%", fontSize: "4.167vw", letterSpacing: "-0.104vw", lineHeight: 1.1, fontFamily: "Inter, sans-serif" }}>
          {"Design faster.\nIterate smarter.\nShip with confidence."}
        </h2>

        {/* Accent line */}
        <div className="absolute" style={{ left: "6.25%", top: "41.85%", width: "4.17%", height: "4px", background: "linear-gradient(90deg, #6366F1, #7C3AED)", borderRadius: "2px" }} />

        {/* KPI: 10x */}
        <p className="absolute font-bold text-[#6366F1]" style={{ left: "6.25%", top: "48.15%", fontSize: "6.25vw", letterSpacing: "-0.156vw", lineHeight: 1, fontFamily: "Inter, sans-serif" }}>10×</p>
        <p className="absolute font-normal text-[#6B7280]" style={{ left: "6.25%", top: "60.37%", fontSize: "1.771vw", fontFamily: "Inter, sans-serif" }}>Faster iteration</p>

        {/* Divider 1 */}
        <div className="absolute bg-[#E0E7FF]" style={{ left: "20.31%", top: "49.07%", width: "1px", height: "14.81%" }} />

        {/* KPI: 80% */}
        <p className="absolute font-bold text-[#7C3AED]" style={{ left: "22.92%", top: "48.15%", fontSize: "6.25vw", letterSpacing: "-0.156vw", lineHeight: 1, fontFamily: "Inter, sans-serif" }}>80%</p>
        <p className="absolute font-normal text-[#6B7280]" style={{ left: "22.92%", top: "60.37%", fontSize: "1.771vw", fontFamily: "Inter, sans-serif" }}>Less manual work</p>

        {/* Divider 2 */}
        <div className="absolute bg-[#E0E7FF]" style={{ left: "38.02%", top: "49.07%", width: "1px", height: "14.81%" }} />

        {/* KPI: 3x */}
        <p className="absolute font-bold text-[#22C55E]" style={{ left: "40.63%", top: "48.15%", fontSize: "6.25vw", letterSpacing: "-0.156vw", lineHeight: 1, fontFamily: "Inter, sans-serif" }}>3×</p>
        <p className="absolute font-normal text-[#6B7280]" style={{ left: "40.63%", top: "60.37%", fontSize: "1.771vw", fontFamily: "Inter, sans-serif" }}>More consistent output</p>

        {/* Horizontal divider */}
        <div className="absolute bg-[#E0E7FF]" style={{ left: "6.25%", top: "67.59%", width: "87.5%", height: "1px" }} />

        {/* Benefit pills */}
        <div className="absolute flex items-center gap-[16px] rounded-full border border-[#E0E7FF] bg-white" style={{ left: "6.25%", top: "71.30%", height: "5.56%", paddingLeft: "1.25vw", paddingRight: "1.25vw", fontFamily: "Inter, sans-serif" }}>
          <Zap style={{ width: "1.458vw", height: "1.458vw", color: "#6366F1" }} />
          <span className="font-medium text-[#1E1B4B]" style={{ fontSize: "1.458vw" }}>Autonomous execution</span>
        </div>

        <div className="absolute flex items-center gap-[16px] rounded-full border border-[#E0E7FF] bg-white" style={{ left: "25%", top: "71.30%", height: "5.56%", paddingLeft: "1.25vw", paddingRight: "1.25vw", fontFamily: "Inter, sans-serif" }}>
          <RefreshCw style={{ width: "1.458vw", height: "1.458vw", color: "#7C3AED" }} />
          <span className="font-medium text-[#1E1B4B]" style={{ fontSize: "1.458vw" }}>Instant iteration</span>
        </div>

        <div className="absolute flex items-center gap-[16px] rounded-full border border-[#E0E7FF] bg-white" style={{ left: "42.19%", top: "71.30%", height: "5.56%", paddingLeft: "1.25vw", paddingRight: "1.25vw", fontFamily: "Inter, sans-serif" }}>
          <ShieldCheck style={{ width: "1.458vw", height: "1.458vw", color: "#22C55E" }} />
          <span className="font-medium text-[#1E1B4B]" style={{ fontSize: "1.458vw" }}>Brand consistency</span>
        </div>

        {/* Right gradient panel */}
        <div className="absolute overflow-hidden rounded-[32px]" style={{ left: "57.29%", top: "16.48%", width: "36.46%", height: "75.93%", background: "linear-gradient(135deg, #6366F1, #7C3AED)" }}>
          {/* Deco ellipse inside panel */}
          <div className="absolute rounded-full" style={{ left: "57.14%", top: "60.98%", width: "57.14%", height: "48.78%", background: "#FFFFFF08" }} />

          {/* Quote mark */}
          <p className="absolute font-bold" style={{ left: "8.57%", top: "7.32%", fontSize: "10.417vw", lineHeight: 1, fontFamily: "Inter, sans-serif", color: "#FFFFFF18" }}>"</p>

          {/* Quote text */}
          <p className="absolute whitespace-pre-line font-bold text-white" style={{ left: "8.57%", top: "21.95%", width: "82.86%", fontSize: "3.542vw", lineHeight: 1.15, fontFamily: "Inter, sans-serif" }}>
            {"The best design\nteam is one that\nnever sleeps."}
          </p>

          {/* Quote subtitle */}
          <p className="absolute font-normal" style={{ left: "8.57%", top: "62.20%", width: "82.86%", fontSize: "1.771vw", lineHeight: 1.5, fontFamily: "Inter, sans-serif", color: "#FFFFFFAA" }}>
            Design Agents make this a reality today.
          </p>

          {/* Divider inside panel */}
          <div className="absolute" style={{ left: "8.57%", top: "75.61%", width: "82.86%", height: "1px", background: "#FFFFFF30" }} />

          {/* CTA button */}
          <div className="absolute flex items-center justify-center gap-[16px] rounded-full" style={{ left: "8.57%", top: "79.02%", width: "45.71%", height: "8.29%", background: "#FFFFFF20", fontFamily: "Inter, sans-serif" }}>
            <span className="font-semibold text-white" style={{ fontSize: "1.563vw" }}>Start building today</span>
            <ArrowRight style={{ width: "1.458vw", height: "1.458vw", color: "#FFFFFF" }} />
          </div>
        </div>

        {/* Slide number */}
        <p className="absolute font-normal text-[#C4B5FD]" style={{ left: "92.71%", top: "94.44%", fontSize: "1.458vw", fontFamily: "Inter, sans-serif" }}>06</p>
      </div>
    </div>
  );
}

export default Slide06;
