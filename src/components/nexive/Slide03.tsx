const chips = [
  { label: "Timing Issues", value: "82%" },
  { label: "Lack of Capital", value: "47%" },
  { label: "Wrong Team", value: "23%" },
];

function Slide03() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0B0B0E] p-4">
      <div className="relative w-full max-w-[1920px] overflow-hidden bg-[#0B0B0E]" style={{ aspectRatio: "1920/1080" }}>
        {/* Decorative circles top-right */}
        <div className="absolute right-[10%] top-[18.5%] h-[55.6%] w-[31.25%] rounded-full border border-[#6366F115] bg-[#6366F108]" />
        <div className="absolute right-[2.1%] top-[32.4%] h-[27.8%] w-[15.6%] rounded-full bg-[#6366F112]" />

        {/* Red pill chip */}
        <div className="absolute left-1/2 top-[11.1%] flex h-[32px] -translate-x-1/2 items-center justify-center rounded-[16px] bg-[#E85A4F20] px-5">
          <span style={{ fontFamily: "'DM Sans', sans-serif" }} className="text-[0.625vw] font-semibold text-[#E85A4F]">THE PROBLEM</span>
        </div>

        {/* Main statement */}
        <h2 className="absolute left-[8.33%] top-[20.4%] w-[83.3%] text-center text-[4.17vw] leading-[1.15] text-[#FAFAF9]" style={{ fontFamily: "'Fraunces', serif", fontWeight: 500 }}>
          {"82% of startups\nfail due to poor\nmarket timing.".split("\n").map((line, i) => (
            <span key={i}>{line}<br /></span>
          ))}
        </h2>

        {/* Red accent line */}
        <div className="absolute left-1/2 top-[53.2%] h-[3px] w-[80px] -translate-x-1/2 bg-[#E85A4F]" />

        {/* Support text */}
        <p className="absolute left-[8.33%] top-[54.6%] w-[83.3%] text-center text-[1.35vw] font-normal leading-[1.5] text-[#6B6B70]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          The window for disruption is narrow.<br />
          Most companies miss it entirely.
        </p>

        {/* Bottom stat chips */}
        <div className="absolute bottom-[15%] left-[12.5%] flex gap-[4.17%]" style={{ width: "75%" }}>
          {chips.map((c) => (
            <div key={c.label} className="flex flex-1 flex-col items-center justify-center gap-[4px] rounded-[12px] border border-[#2A2A2E] bg-[#16161A] py-[1.4%]">
              <span className="text-[0.833vw] font-normal text-[#FAFAF9]" style={{ fontFamily: "'DM Sans', sans-serif" }}>{c.label}</span>
              <span className="text-[1.67vw] font-bold text-[#E85A4F]" style={{ fontFamily: "'DM Sans', sans-serif" }}>{c.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slide03;
