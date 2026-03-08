const slideItems = [
  {
    id: "1",
    left: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    right:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
  },
  {
    id: "2",
    left: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    right:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
  },
  {
    id: "3",
    left: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    right:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
  },
] as const;

function SlideOne() {
  return (
    <main className="min-h-screen bg-slate-100 px-4 py-5 sm:px-6 lg:px-8">
      <section className="relative mx-auto min-h-[720px] w-full max-w-[1400px] overflow-hidden rounded-[28px] bg-[#f7f7f3] shadow-[0_30px_80px_rgba(15,23,42,0.14)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(255,255,255,0.95),rgba(247,247,243,0.95)_22%,transparent_23%),radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.9),transparent_18%),radial-gradient(circle_at_28%_8%,rgba(255,255,255,0.8),transparent_14%),radial-gradient(circle_at_72%_18%,rgba(0,0,0,0.04),transparent_13%)]" />
        <div className="pointer-events-none absolute -left-8 top-1/2 h-80 w-20 -translate-y-1/2 rounded-r-[28px] bg-[#0f53b7]" />
        <div className="absolute right-0 top-0 h-full w-full bg-[#0f53b7] lg:w-[34%]" />

        <div className="relative z-10 flex min-h-[720px] flex-col lg:flex-row">
          <div className="relative flex-1 px-8 py-24 pr-10 sm:px-12 lg:pl-20 lg:pr-18 lg:py-16 xl:px-28">
            <div className="flex h-full flex-col justify-center gap-14 lg:gap-[3.85rem]">
              {slideItems.map((item) => (
                <div
                  key={item.id}
                  className="flex min-h-[90px] items-center justify-end text-right lg:justify-end"
                >
                  <p className="max-w-[430px] text-right text-[22px] font-medium leading-[1.4] tracking-[-0.02em] text-slate-900 sm:text-[28px] lg:max-w-[360px]">
                    {item.left}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <aside className="relative w-full px-8 py-16 text-white sm:px-12 lg:w-[34%] lg:px-10 xl:px-14">
            <div className="w-full">
              <header className="text-center lg:pt-12 lg:text-right">
                <p className="text-[22px] font-medium uppercase tracking-[0.08em] text-white/95 sm:text-[28px]">
                  What We Offer
                </p>
                <h2 className="mt-1 text-[32px] font-extrabold uppercase leading-none tracking-[-0.03em] sm:text-[48px]">
                  Always
                </h2>
              </header>

              <div className="mt-14 flex flex-col gap-14 lg:mt-18 lg:gap-[3.35rem]">
                {slideItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex min-h-[90px] items-center justify-end text-right"
                  >
                    <p className="mx-auto max-w-[320px] pt-16 text-base leading-7 text-white/90 lg:mr-0 lg:ml-auto lg:max-w-[280px] lg:pt-0">
                      {item.right}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>

        <div className="pointer-events-none absolute inset-y-0 z-20 hidden lg:right-[calc(34%-2rem)] lg:flex lg:items-center">
          <div className="flex flex-col gap-28">
            {slideItems.map((item) => (
              <div
                key={item.id}
                className="flex h-24 w-24 items-center justify-center rounded-full bg-[#d9d9d9] text-6xl font-black leading-none text-black"
              >
                {item.id}
              </div>
            ))}
          </div>
        </div>

        {/* <Link
          to="/"
          className="absolute left-6 top-6 z-20 inline-flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-slate-800 shadow-md backdrop-blur transition hover:bg-white"
        >
          Back
        </Link> */}
      </section>
    </main>
  );
}

export default SlideOne;
