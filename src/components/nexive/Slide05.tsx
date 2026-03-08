import { TrendingUp } from "lucide-react";

const kpis = [
  {
    num: "$4.2B", color: "#2ECC8A", label: "Total Portfolio Value",
    trend: { icon: true, text: "+18.3% YoY" },
  },
  {
    num: "127", color: "#5A5FE0", label: "Active Portfolio Companies",
    trend: { icon: true, text: "+24 this year" },
  },
  {
    num: "94%", color: "#E05A50", label: "Founder Satisfaction Score",
    trend: { icon: false, text: "↑ from 89%" },
  },
];

const footnotes = [
  "All figures as of Q4 2024 annual report.",
  "Portfolio data includes all active and exited investments.",
  "Satisfaction score based on annual founder survey, n=340.",
];

function Slide05() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0B0B0E] p-4">
      <div className="relative w-full max-w-[1920px] overflow-hidden bg-[#0B0B0E]" style={{ aspectRatio: "1920/1080" }}>
        {/* Grid lines */}
        {[0, 160, 420, 680, 940].map((y, i) => (
          <div key={i} className="pointer-events-none absolute h-[2px] w-[3000px] bg-white/[0.016]" style={{ top: y - 100, left: -100, transform: "rotate(45deg)", transformOrigin: "0 0" }} />
        ))}

        {/* Title */}
        <h2 className="absolute left-[4.17%] top-[7.4%] whitespace-pre-line text-[3.75vw] italic leading-[1.05] text-[#F5F5F7]" style={{ fontFamily: "'Fraunces', serif", fontWeight: 500, width: "46.9%" }}>
          {"Numbers that\nspeak for themselves."}
        </h2>

        {/* Amber pill */}
        <div className="absolute right-[4.17%] top-[7.4%] flex h-[32px] items-center justify-center rounded-[20px] bg-[#F5A62318] px-5">
          <span style={{ fontFamily: "'DM Sans', sans-serif" }} className="text-[0.573vw] font-semibold text-[#F5A623]">KEY METRICS</span>
        </div>

        {/* 3 KPI blocks */}
        <div className="absolute left-[4.17%] top-[29.6%] flex" style={{ width: "91.67%" }}>
          {kpis.map((k, i) => (
            <div key={k.num} className="flex-1" style={{ paddingRight: i < 2 ? "4%" : 0 }}>
              <p className="text-[8.33vw] font-bold tracking-[-0.2vw]" style={{ fontFamily: "'Fraunces', serif", color: k.color, lineHeight: 1 }}>{k.num}</p>
              <p className="mt-[12%] text-[1.146vw] font-normal text-[#64646B]" style={{ fontFamily: "'DM Sans', sans-serif" }}>{k.label}</p>
              <div className="mt-[3%] h-[2px] w-[120px]" style={{ backgroundColor: k.color }} />
              <div className="mt-[2%] flex items-center gap-[8px]">
                {k.trend.icon && <TrendingUp className="h-[16px] w-[16px]" style={{ color: k.color }} />}
                <span className="text-[0.833vw] font-semibold" style={{ fontFamily: "'DM Sans', sans-serif", color: k.color }}>{k.trend.text}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Divider line */}
        <div className="absolute left-0 top-[75.9%] h-px w-full bg-[#1E1E24]" />

        {/* Footnotes */}
        <div className="absolute left-[4.17%] top-[78.5%] flex" style={{ width: "91.67%" }}>
          {footnotes.map((f, i) => (
            <p key={i} className="flex-1 text-[0.677vw] font-normal text-[#3E3E45]" style={{ fontFamily: "'DM Sans', sans-serif" }}>{f}</p>
          ))}
        </div>

        {/* Slide number */}
        <p className="absolute bottom-[3.3%] right-[6.25%] text-[0.625vw] font-medium text-[#3E3E45]" style={{ fontFamily: "'DM Sans', sans-serif" }}>05 — 10</p>
      </div>
    </div>
  );
}

export default Slide05;
