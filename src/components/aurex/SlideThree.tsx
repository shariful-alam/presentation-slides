import { Briefcase, TrendingUp, Target, Shield } from "lucide-react";

const services = [
  {
    icon: Briefcase,
    num: "01",
    title: "Strategic Advisory",
    desc: "Executive-level strategic counsel for market\nexpansion, M&A, and competitive positioning",
  },
  {
    icon: TrendingUp,
    num: "02",
    title: "Financial Engineering",
    desc: "Capital structure optimization, risk management,\nand portfolio performance enhancement",
  },
  {
    icon: Target,
    num: "03",
    title: "Digital Transformation",
    desc: "End-to-end digital strategy, AI integration,\nand enterprise technology modernization",
  },
  {
    icon: Shield,
    num: "04",
    title: "Risk & Compliance",
    desc: "Regulatory compliance frameworks, risk assessment,\nand governance infrastructure development",
  },
];

function SlideThree() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0A0A0A] p-4">
      <div
        className="relative w-full max-w-[1920px] overflow-hidden bg-[#0A0A0A]"
        style={{ aspectRatio: "1920 / 1080" }}
      >
        {/* Header */}
        <div className="absolute left-[6.25%] top-[6.5%]">
          <p
            className="text-[0.625vw] font-medium tracking-[3px] text-[#C9A962]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            WHAT WE OFFER
          </p>
          <h2
            className="mt-[0.5%] text-[2.5vw] font-medium text-white"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Our Services
          </h2>
          <div className="mt-[1.5%] h-px w-[60px] bg-[#C9A962]" />
          <p
            className="mt-[1.4%] text-[0.9375vw] font-normal text-[#848484]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Tailored solutions designed to elevate your business performance
          </p>
        </div>

        {/* Vertical decorative line between columns */}
        <div className="absolute left-[50%] top-[29.6%] h-[18.5%] w-px bg-[#2A2A2A]" />

        {/* Service cards - 2x2 grid */}
        <div className="absolute left-[6.25%] top-[23.1%]" style={{ width: "87.5%" }}>
          <div className="grid grid-cols-2 gap-x-[4.6%] gap-y-[2.2%]">
            {services.map((s) => (
              <div
                key={s.num}
                className="border border-[#2A2A2A] bg-transparent p-[5%]"
                style={{ aspectRatio: "800 / 340" }}
              >
                <div className="flex items-start justify-between">
                  <s.icon className="h-[1.67vw] w-[1.67vw] text-[#C9A962]" />
                  <span
                    className="text-[2.08vw] font-medium text-[#C9A96240]"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {s.num}
                  </span>
                </div>
                <h3
                  className="mt-[4%] text-[1.67vw] font-medium text-white"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {s.title}
                </h3>
                <p
                  className="mt-[3%] whitespace-pre-line text-[0.833vw] font-normal leading-[1.5] text-[#848484]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {s.desc}
                </p>
                <div className="mt-[5%] h-[2px] w-[40px] bg-[#C9A962]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SlideThree;
