const team = [
  {
    initials: "SC", name: "Sarah Chen", role: "Managing Partner", roleColor: "#5A5FE0",
    gradient: "linear-gradient(135deg, #5A5FE0, #8B8FFF)",
    bio: "Former VP at Goldman Sachs. Led 14 unicorn investments with $1.2B+ in realized returns. Stanford MBA.",
    tags: ["AI & Deeptech", "Series A–C"],
  },
  {
    initials: "MW", name: "Marcus Webb", role: "General Partner", roleColor: "#2ECC8A",
    gradient: "linear-gradient(135deg, #2ECC8A, #5EFFC0)",
    bio: "Ex-CTO at Stripe. Built 3 companies from zero to exit. Deep expertise in fintech infrastructure and developer tools.",
    tags: ["Fintech", "Dev Tools"],
  },
  {
    initials: "PN", name: "Priya Nair", role: "Head of Portfolio", roleColor: "#E05A50",
    gradient: "linear-gradient(135deg, #E05A50, #FF8A7A)",
    bio: "15 years in growth equity. Previously at Sequoia and a16z. Dual MBA from Wharton, expert in SaaS scaling.",
    tags: ["SaaS", "Growth Equity"],
  },
  {
    initials: "JO", name: "James Okafor", role: "Chief of Staff", roleColor: "#F5A623",
    gradient: "linear-gradient(135deg, #F5A623, #FFD27A)",
    bio: "Yale Law. Former policy fellow at the White House. Specializes in regulatory navigation and emerging market entry.",
    tags: ["Regulatory", "Intl Markets"],
  },
];

function Slide08() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0B0B0E] p-4">
      <div className="relative w-full max-w-[1920px] overflow-hidden bg-[#0B0B0E]" style={{ aspectRatio: "1920/1080" }}>
        {/* Top dark panel */}
        <div className="absolute left-0 top-0 h-[24.1%] w-full bg-[#0D0D11]" />
        <div className="absolute left-0 top-[24.1%] h-px w-full bg-[#1E1E24]" />

        {/* Green pill */}
        <div className="absolute left-[4.17%] top-[7.4%] flex h-[34px] items-center justify-center rounded-[20px] bg-[#2ECC8A18] px-5">
          <span style={{ fontFamily: "'DM Sans', sans-serif" }} className="text-[0.573vw] font-semibold tracking-[2px] text-[#2ECC8A]">OUR TEAM</span>
        </div>

        {/* Title */}
        <h2 className="absolute left-[4.17%] top-[13%] text-[3.33vw] leading-[1.05] tracking-[-0.04vw] text-[#F5F5F7]" style={{ fontFamily: "'Fraunces', serif", fontWeight: 500, width: "57.3%" }}>
          World-class operators behind every decision.
        </h2>

        {/* Vertical divider between columns */}
        <div className="absolute left-[49%] top-[27.8%] h-[66.7%] w-px bg-[#1E1E24]" />

        {/* Team cards - 2x2 grid */}
        <div className="absolute left-[4.17%] top-[27.8%] grid grid-cols-2 gap-x-[2.6%] gap-y-[2.6%]" style={{ width: "91.67%" }}>
          {team.map((t) => (
            <div key={t.initials} className="relative overflow-hidden rounded-[20px] border border-[#222228] bg-[#111114]" style={{ aspectRatio: "860/340" }}>
              {/* Top accent */}
              <div className="absolute left-0 top-0 h-[3px] w-full rounded-t-[20px]" style={{ backgroundColor: t.roleColor }} />

              {/* Avatar */}
              <div className="absolute left-[4.65%] top-[11.8%] flex h-[100px] w-[100px] items-center justify-center rounded-full" style={{ background: t.gradient }}>
                <span className="text-[1.46vw] font-bold text-[#F5F5F7]" style={{ fontFamily: "'DM Sans', sans-serif" }}>{t.initials}</span>
              </div>

              {/* Name */}
              <p className="absolute left-[19.1%] top-[12.9%] text-[1.67vw]" style={{ fontFamily: "'Fraunces', serif", fontWeight: 500, color: "#F5F5F7" }}>{t.name}</p>

              {/* Role badge */}
              <div className="absolute left-[19.1%] top-[25.3%] flex h-[26px] items-center justify-center rounded-[13px] px-4" style={{ backgroundColor: `${t.roleColor}20` }}>
                <span className="text-[0.625vw] font-semibold" style={{ fontFamily: "'DM Sans', sans-serif", color: t.roleColor }}>{t.role}</span>
              </div>

              {/* Divider */}
              <div className="absolute left-[4.65%] top-[49.4%] h-px bg-[#1E1E24]" style={{ width: "90.7%" }} />

              {/* Bio */}
              <p className="absolute left-[4.65%] top-[55.3%] text-[0.833vw] font-normal leading-[1.6] text-[#64646B]" style={{ fontFamily: "'DM Sans', sans-serif", width: "88.4%" }}>{t.bio}</p>

              {/* Tags */}
              <div className="absolute bottom-[10.6%] left-[4.65%] flex gap-[8px]">
                {t.tags.map((tag) => (
                  <div key={tag} className="flex h-[26px] items-center justify-center rounded-[13px] bg-[#1E1E24] px-3">
                    <span className="text-[0.625vw] font-normal text-[#64646B]" style={{ fontFamily: "'DM Sans', sans-serif" }}>{tag}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <p className="absolute bottom-[4.6%] left-[4.17%] text-[0.625vw] font-normal text-[#3E3E45]" style={{ fontFamily: "'DM Sans', sans-serif" }}>08 — 10</p>
        <p className="absolute bottom-[4.6%] right-[4.17%] text-[0.573vw] font-semibold tracking-[2px] text-[#3E3E45]" style={{ fontFamily: "'DM Sans', sans-serif" }}>NEXIVE CAPITAL</p>
      </div>
    </div>
  );
}

export default Slide08;
