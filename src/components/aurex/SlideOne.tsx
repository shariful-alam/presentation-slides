function SlideOne() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0A0A0A] p-4">
      <div className="relative w-full max-w-[1920px] overflow-hidden bg-[#0A0A0A]" style={{ aspectRatio: "1920 / 1080" }}>
        {/* Left content area */}
        <div className="absolute left-0 top-0 h-full w-[53%] flex flex-col justify-between px-[6.25%] py-[7.4%]">
          {/* Top section */}
          <div>
            {/* Brand label */}
            <p
              className="text-[0.73vw] font-medium tracking-[3px] text-[#C9A962]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              AUREX CONSULTING
            </p>
            {/* Gold line */}
            <div className="mt-[2.8%] h-px w-[4.17%] bg-[#C9A962]" />

            {/* Main title */}
            <h1
              className="mt-[6.5%] text-[6.25vw] font-medium leading-[1.1] text-white"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Redefining
              <br />
              Excellence
            </h1>

            {/* Subtitle */}
            <p
              className="mt-[2.8%] text-[1.875vw] font-normal text-[#848484]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Strategic Vision &amp; Growth Framework 2025
            </p>
          </div>

          {/* Bottom section */}
          <div className="flex items-end justify-between">
            <p
              className="text-[0.73vw] font-normal text-[#6A6A6A]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Q1 Annual Report
            </p>
          </div>
        </div>

        {/* Vertical separator + deco squares */}
        <div className="absolute left-[47.9%] top-[36.1%] flex flex-col items-center">
          <div className="h-[27.8%] w-px bg-[#C9A962]" style={{ height: "calc(27.78vh)" }} />
          <div className="mt-[33.3%]" style={{ marginTop: "calc(100% * 0.33)" }}>
            <div className="h-[8px] w-[8px] bg-[#C9A96240]" />
            <div className="mt-[4px] h-[8px] w-[8px] bg-[#C9A96240]" />
            <div className="mt-[4px] h-[8px] w-[8px] bg-[#C9A96240]" />
          </div>
        </div>

        {/* Right image area */}
        <div className="absolute right-0 top-0 h-full w-[46.875%]">
          <img
            src="/images/generated-1772984143250.png"
            alt="Golden flowing waves"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Bottom right date */}
        <p
          className="absolute bottom-[7.4%] right-[6.25%] z-10 text-[0.73vw] font-normal text-[#6A6A6A]"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          March 2025
        </p>
      </div>
    </div>
  );
}

export default SlideOne;
