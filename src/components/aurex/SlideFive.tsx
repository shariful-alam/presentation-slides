import { ArrowRight, Mail, Phone, Globe } from "lucide-react";

function SlideFive() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0A0A0A] p-4">
      <div
        className="relative w-full max-w-[1920px] overflow-hidden bg-[#0A0A0A]"
        style={{ aspectRatio: "1920 / 1080" }}
      >
        {/* Left image with gradient overlay */}
        <div className="absolute left-0 top-0 h-full w-[44.79%]">
          <img
            src="/images/generated-1772984256987.png"
            alt="Modern architecture with gold accents"
            className="h-full w-full object-cover"
          />
          {/* Gradient overlay fading to black at bottom */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(10,10,10,0) 0%, rgba(10,10,10,0.93) 85%)",
            }}
          />
        </div>

        {/* Vertical divider line */}
        <div className="absolute left-[44.79%] top-0 h-full w-[2px] bg-[#2A2A2A]" />
        {/* Gold accent on divider */}
        <div className="absolute left-[44.79%] top-[44.4%] h-[11.1%] w-[2px] bg-[#C9A962]" />

        {/* Right content */}
        <div className="absolute left-[50%] top-0 h-full" style={{ width: "43.75%" }}>
          {/* Top label */}
          <p
            className="mt-[11.1%] text-[0.625vw] font-medium tracking-[3px] text-[#C9A962]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            AUREX CONSULTING
          </p>
          <div className="mt-[1.4%] h-px w-[60px] bg-[#C9A962]" />

          {/* Main title */}
          <h2
            className="mt-[4.6%] text-[3.75vw] font-medium leading-[1.15] text-white"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Let's Build
            <br />
            Something
            <br />
            Extraordinary
          </h2>

          {/* Subtitle */}
          <p
            className="mt-[4.6%] text-[1.04vw] font-normal leading-[1.6] text-[#848484]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Ready to transform your business?
            <br />
            Partner with us for strategic growth.
          </p>

          {/* CTA Button */}
          <button
            className="mt-[3.7%] flex h-[56px] w-[280px] items-center justify-center gap-[10px] bg-[#C9A962]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            <span className="text-[0.73vw] font-medium text-[#0A0A0A]">
              Schedule a Consultation
            </span>
            <ArrowRight className="h-[16px] w-[16px] text-[#0A0A0A]" />
          </button>

          {/* Divider */}
          <div className="mt-[5.6%] h-px w-[400px] bg-[#2A2A2A]" />

          {/* Contact info */}
          <div className="mt-[3.7%] flex flex-col gap-[16px]">
            <div className="flex items-center gap-[12px]">
              <Mail className="h-[16px] w-[16px] text-[#C9A962]" />
              <span
                className="text-[0.78vw] font-normal text-[#848484]"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                contact@aurexconsulting.com
              </span>
            </div>
            <div className="flex items-center gap-[12px]">
              <Phone className="h-[16px] w-[16px] text-[#C9A962]" />
              <span
                className="text-[0.78vw] font-normal text-[#848484]"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                +1 (212) 555-0190
              </span>
            </div>
            <div className="flex items-center gap-[12px]">
              <Globe className="h-[16px] w-[16px] text-[#C9A962]" />
              <span
                className="text-[0.78vw] font-normal text-[#848484]"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                www.aurexconsulting.com
              </span>
            </div>
          </div>

          {/* Bottom line */}
          <div className="absolute bottom-[11.1%] left-0 h-px bg-[#2A2A2A]" style={{ width: "100%" }} />

          {/* Bottom bar */}
          <div className="absolute bottom-[7.4%] left-0 flex items-center justify-between" style={{ width: "100%" }}>
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
              05
            </p>
          </div>
        </div>

        {/* Right decorative elements */}
        <div className="absolute right-[6.25%] top-[11.1%] flex flex-col items-center">
          <div className="flex flex-col gap-[8px]">
            <div className="h-[8px] w-[8px] bg-[#C9A96240]" />
            <div className="h-[8px] w-[8px] bg-[#C9A96240]" />
            <div className="h-[8px] w-[8px] bg-[#C9A96240]" />
          </div>
          <div className="mt-[10px] h-[80px] w-px bg-[#2A2A2A]" />
        </div>
      </div>
    </div>
  );
}

export default SlideFive;
