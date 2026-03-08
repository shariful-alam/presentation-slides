import { ArrowRight, Mail, Globe } from "lucide-react";

function Slide10() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#060608] p-4">
      <div className="relative w-full max-w-[1920px] overflow-hidden bg-[#060608]" style={{ aspectRatio: "1920/1080" }}>
        {/* Right image */}
        <div className="absolute right-0 top-0 h-full w-[54.2%]">
          <img src="/images/generated-1772986578586.png" alt="Futuristic cityscape" className="h-full w-full object-cover" />
          {/* Fade overlay left */}
          <div className="absolute left-[-10%] top-0 h-full w-[48%]" style={{ background: "linear-gradient(90deg, #060608 0%, transparent 100%)" }} />
          {/* Tint overlay */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(90,95,224,0.08) 0%, rgba(6,6,8,0.25) 100%)" }} />
        </div>

        {/* Left glow */}
        <div className="absolute left-[-10.4%] top-[27.8%] h-[83.3%] w-[46.9%] rounded-full" style={{ background: "radial-gradient(circle, rgba(90,95,224,0.06) 0%, transparent 70%)" }} />

        {/* Thank you label */}
        <p className="absolute left-[4.17%] top-[7.4%] text-[0.573vw] font-semibold tracking-[3px] text-[#3E3E45]" style={{ fontFamily: "'DM Sans', sans-serif" }}>THANK YOU</p>

        {/* Eyebrow bar */}
        <div className="absolute left-[4.17%] top-[6.5%] h-[26px] w-[3px] rounded-[2px] bg-[#5A5FE0]" />

        {/* Brand mark */}
        <p className="absolute left-[4.17%] top-[14.4%] text-[0.625vw] font-semibold tracking-[3px] text-[#3E3E45]" style={{ fontFamily: "'DM Sans', sans-serif" }}>NEXIVE CAPITAL</p>
        <div className="absolute left-[4.17%] top-[16.7%] h-[2px] w-[40px] bg-[#2ECC8A]" />

        {/* Main title */}
        <h2 className="absolute left-[4.17%] top-[18.5%] text-[4.58vw] leading-[1] tracking-[-0.1vw] text-[#F5F5F7]" style={{ fontFamily: "'Fraunces', serif", fontWeight: 500, width: "42.7%" }}>
          The future belongs
        </h2>
        <h2 className="absolute left-[4.17%] top-[28.3%] text-[4.58vw] leading-[1] tracking-[-0.1vw] text-[#F5F5F7]" style={{ fontFamily: "'Fraunces', serif", fontWeight: 500, width: "42.7%" }}>
          to those who
        </h2>
        <h2 className="absolute left-[4.17%] top-[38.1%] text-[4.58vw] leading-[1] tracking-[-0.1vw]" style={{ fontFamily: "'Fraunces', serif", fontWeight: 500, width: "42.7%", background: "linear-gradient(90deg, #5A5FE0, #2ECC8A)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          build it.
        </h2>

        {/* Subtitle */}
        <p className="absolute left-[4.17%] top-[50.6%] whitespace-pre-line text-[1.146vw] font-normal leading-[1.65] text-[#64646B]" style={{ fontFamily: "'DM Sans', sans-serif", width: "36.5%" }}>
          {"Partner with us and let's shape\nthe next decade of venture together."}
        </p>

        {/* Divider */}
        <div className="absolute left-[4.17%] top-[61.1%] h-px w-[36.5%] bg-[#1E1E24]" />

        {/* Buttons */}
        <div className="absolute left-[4.17%] top-[63.5%] flex items-center gap-[16px]">
          <button className="flex h-[64px] w-[280px] items-center justify-center gap-[12px] rounded-[32px] bg-[#5A5FE0]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            <span className="text-[0.833vw] font-semibold text-[#F5F5F7]">Schedule a Meeting</span>
            <ArrowRight className="h-[18px] w-[18px] text-[#F5F5F7]" />
          </button>
          <button className="flex h-[64px] w-[200px] items-center justify-center rounded-[32px] border border-[#2A2A30]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            <span className="text-[0.833vw] font-normal text-[#64646B]">Download Deck</span>
          </button>
        </div>

        {/* Contact row */}
        <div className="absolute left-[4.17%] top-[73.7%] flex items-center gap-[48px]">
          <div className="flex items-center gap-[8px]">
            <Mail className="h-[18px] w-[18px] text-[#5A5FE0]" />
            <span className="text-[0.833vw] font-normal text-[#F5F5F7]" style={{ fontFamily: "'DM Sans', sans-serif" }}>hello@nexivecapital.com</span>
          </div>
          <div className="flex items-center gap-[8px]">
            <Globe className="h-[18px] w-[18px] text-[#2ECC8A]" />
            <span className="text-[0.833vw] font-normal text-[#F5F5F7]" style={{ fontFamily: "'DM Sans', sans-serif" }}>nexivecapital.com</span>
          </div>
        </div>

        {/* Social dots */}
        <div className="absolute right-[4.17%] top-[44.4%] flex gap-[8px]">
          <div className="h-[6px] w-[6px] rounded-full bg-[#5A5FE050]" />
          <div className="h-[6px] w-[6px] rounded-full bg-[#2ECC8A50]" />
          <div className="h-[6px] w-[6px] rounded-full bg-[#E05A5050]" />
        </div>

        {/* Footer line */}
        <div className="absolute bottom-[6.5%] left-0 h-px w-full bg-[#111114]" />

        {/* Footer */}
        <p className="absolute bottom-[4.6%] left-[4.17%] text-[0.625vw] font-normal tracking-[1px] text-[#2A2A30]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          NEXIVE CAPITAL — Empowering founders, building futures.
        </p>
        <p className="absolute bottom-[4.6%] right-[5.2%] text-[0.625vw] font-normal text-[#3E3E45]" style={{ fontFamily: "'DM Sans', sans-serif" }}>10 — 10</p>
      </div>
    </div>
  );
}

export default Slide10;
