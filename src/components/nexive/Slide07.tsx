const marketStats = [
  { value: "28%", color: "#5A5FE0", label: "CAGR through 2030" },
  { value: "3.1B", color: "#2ECC8A", label: "Underserved businesses" },
  { value: "6×", color: "#E05A50", label: "Projected market expansion" },
];

const bars = [
  { label: "Total Addressable Market (TAM)", color: "#5A5FE0", width: "100%" },
  { label: "Serviceable Addressable Market (SAM)", color: "#2ECC8A", width: "71.6%" },
  { label: "Serviceable Obtainable Market (SOM)", color: "#E05A50", width: "28.4%" },
];

const rings = [
  { label: "TAM", value: "$2.4T", color: "#5A5FE0", size: "68.5%", top: "11.1%", left: "12.5%" },
  { label: "SAM", value: "$680B", color: "#2ECC8A", size: "48.1%", top: "21.3%", left: "22.7%" },
  { label: "SOM", value: "$48B", color: "#E05A50", size: "25.9%", top: "32.4%", left: "33%" },
];

function Slide07() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0B0B0E] p-4">
      <div className="relative w-full max-w-[1920px] overflow-hidden bg-[#0B0B0E]" style={{ aspectRatio: "1920/1080" }}>
        {/* Right darker panel */}
        <div className="absolute right-0 top-0 h-full w-[42.7%] bg-[#0D0D11]" />
        <div className="absolute right-[42.7%] top-0 h-full w-px bg-[#1E1E24]" />

        {/* Glow effect */}
        <div className="absolute left-[46.9%] top-[13%] h-[83.3%] w-[46.9%] rounded-full" style={{ background: "radial-gradient(circle, rgba(90,95,224,0.07) 0%, transparent 70%)" }} />

        {/* Red pill */}
        <div className="absolute left-[4.17%] top-[9.3%] flex h-[34px] items-center justify-center rounded-[20px] bg-[#E05A5018] px-5">
          <span style={{ fontFamily: "'DM Sans', sans-serif" }} className="text-[0.573vw] font-semibold tracking-[2px] text-[#E05A50]">MARKET OPPORTUNITY</span>
        </div>

        {/* Title */}
        <h2 className="absolute left-[4.17%] top-[14.8%] whitespace-pre-line text-[4.17vw] leading-[1.05] tracking-[-0.05vw] text-[#F5F5F7]" style={{ fontFamily: "'Fraunces', serif", fontWeight: 500, width: "49%" }}>
          {"A $2.4 trillion\nuntapped market."}
        </h2>

        {/* Sub */}
        <p className="absolute left-[4.17%] top-[39.8%] whitespace-pre-line text-[1.04vw] font-normal leading-[1.65] text-[#64646B]" style={{ fontFamily: "'DM Sans', sans-serif", width: "42.7%" }}>
          {"We sit at the intersection of enterprise AI,\nfintech infrastructure and emerging markets —\nthree of the fastest-growing sectors globally."}
        </p>

        {/* Horizontal divider */}
        <div className="absolute left-[4.17%] top-[64.8%] h-px bg-[#1E1E24]" style={{ width: "51%" }} />

        {/* Left stat cards */}
        <div className="absolute left-[4.17%] top-[66.7%] flex gap-[2.1%]" style={{ width: "51%" }}>
          {marketStats.map((s) => (
            <div key={s.value} className="relative flex-1 overflow-hidden rounded-[16px] border border-[#222228] bg-[#111114] p-[6%]">
              <div className="absolute left-0 top-0 h-[3px] w-full rounded-t-[16px]" style={{ backgroundColor: s.color }} />
              <p className="text-[2.29vw] leading-[1]" style={{ fontFamily: "'Fraunces', serif", fontWeight: 500, color: s.color }}>{s.value}</p>
              <p className="mt-[18%] text-[0.677vw] font-normal text-[#64646B]" style={{ fontFamily: "'DM Sans', sans-serif" }}>{s.label}</p>
            </div>
          ))}
        </div>

        {/* Concentric rings (right side) */}
        <div className="absolute right-[2.08%] top-[11.1%]" style={{ width: "38.5%", height: "68.5%" }}>
          {/* Outer ring */}
          <div className="absolute inset-0 rounded-full border border-[#1E1E24]" />
          {/* Middle ring */}
          <div className="absolute left-[14.9%] top-[14.9%] rounded-full border border-[#5A5FE030] bg-[#5A5FE006]" style={{ width: "70.3%", height: "70.3%" }} />
          {/* Inner ring */}
          <div className="absolute left-[29.7%] top-[29.7%] rounded-full border border-[#2ECC8A40] bg-[#2ECC8A10]" style={{ width: "37.8%", height: "37.8%" }} />

          {/* Labels */}
          <div className="absolute right-[10%] top-[8%]">
            <p className="text-[0.677vw] font-semibold tracking-[2px] text-[#3E3E45]" style={{ fontFamily: "'DM Sans', sans-serif" }}>TAM</p>
            <p className="text-[1.46vw]" style={{ fontFamily: "'Fraunces', serif", fontWeight: 500, color: "#5A5FE0" }}>$2.4T</p>
          </div>
          <div className="absolute right-[0%] top-[30%]">
            <p className="text-[0.677vw] font-semibold tracking-[2px] text-[#3E3E45]" style={{ fontFamily: "'DM Sans', sans-serif" }}>SAM</p>
            <p className="text-[1.46vw]" style={{ fontFamily: "'Fraunces', serif", fontWeight: 500, color: "#2ECC8A" }}>$680B</p>
          </div>
          <div className="absolute right-[5%] top-[52%]">
            <p className="text-[0.677vw] font-semibold tracking-[2px] text-[#3E3E45]" style={{ fontFamily: "'DM Sans', sans-serif" }}>SOM</p>
            <p className="text-[1.46vw]" style={{ fontFamily: "'Fraunces', serif", fontWeight: 500, color: "#E05A50" }}>$48B</p>
          </div>
        </div>

        {/* Right-side progress bars */}
        <div className="absolute right-[2.08%] bottom-[11.1%] flex flex-col gap-[1.5%]" style={{ width: "38.5%" }}>
          {bars.map((b) => (
            <div key={b.label}>
              <p className="mb-[0.4%] text-[0.677vw] font-normal text-[#64646B]" style={{ fontFamily: "'DM Sans', sans-serif" }}>{b.label}</p>
              <div className="h-[8px] w-full rounded-[4px] bg-[#1E1E24]">
                <div className="h-full rounded-[4px]" style={{ width: b.width, background: `linear-gradient(90deg, ${b.color}, ${b.color}50)` }} />
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <p className="absolute bottom-[5.6%] left-[4.17%] text-[0.625vw] font-normal text-[#3E3E45]" style={{ fontFamily: "'DM Sans', sans-serif" }}>07 — 10</p>
        <p className="absolute bottom-[5.6%] right-[4.17%] text-[0.573vw] font-semibold tracking-[2px] text-[#3E3E45]" style={{ fontFamily: "'DM Sans', sans-serif" }}>NEXIVE CAPITAL</p>
      </div>
    </div>
  );
}

export default Slide07;
