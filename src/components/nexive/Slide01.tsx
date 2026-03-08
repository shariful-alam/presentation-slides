function Slide01() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0B0B0E] p-4">
      <div className="relative w-full max-w-[1920px] overflow-hidden bg-[#0B0B0E]" style={{ aspectRatio: "1920/1080" }}>
        {/* Right image panel */}
        <div className="absolute right-0 top-0 h-full w-[56.25%]">
          <img src="/images/generated-1772986291432.png" alt="Tech network" className="h-full w-full object-cover" />
        </div>
        {/* Gradient overlay left-to-right on image */}
        <div className="absolute right-[43.75%] top-0 h-full w-[15.6%]" style={{ background: "linear-gradient(90deg, #0B0B0E 0%, transparent 100%)" }} />

        {/* Diagonal grid lines (subtle decorative) */}
        {[0, 160, 320, 480, 640, 800, 960].map((y, i) => (
          <div key={i} className="pointer-events-none absolute h-[2px] w-[3000px] bg-white/[0.016]" style={{ top: y - 100, left: -100, transform: "rotate(45deg)", transformOrigin: "0 0" }} />
        ))}

        {/* Green pill chip */}
        <div className="absolute left-[4.17%] top-[5.2%] flex h-[32px] items-center justify-center rounded-[20px] bg-[#2ECC8A18] px-5">
          <span style={{ fontFamily: "'DM Sans', sans-serif" }} className="text-[0.573vw] font-semibold text-[#2ECC8A]">
            SERIES A · 2025
          </span>
        </div>

        {/* Headline */}
        <h1 className="absolute left-[4.17%] top-[18.5%] text-[5.625vw] italic leading-[1] tracking-[-0.1vw] text-[#F5F5F7]" style={{ fontFamily: "'Fraunces', serif", fontWeight: 500, width: "34.4%" }}>
          Building the
        </h1>
        <h1 className="absolute left-[4.17%] top-[28.9%] text-[5.625vw] italic leading-[1] tracking-[-0.1vw] text-[#F5F5F7]" style={{ fontFamily: "'Fraunces', serif", fontWeight: 500, width: "37.5%" }}>
          Future of Tech.
        </h1>

        {/* Green accent line */}
        <div className="absolute left-[4.17%] top-[40.7%] h-[2px] w-[60px] bg-[#2ECC8A]" />

        {/* Subtitle */}
        <p className="absolute left-[4.17%] top-[42.6%] text-[1.04vw] font-normal text-[#64646B]" style={{ fontFamily: "'DM Sans', sans-serif", width: "31.25%" }}>
          Investor Pitch Deck · Series A · 2025
        </p>

        {/* Bottom left brand */}
        <p className="absolute bottom-[3.3%] left-[4.17%] text-[0.573vw] font-medium tracking-[3px] text-[#3E3E45]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          NEXIVE CAPITAL
        </p>

        {/* Bottom right slide number */}
        <p className="absolute bottom-[3.3%] right-[5.2%] text-[0.625vw] font-medium text-[#3E3E45]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          01 — 10
        </p>
      </div>
    </div>
  );
}

export default Slide01;
