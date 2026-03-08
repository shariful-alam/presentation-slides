import { Link, Route, Routes } from "react-router-dom";
import SlideOne from "./components/SlideOne.tsx";

function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-6 py-12">
      <div className="w-full max-w-xl rounded-3xl bg-white p-10 text-center shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-400">
          Presentation Slides
        </p>
        <h1 className="mt-4 text-4xl font-bold text-slate-900">
          Choose a slide
        </h1>
        <p className="mt-3 text-base text-slate-500">
          Open the first slide to view the layout recreated from your reference
          image.
        </p>

        <Link
          to="/slide-1"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-[#0f53b7] px-8 py-3 text-base font-semibold text-white shadow-lg shadow-blue-200 transition hover:bg-[#0b469a]"
        >
          Slide 1
        </Link>
      </div>
    </main>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/slide-1" element={<SlideOne />} />
    </Routes>
  );
}

export default App;
