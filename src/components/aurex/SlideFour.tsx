import { Search, LayoutDashboard, Rocket, Activity } from "lucide-react";

const phases = [
  {
    icon: Search,
    phase: "PHASE 01",
    title: "Discovery &\nAnalysis",
    desc: "Deep market research, competitive\nlandscape mapping, and internal\ncapability assessment",
    stat: "4-6 Weeks",
    statColor: "#C9A96240",
  },
  {
    icon: LayoutDashboard,
    phase: "PHASE 02",
    title: "Strategy\nDesign",
    desc: "Custom roadmap development,\nresource allocation planning, and\nstakeholder alignment",
    stat: "6-8 Weeks",
    statColor: "#C9A96240",
  },
  {
    icon: Rocket,
    phase: "PHASE 03",
    title: "Execution &\nImplementation",
    desc: "Agile deployment, change management,\nand cross-functional team coordination\nacross all business units",
    stat: "8-12 Weeks",
    statColor: "#C9A96240",
  },
  {
    icon: Activity,
    phase: "PHASE 04",
    title: "Optimization &\nScale",
    desc: "Performance monitoring, iterative\nrefinement, and strategic scaling\nfor sustained growth",
    stat: "Ongoing",
    statColor: "#C9A962",
    highlightBorder: true,
  },
];

function SlideFour() {
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
            OUR APPROACH
          </p>
          <h2
            className="mt-[0.5%] text-[2.5vw] font-medium text-white"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Growth Strategy
          </h2>
          <div className="mt-[1.5%] h-px w-[60px] bg-[#C9A962]" />
          <p
            className="mt-[1.4%] text-[0.9375vw] font-normal text-[#848484]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            A proven four-phase methodology that drives measurable results
          </p>
        </div>

        {/* Right decorative elements */}
        <div className="absolute right-[6.25%] top-[6.5%] flex flex-col items-center">
          <div className="h-[5.56%] w-[2px] bg-[#C9A962]" style={{ height: "60px" }} />
          <div className="mt-[15px] flex flex-col gap-[6px]">
            <div className="h-[6px] w-[6px] bg-[#C9A96240]" />
            <div className="h-[6px] w-[6px] bg-[#C9A96240]" />
            <div className="h-[6px] w-[6px] bg-[#C9A96240]" />
          </div>
        </div>

        {/* Timeline connector line */}
        <div className="absolute left-[13.54%] top-[38.9%] h-[2px] bg-[#2A2A2A]" style={{ width: "72.9%" }} />
        {/* Gold progress overlay */}
        <div className="absolute left-[13.54%] top-[38.9%] h-[2px] bg-[#C9A962]" style={{ width: "25%" }} />

        {/* Gold dots on timeline */}
        {[13.54, 37.5, 61.46, 85.42].map((left, i) => (
          <div
            key={i}
            className="absolute top-[38.9%] h-[16px] w-[16px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A962]"
            style={{ left: `${left}%` }}
          />
        ))}

        {/* 4 Phase cards */}
        <div className="absolute left-[4.58%] top-[43.5%] flex gap-[2.6%]" style={{ width: "90.84%" }}>
          {phases.map((p) => (
            <div
              key={p.phase}
              className="flex-1 border bg-transparent"
              style={{
                borderColor: p.highlightBorder ? "#C9A96240" : "#2A2A2A",
                padding: "3.6% 3.2%",
                aspectRatio: "360 / 400",
              }}
            >
              <p
                className="text-[0.573vw] font-medium tracking-[2px] text-[#C9A962]"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {p.phase}
              </p>
              <p.icon className="mt-[6%] h-[1.46vw] w-[1.46vw] text-[#C9A962]" />
              <h3
                className="mt-[6%] whitespace-pre-line text-[1.46vw] font-medium leading-[1.2] text-white"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {p.title}
              </h3>
              <p
                className="mt-[6%] whitespace-pre-line text-[0.73vw] font-normal leading-[1.5] text-[#848484]"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {p.desc}
              </p>
              <p
                className="mt-[8%] text-[0.677vw] font-medium"
                style={{ fontFamily: "Inter, sans-serif", color: p.statColor }}
              >
                {p.stat}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom line */}
        <div className="absolute bottom-[13.9%] left-[6.25%] h-px bg-[#2A2A2A]" style={{ width: "87.5%" }} />

        {/* Bottom bar */}
        <div className="absolute bottom-[9.3%] left-[6.25%] flex items-center justify-between" style={{ width: "87.5%" }}>
          <p
            className="text-[0.573vw] font-medium tracking-[3px] text-[#6A6A6A]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            AUREX CONSULTING
          </p>
          <p
            className="text-[0.73vw] font-medium text-[#6A6A6A]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            04
          </p>
        </div>
      </div>
    </div>
  );
}

export default SlideFour;
