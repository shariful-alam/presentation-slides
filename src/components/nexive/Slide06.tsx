import { PhoneCall, Search, PenLine, Rocket } from "lucide-react";

const steps = [
  { num: "01", color: "#2ECC8A", icon: PhoneCall, title: "Discovery\nCall", body: "We learn your vision, validate fit and identify your path to growth.", tag: "Week 1–2", w: 280 },
  { num: "02", color: "#5A5FE0", icon: Search, title: "Due\nDiligence", body: "300+ data points. AI-powered analysis flags risk before every investment.", tag: "Week 2–4", w: 280 },
  { num: "03", color: "#E05A50", icon: PenLine, title: "Term\nSheet", body: "Our team gets you to term sheet in 10 days — no death by committee.", tag: "Day 10", w: 280 },
  { num: "04", color: "#F5A623", icon: Rocket, title: "Scale\nTogether", body: "Hands-on support through growth, timing and eventual exit strategy.", tag: "Ongoing", w: 240 },
];

function Slide06() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0B0B0E] p-4">
      <div className="relative w-full max-w-[1920px] overflow-hidden bg-[#0B0B0E]" style={{ aspectRatio: "1920/1080" }}>
        {/* Left panel */}
        <div className="absolute left-0 top-0 h-full w-[36.46%] bg-[#0D0D11]" />
        <div className="absolute left-[36.46%] top-0 h-full w-px bg-[#1E1E24]" />

        {/* Subtle gradient overlay */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(45deg, transparent 0%, rgba(255,255,255,0.012) 50%, transparent 100%)" }} />

        {/* Purple pill */}
        <div className="absolute left-[4.17%] top-[9.3%] flex h-[34px] items-center justify-center rounded-[20px] bg-[#5A5FE018] px-5">
          <span style={{ fontFamily: "'DM Sans', sans-serif" }} className="text-[0.573vw] font-semibold tracking-[2px] text-[#5A5FE0]">HOW IT WORKS</span>
        </div>

        {/* Heading */}
        <h2 className="absolute left-[4.17%] top-[14.8%] whitespace-pre-line text-[4.17vw] leading-[1.05] tracking-[-0.05vw] text-[#F5F5F7]" style={{ fontFamily: "'Fraunces', serif", fontWeight: 500, width: "29.2%" }}>
          {"From first call\nto first exit."}
        </h2>

        {/* Sub text */}
        <p className="absolute left-[4.17%] top-[39.8%] whitespace-pre-line text-[1.04vw] font-normal leading-[1.6] text-[#64646B]" style={{ fontFamily: "'DM Sans', sans-serif", width: "27.1%" }}>
          {"Our proven 4-phase\nmethodology — refined\nacross 120+ deals."}
        </p>

        {/* Purple accent bar */}
        <div className="absolute left-[4.17%] top-[55.6%] h-[3px] w-[50px] bg-[#5A5FE0]" />

        {/* Bottom left */}
        <p className="absolute bottom-[5.6%] left-[4.17%] text-[0.625vw] font-normal text-[#3E3E45]" style={{ fontFamily: "'DM Sans', sans-serif" }}>06 — 10</p>
        <p className="absolute bottom-[5.6%] right-[6.25%] text-[0.573vw] font-semibold tracking-[2px] text-[#3E3E45]" style={{ fontFamily: "'DM Sans', sans-serif" }}>NEXIVE CAPITAL</p>

        {/* 4 Step cards */}
        <div className="absolute left-[38.54%] top-[7.4%] flex gap-[1.04%]" style={{ width: "57.3%", height: "85.2%" }}>
          {steps.map((s) => (
            <div key={s.num} className="relative overflow-hidden rounded-[24px] border border-[#222228] bg-[#111114]" style={{ flex: s.w === 240 ? "0 0 22.2%" : 1 }}>
              {/* Top color bar */}
              <div className="absolute left-0 top-0 h-[4px] w-full rounded-t-[24px]" style={{ backgroundColor: s.color }} />

              {/* Ghost number */}
              <p className="absolute left-[8.6%] top-[2.8%] text-[5.2vw] font-bold leading-[1]" style={{ fontFamily: "'Fraunces', serif", color: `${s.color}0D` }}>{s.num}</p>

              {/* Icon */}
              <s.icon className="absolute left-[10%] top-[15.2%] h-[1.875vw] w-[1.875vw]" style={{ color: s.color }} />

              {/* Title */}
              <h3 className="absolute left-[10%] top-[21.3%] whitespace-pre-line text-[1.67vw] leading-[1.1] text-[#F5F5F7]" style={{ fontFamily: "'Fraunces', serif", fontWeight: 500 }}>{s.title}</h3>

              {/* Divider */}
              <div className="absolute left-[10%] top-[32.2%] h-[2px] w-[40px]" style={{ backgroundColor: s.color }} />

              {/* Body */}
              <p className="absolute left-[10%] top-[34.3%] text-[0.78vw] font-normal leading-[1.6] text-[#64646B]" style={{ fontFamily: "'DM Sans', sans-serif", width: "79%" }}>{s.body}</p>

              {/* Bottom tag */}
              <div className="absolute bottom-[8.7%] left-[10%] flex h-[28px] items-center justify-center rounded-[14px] px-4" style={{ backgroundColor: `${s.color}15` }}>
                <span className="text-[0.625vw] font-semibold" style={{ fontFamily: "'DM Sans', sans-serif", color: s.color }}>{s.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slide06;
