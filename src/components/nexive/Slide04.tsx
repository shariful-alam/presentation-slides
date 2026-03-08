import { Rocket, Shield, TrendingUp } from "lucide-react";

const pillars = [
  {
    num: "01", color: "#2ECC8A", icon: Rocket,
    title: "Speed to\nMarket",
    body: "200+ go-to-market playbooks refined across 8 years and 120 portfolio companies.",
    metric: "3.2x", metricLabel: "faster launch",
  },
  {
    num: "02", color: "#5A5FE0", icon: Shield,
    title: "Risk\nMitigation",
    body: "300+ data points analyzed on each deal. AI-powered due diligence flags issues before every investment.",
    metric: "94%", metricLabel: "accuracy rate",
  },
  {
    num: "03", color: "#E05A50", icon: TrendingUp,
    title: "Scale &\nExit",
    body: "Strategic M&A support and IPO readiness engineered for maximum shareholder value.",
    metric: "$4.2B", metricLabel: "portfolio value",
  },
];

function Slide04() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0B0B0E] p-4">
      <div className="relative w-full max-w-[1920px] overflow-hidden bg-[#0B0B0E]" style={{ aspectRatio: "1920/1080" }}>
        {/* Grid lines */}
        {[0, 160, 420, 680, 940].map((y, i) => (
          <div key={i} className="pointer-events-none absolute h-[2px] w-[3000px] bg-white/[0.016]" style={{ top: y - 100, left: -100, transform: "rotate(45deg)", transformOrigin: "0 0" }} />
        ))}

        {/* Green pill */}
        <div className="absolute left-[4.17%] top-[9.3%] flex h-[32px] items-center justify-center rounded-[20px] bg-[#2ECC8A18] px-5">
          <span style={{ fontFamily: "'DM Sans', sans-serif" }} className="text-[0.573vw] font-semibold text-[#2ECC8A]">OUR SOLUTION</span>
        </div>

        {/* Heading */}
        <h2 className="absolute left-[4.17%] top-[14.8%] whitespace-pre-line text-[3.54vw] italic leading-[1.05] text-[#F5F5F7]" style={{ fontFamily: "'Fraunces', serif", fontWeight: 500, width: "25%" }}>
          {"Three pillars\nof unstoppable\ngrowth."}
        </h2>

        {/* Body text */}
        <p className="absolute left-[4.17%] top-[49.1%] text-[0.9375vw] font-normal leading-[1.6] text-[#64646B]" style={{ fontFamily: "'DM Sans', sans-serif", width: "25%" }}>
          We've built a systematic approach that reduces risk, accelerates timelines, and maximizes founder outcomes.
        </p>

        {/* 3 Pillar cards */}
        <div className="absolute left-[34.4%] top-[7.4%] flex gap-[1.04%]" style={{ width: "61.5%", height: "85.2%" }}>
          {pillars.map((p) => (
            <div key={p.num} className="relative flex-1 overflow-hidden rounded-[24px] border border-[#222228] bg-[#111114]">
              {/* Top color bar */}
              <div className="absolute left-0 top-0 h-[4px] w-full" style={{ backgroundColor: p.color }} />

              {/* Ghost number */}
              <p className="absolute left-[5.3%] top-[3.3%] text-[6.25vw] font-bold" style={{ fontFamily: "'Fraunces', serif", color: `${p.color}10` }}>{p.num}</p>

              {/* Icon */}
              <p.icon className="absolute left-[10.5%] top-[19.6%] h-[2.08vw] w-[2.08vw]" style={{ color: p.color }} />

              {/* Title */}
              <h3 className="absolute left-[10.5%] top-[26.1%] whitespace-pre-line text-[1.875vw] font-semibold leading-[1.1] text-[#F5F5F7]" style={{ fontFamily: "'Fraunces', serif" }}>{p.title}</h3>

              {/* Divider */}
              <div className="absolute left-[10.5%] top-[37%] h-[2px] w-[40px]" style={{ backgroundColor: p.color }} />

              {/* Body */}
              <p className="absolute left-[10.5%] top-[39.1%] text-[0.885vw] font-normal leading-[1.6] text-[#64646B]" style={{ fontFamily: "'DM Sans', sans-serif", width: "79%" }}>{p.body}</p>

              {/* Bottom metric */}
              <p className="absolute bottom-[12%] left-[10.5%] text-[2.5vw] font-bold" style={{ fontFamily: "'Fraunces', serif", color: p.color }}>{p.metric}</p>
              <p className="absolute bottom-[6.5%] left-[10.5%] text-[0.73vw] font-normal text-[#64646B]" style={{ fontFamily: "'DM Sans', sans-serif" }}>{p.metricLabel}</p>
            </div>
          ))}
        </div>

        {/* Slide number */}
        <p className="absolute bottom-[3.3%] right-[6.25%] text-[0.625vw] font-medium text-[#3E3E45]" style={{ fontFamily: "'DM Sans', sans-serif" }}>04 — 10</p>
      </div>
    </div>
  );
}

export default Slide04;
