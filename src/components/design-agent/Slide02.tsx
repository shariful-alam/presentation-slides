import { Timer, Users, Repeat, TriangleAlert } from "lucide-react";

const cards = [
  {
    icon: Timer, iconColor: "#EF4444",
    title: "Slow Iteration",
    body: "Rounds of feedback take days or weeks.",
    x: "6.25%", y: "40.74%",
  },
  {
    icon: Users, iconColor: "#F59E0B",
    title: "Handoff Chaos",
    body: "Designer \u2194 Dev lost in translation.",
    x: "51.04%", y: "40.74%",
  },
  {
    icon: Repeat, iconColor: "#8B5CF6",
    title: "Repetitive Work",
    body: "Same components rebuilt from scratch.",
    x: "6.25%", y: "64.81%",
  },
  {
    icon: TriangleAlert, iconColor: "#6366F1",
    title: "Inconsistency",
    body: "Brand drifts across teams and outputs.",
    x: "51.04%", y: "64.81%",
  },
];

function Slide02() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white p-4">
      <div className="relative w-full max-w-[1920px] overflow-hidden bg-white" style={{ aspectRatio: "1920/1080" }}>
        {/* Background gradient */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #EEF2FF 0%, #FAF5FF 100%)" }} />

        {/* Deco ellipses */}
        <div className="absolute rounded-full" style={{ left: "77.08%", top: "-7.41%", width: "20.83%", height: "37.04%", background: "#6366F115" }} />
        <div className="absolute rounded-full" style={{ left: "-4.17%", top: "70.37%", width: "15.63%", height: "27.78%", background: "#7C3AED10" }} />

        {/* Red chip */}
        <div className="absolute flex items-center justify-center rounded-full border border-[#FECACA] bg-[#FEF2F2]" style={{ left: "6.25%", top: "7.41%", width: "12.5%", height: "5.93%", fontFamily: "Inter, sans-serif" }}>
          <span className="font-medium text-[#EF4444]" style={{ fontSize: "1.667vw" }}>The Problem</span>
        </div>

        {/* Headline */}
        <h2 className="absolute whitespace-pre-line font-bold text-[#1E1B4B]" style={{ left: "6.25%", top: "16.48%", width: "72.92%", fontSize: "4.792vw", lineHeight: 1.1, fontFamily: "Inter, sans-serif" }}>
          {"Traditional workflows\nare holding you back."}
        </h2>

        {/* Problem cards */}
        {cards.map((c) => {
          const Icon = c.icon;
          return (
            <div key={c.title} className="absolute overflow-hidden rounded-[20px] border border-[#E0E7FF] bg-white" style={{ left: c.x, top: c.y, width: "42.71%", height: "22.22%" }}>
              <Icon style={{ position: "absolute", left: "4.88%", top: "16.67%", width: "2.5vw", height: "2.5vw", color: c.iconColor }} />
              <p className="absolute font-semibold text-[#1E1B4B]" style={{ left: "4.88%", top: "43.33%", fontSize: "2.292vw", fontFamily: "Inter, sans-serif" }}>{c.title}</p>
              <p className="absolute font-normal text-[#6B7280]" style={{ left: "4.88%", top: "67.50%", fontSize: "1.667vw", fontFamily: "Inter, sans-serif", width: "90.24%" }}>{c.body}</p>
            </div>
          );
        })}

        {/* Slide number */}
        <p className="absolute font-normal text-[#C4B5FD]" style={{ left: "92.71%", top: "94.44%", fontSize: "1.458vw", fontFamily: "Inter, sans-serif" }}>02</p>
      </div>
    </div>
  );
}

export default Slide02;
