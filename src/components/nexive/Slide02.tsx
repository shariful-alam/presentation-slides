import { Zap, Users, TrendingUp } from "lucide-react";

const stats = [
  { icon: Zap, color: "#2ECC8A", label: "Founded", value: "2018, San Francisco" },
  { icon: Users, color: "#5A5FE0", label: "Portfolio", value: "120+ Companies" },
  { icon: TrendingUp, color: "#E05A50", label: "AUM", value: "$2.4 Billion" },
];

const cards = [
  { num: "340%", color: "#2ECC8A", label: "Average Portfolio ROI", sub: "+vs 12% market avg" },
  { num: "48", color: "#5A5FE0", label: "Active Deals", sub: "14 new this quarter" },
  { num: "12yr", color: "#E05A50", label: "Track Record", sub: "Across 3 market cycles" },
];

function Slide02() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0B0B0E] p-4">
      <div className="relative w-full max-w-[1920px] overflow-hidden bg-[#0B0B0E]" style={{ aspectRatio: "1920/1080" }}>
        {/* Left column */}
        <div className="absolute left-0 top-0 h-full w-[39.58%] bg-[#0D0D10]">
          {/* About pill */}
          <div className="absolute left-[10.5%] top-[9.3%] flex h-[32px] items-center justify-center rounded-[20px] bg-[#5A5FE018] px-5">
            <span style={{ fontFamily: "'DM Sans', sans-serif" }} className="text-[0.573vw] font-semibold text-[#5A5FE0]">ABOUT US</span>
          </div>

          {/* Heading */}
          <h2 className="absolute left-[10.5%] top-[14.8%] whitespace-pre-line text-[3.75vw] italic leading-[1.05] text-[#F5F5F7]" style={{ fontFamily: "'Fraunces', serif", fontWeight: 500, width: "76.3%" }}>
            {"We back\nfounders\nwho refuse\nto lose."}
          </h2>

          {/* Body text */}
          <p className="absolute left-[10.5%] top-[51.9%] text-[0.9375vw] font-normal leading-[1.6] text-[#64646B]" style={{ fontFamily: "'DM Sans', sans-serif", width: "76.3%" }}>
            Nexive Capital partners with visionary founders to scale breakthrough technology companies from seed to IPO.
          </p>

          {/* Stats rows */}
          <div className="absolute left-[10.5%] top-[66.7%] flex flex-col gap-[12px]" style={{ width: "76.3%" }}>
            {stats.map((s) => (
              <div key={s.label} className="flex items-center gap-[16px]">
                <s.icon className="h-[20px] w-[20px]" style={{ color: s.color }} />
                <div className="flex flex-col gap-[2px]">
                  <span className="text-[0.73vw] font-medium text-[#64646B]" style={{ fontFamily: "'DM Sans', sans-serif" }}>{s.label}</span>
                  <span className="text-[0.9375vw] font-bold text-[#F5F5F7]" style={{ fontFamily: "'DM Sans', sans-serif" }}>{s.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column - cards */}
        <div className="absolute right-0 top-0 h-full w-[60.42%] bg-[#0B0B0E]">
          <div className="absolute left-[6.9%] top-[8.3%] flex flex-col gap-[2.8%]" style={{ width: "86.2%", height: "83.3%" }}>
            {cards.map((c) => (
              <div key={c.num} className="flex-1 rounded-[20px] border border-[#222228] bg-[#111114] p-[3.4%]">
                <p className="text-[5.2vw] font-bold tracking-[-0.1vw]" style={{ fontFamily: "'Fraunces', serif", color: c.color }}>{c.num}</p>
                <p className="mt-[8%] text-[0.9375vw] font-normal text-[#64646B]" style={{ fontFamily: "'DM Sans', sans-serif" }}>{c.label}</p>
                <p className="mt-[2%] text-[0.73vw] font-medium" style={{ fontFamily: "'DM Sans', sans-serif", color: c.color }}>{c.sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Slide number */}
        <p className="absolute bottom-[3.3%] right-[6.25%] text-[0.625vw] font-medium text-[#3E3E45]" style={{ fontFamily: "'DM Sans', sans-serif" }}>02 — 10</p>
      </div>
    </div>
  );
}

export default Slide02;
