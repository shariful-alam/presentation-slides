import { Link, Route, Routes } from "react-router-dom";

import OriginalSlideOne from "./components/original/SlideOne.tsx";

import AurexSlideOne from "./components/aurex/SlideOne.tsx";
import AurexSlideTwo from "./components/aurex/SlideTwo.tsx";
import AurexSlideThree from "./components/aurex/SlideThree.tsx";
import AurexSlideFour from "./components/aurex/SlideFour.tsx";
import AurexSlideFive from "./components/aurex/SlideFive.tsx";

import NexiveSlide01 from "./components/nexive/Slide01.tsx";
import NexiveSlide02 from "./components/nexive/Slide02.tsx";
import NexiveSlide03 from "./components/nexive/Slide03.tsx";
import NexiveSlide04 from "./components/nexive/Slide04.tsx";
import NexiveSlide05 from "./components/nexive/Slide05.tsx";
import NexiveSlide06 from "./components/nexive/Slide06.tsx";
import NexiveSlide07 from "./components/nexive/Slide07.tsx";
import NexiveSlide08 from "./components/nexive/Slide08.tsx";
import NexiveSlide09 from "./components/nexive/Slide09.tsx";
import NexiveSlide10 from "./components/nexive/Slide10.tsx";

import DesignAgentSlide01 from "./components/design-agent/Slide01.tsx";
import DesignAgentSlide02 from "./components/design-agent/Slide02.tsx";
import DesignAgentSlide03 from "./components/design-agent/Slide03.tsx";
import DesignAgentSlide04 from "./components/design-agent/Slide04.tsx";
import DesignAgentSlide05 from "./components/design-agent/Slide05.tsx";
import DesignAgentSlide06 from "./components/design-agent/Slide06.tsx";

interface SlideGroup {
  name: string;
  prefix: string;
  slides: { path: string; label: string; element: React.ReactNode }[];
}

const slideGroups: SlideGroup[] = [
  {
    name: "Original Presentation",
    prefix: "/original",
    slides: [
      { path: "/slide-1", label: "Slide 1", element: <OriginalSlideOne /> },
    ],
  },
  {
    name: "Aurex Consulting",
    prefix: "/aurex",
    slides: [
      { path: "/slide-1", label: "Cover", element: <AurexSlideOne /> },
      { path: "/slide-2", label: "Key Metrics", element: <AurexSlideTwo /> },
      { path: "/slide-3", label: "Our Services", element: <AurexSlideThree /> },
      { path: "/slide-4", label: "Growth Strategy", element: <AurexSlideFour /> },
      { path: "/slide-5", label: "Closing CTA", element: <AurexSlideFive /> },
    ],
  },
  {
    name: "Nexive Capital",
    prefix: "/nexive",
    slides: [
      { path: "/slide-1", label: "Cover", element: <NexiveSlide01 /> },
      { path: "/slide-2", label: "About Us", element: <NexiveSlide02 /> },
      { path: "/slide-3", label: "The Problem", element: <NexiveSlide03 /> },
      { path: "/slide-4", label: "Our Solution", element: <NexiveSlide04 /> },
      { path: "/slide-5", label: "Key Metrics", element: <NexiveSlide05 /> },
      { path: "/slide-6", label: "How It Works", element: <NexiveSlide06 /> },
      { path: "/slide-7", label: "Market Opportunity", element: <NexiveSlide07 /> },
      { path: "/slide-8", label: "Our Team", element: <NexiveSlide08 /> },
      { path: "/slide-9", label: "Roadmap", element: <NexiveSlide09 /> },
      { path: "/slide-10", label: "Closing CTA", element: <NexiveSlide10 /> },
    ],
  },
  {
    name: "Design Agent",
    prefix: "/design-agent",
    slides: [
      { path: "/slide-1", label: "What is a Design Agent", element: <DesignAgentSlide01 /> },
      { path: "/slide-2", label: "The Problem", element: <DesignAgentSlide02 /> },
      { path: "/slide-3", label: "How It Works", element: <DesignAgentSlide03 /> },
      { path: "/slide-4", label: "Tools Used", element: <DesignAgentSlide04 /> },
      { path: "/slide-5", label: "Example Workflow", element: <DesignAgentSlide05 /> },
      { path: "/slide-6", label: "Results & Benefits", element: <DesignAgentSlide06 /> },
    ],
  },
];

function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0A0A0A] px-6 py-12">
      <div className="w-full max-w-2xl">
        <div className="text-center">
          <p
            className="text-xs font-medium uppercase tracking-[3px] text-[#C9A962]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            PRESENTATION SLIDES
          </p>
          <h1
            className="mt-4 text-5xl font-medium text-white"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Choose a Group
          </h1>
          <div className="mx-auto mt-4 h-px w-[60px] bg-[#C9A962]" />
        </div>

        <div className="mt-12 flex flex-col gap-8">
          {slideGroups.map((group) => (
            <div
              key={group.prefix}
              className="rounded-lg border border-[#2A2A2A] bg-[#111111] p-6"
            >
              <h2
                className="text-xl font-medium text-white"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {group.name}
              </h2>
              <p
                className="mt-1 text-xs text-[#6A6A6A]"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {group.slides.length} slide{group.slides.length > 1 ? "s" : ""}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.slides.map((s, i) => (
                  <Link
                    key={s.path}
                    to={`${group.prefix}${s.path}`}
                    className="inline-flex items-center gap-2 border border-[#2A2A2A] bg-transparent px-4 py-2 text-sm font-medium text-white transition hover:border-[#C9A962] hover:text-[#C9A962]"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    <span className="text-[#C9A962]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {slideGroups.flatMap((group) =>
        group.slides.map((s) => (
          <Route
            key={`${group.prefix}${s.path}`}
            path={`${group.prefix}${s.path}`}
            element={s.element}
          />
        ))
      )}
    </Routes>
  );
}

export default App;
