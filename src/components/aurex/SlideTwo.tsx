import { TrendingUp, Users, Activity } from "lucide-react";

const metrics = [
  {
    icon: TrendingUp,
    value: "$4.2M",
    change: "+18.3%",
    label: "Revenue Growth",
  },
  {
    icon: Users,
    value: "2,847",
    change: "+24.1%",
    label: "Active Clients",
  },
  {
    icon: Activity,
    value: "94.7%",
    change: "+5.2%",
    label: "Client Retention",
  },
];

const bottomStats = [
  { label: "Market Share:", value: "23%" },
  { label: "NPS Score:", value: "72" },
  { label: "ROI:", value: "340%" },
  { label: "YoY Growth:", value: "31%" },
];

function SlideTwo() {
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
            PERFORMANCE OVERVIEW
          </p>
          <h2
            className="mt-[0.5%] text-[2.5vw] font-medium text-white"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Key Metrics
          </h2>
          <div className="mt-[1.5%] h-px w-[60px] bg-[#C9A962]" />
        </div>

        {/* 3 Metric cards */}
        <div className="absolute left-[6.25%] top-[22.2%] flex gap-[1.33%]" style={{ width: "87.5%" }}>
          {metrics.map((m) => (
            <div
              key={m.label}
              className="flex-1 border border-[#2A2A2A] bg-transparent p-[2.08%]"
              style={{ aspectRatio: "540 / 360" }}
            >
              <m.icon className="h-[1.46vw] w-[1.46vw] text-[#C9A962]" />
              <p
                className="mt-[5.5%] text-[5vw] font-medium text-white"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {m.value}
              </p>
              <p
                className="mt-[12%] text-[0.73vw] font-medium text-[#C9A962]"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {m.change}
              </p>
              <p
                className="mt-[2%] text-[0.73vw] font-normal text-[#848484]"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {m.label}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom stats bar */}
        <div
          className="absolute bottom-[14.8%] left-[6.25%] flex items-center justify-between"
          style={{ width: "86.875%", height: "50px" }}
        >
          {bottomStats.map((stat, i) => (
            <div key={stat.label} className="flex items-center gap-[8px]">
              <span
                className="text-[0.677vw] font-normal text-[#848484]"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {stat.label}
              </span>
              <span
                className="text-[0.677vw] font-medium text-white"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {stat.value}
              </span>
              {i < bottomStats.length - 1 && (
                <div className="ml-[8px] h-[20px] w-px bg-[#C9A962]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SlideTwo;
