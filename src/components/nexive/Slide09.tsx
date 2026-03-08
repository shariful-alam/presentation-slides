const quarters = [
  {
    q: "Q1", color: "#5A5FE0", borderColor: "#5A5FE0", status: "✓ Complete", statusColor: "#2ECC8A",
    title: "Fund Close",
    items: ["→  $150M target raised", "→  42 LP commitments", "→  Fund structure finalized"],
    bg: "#111114",
  },
  {
    q: "Q2", color: "#5A5FE0", borderColor: "#5A5FE0", status: "✓ Complete", statusColor: "#2ECC8A",
    title: "First Investments",
    items: ["→  12 term sheets issued", "→  $45M deployed", "→  3 lead positions secured"],
    bg: "#111114",
  },
  {
    q: "Q3", color: "#2ECC8A", borderColor: "#2ECC8A", status: "▶ In Progress", statusColor: "#F5A623",
    title: "Scale Operations",
    items: ["→  30 active companies", "→  $100M deployed", "→  3 follow-on raises"],
    bg: "#111114",
  },
  {
    q: "Q4", color: "#3E3E45", borderColor: "#222228", status: "Upcoming", statusColor: "#3E3E45",
    title: "First Exits", titleColor: "#3E3E45",
    items: ["→  Target: 1 strategic exit", "→  $200M fully deployed", "→  Fund II launch preparation"],
    itemColor: "#2A2A30", bg: "#0F0F12",
  },
];

function Slide09() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0B0B0E] p-4">
      <div className="relative w-full max-w-[1920px] overflow-hidden bg-[#0B0B0E]" style={{ aspectRatio: "1920/1080" }}>
        {/* Top panel */}
        <div className="absolute left-0 top-0 h-[27.8%] w-full bg-[#0D0D11]" />
        <div className="absolute left-0 top-[27.8%] h-px w-full bg-[#1E1E24]" />

        {/* Amber pill */}
        <div className="absolute left-[4.17%] top-[7.4%] flex h-[34px] items-center justify-center rounded-[20px] bg-[#F5A62318] px-5">
          <span style={{ fontFamily: "'DM Sans', sans-serif" }} className="text-[0.573vw] font-semibold tracking-[2px] text-[#F5A623]">2025 ROADMAP</span>
        </div>

        {/* Title */}
        <h2 className="absolute left-[4.17%] top-[13.9%] text-[3.75vw] leading-[1.05] tracking-[-0.05vw] text-[#F5F5F7]" style={{ fontFamily: "'Fraunces', serif", fontWeight: 500, width: "72.9%" }}>
          Milestones that shape tomorrow.
        </h2>

        {/* Timeline track */}
        <div className="absolute left-[4.17%] top-[35.2%] h-[3px] rounded-[2px] bg-[#1E1E24]" style={{ width: "91.67%" }} />
        {/* Active progress gradient */}
        <div className="absolute left-[4.17%] top-[35.2%] h-[3px] rounded-[2px]" style={{ width: "57.3%", background: "linear-gradient(90deg, #5A5FE0, #2ECC8A 60%, #E05A50)" }} />

        {/* Timeline dots */}
        {[
          { left: "4.17%", color: "#5A5FE0", glow: true },
          { left: "26.5%", color: "#5A5FE0", glow: true },
          { left: "48.8%", color: "#2ECC8A", glow: true },
          { left: "71.1%", color: "#1E1E24", glow: false },
        ].map((dot, i) => (
          <div key={i} className="absolute top-[35.2%] -translate-x-1/2 -translate-y-1/2" style={{ left: dot.left }}>
            <div className="flex h-[44px] w-[44px] items-center justify-center rounded-full" style={{ backgroundColor: dot.glow ? dot.color : "#1E1E24", boxShadow: dot.glow ? `0 0 20px ${dot.color}55` : "none", border: !dot.glow ? "1px solid #3A3A45" : "none" }}>
              <div className="h-[12px] w-[12px] rounded-full" style={{ backgroundColor: dot.glow ? "#F5F5F7" : "#3A3A45" }} />
            </div>
          </div>
        ))}

        {/* Quarter cards */}
        <div className="absolute left-[4.17%] top-[39.8%] flex gap-[1.04%]" style={{ width: "91.67%", height: "53.7%" }}>
          {quarters.map((q) => (
            <div key={q.q} className="relative overflow-hidden rounded-[20px] border bg-[#111114]" style={{ flex: q.q === "Q4" ? "0 0 24.5%" : 1, borderColor: q.borderColor, backgroundColor: q.bg }}>
              {/* Top bar */}
              <div className="absolute left-0 top-0 h-[4px] w-full rounded-t-[20px]" style={{ backgroundColor: q.color === "#3E3E45" ? undefined : q.color, background: q.color === "#3E3E45" ? "linear-gradient(90deg, #222228, #3A3A45)" : undefined }} />

              {/* Q label + status */}
              <div className="absolute left-[6.8%] top-[4.8%] flex items-center gap-[8px]">
                <div className="flex h-[28px] items-center justify-center rounded-[14px] px-4" style={{ backgroundColor: `${q.color}20` }}>
                  <span className="text-[0.677vw] font-bold" style={{ fontFamily: "'DM Sans', sans-serif", color: q.color }}>{q.q}</span>
                </div>
                <div className="flex h-[28px] items-center justify-center rounded-[14px] px-3" style={{ backgroundColor: `${q.statusColor}15` }}>
                  <span className="text-[0.625vw] font-semibold" style={{ fontFamily: "'DM Sans', sans-serif", color: q.statusColor }}>{q.status}</span>
                </div>
              </div>

              {/* Title */}
              <p className="absolute left-[6.8%] top-[13.8%] text-[2.08vw] leading-[1.1]" style={{ fontFamily: "'Fraunces', serif", fontWeight: 500, color: q.titleColor || "#F5F5F7" }}>{q.title}</p>

              {/* Divider */}
              <div className="absolute left-[6.8%] top-[25.5%] h-px bg-[#1E1E24]" style={{ width: "86.3%" }} />

              {/* Items */}
              <div className="absolute left-[6.8%] top-[29%] flex flex-col gap-[5.5%]">
                {q.items.map((item, i) => (
                  <p key={i} className="text-[0.833vw] leading-[1.5]" style={{ fontFamily: "'DM Sans', sans-serif", color: q.itemColor || "#64646B" }}>{item}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <p className="absolute bottom-[4.6%] left-[4.17%] text-[0.625vw] font-normal text-[#3E3E45]" style={{ fontFamily: "'DM Sans', sans-serif" }}>09 — 10</p>
        <p className="absolute bottom-[4.6%] right-[4.17%] text-[0.573vw] font-semibold tracking-[2px] text-[#3E3E45]" style={{ fontFamily: "'DM Sans', sans-serif" }}>NEXIVE CAPITAL</p>
      </div>
    </div>
  );
}

export default Slide09;
