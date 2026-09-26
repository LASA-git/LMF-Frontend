import { Link } from 'react-router-dom';
import { getContent } from '../content';

export default function Splash() {
  const en = getContent('en');
  const es = getContent('es');
  const splash = en.splash;

  return (
    <div className="flex min-h-dvh max-w-[100%] items-center justify-center overflow-x-clip bg-[linear-gradient(180deg,#E8F2FA_0%,#F5F9FD_38%,#F5F9FD_100%)]">
      <main className="mx-auto w-full max-w-3xl px-4 py-10 text-center sm:px-6 sm:py-14">
        <div className="mx-auto flex w-full max-w-[28rem] flex-col items-center rounded-2xl border border-lasa-200 bg-white p-5 shadow-[0_24px_48px_-20px_rgba(21,58,98,0.35)] sm:max-w-[32rem] sm:p-7">
          <img
            src="/lasa-crest.png"
            alt="LASA Medical Foundation Inc. — Love All Serve All"
            className="h-44 w-auto sm:h-56"
          />
        </div>

        <h1 className="mt-10 font-display text-4xl text-lasa-700 sm:text-5xl">
          {splash.title}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-lasa-600 sm:text-xl">
          {splash.mission}
        </p>

        <nav className="mx-auto mt-10 grid max-w-xl gap-3 sm:grid-cols-2">
          <Link
            to="/en"
            className="inline-flex items-center justify-center rounded-xl border-2 border-lasa-700 bg-white px-4 py-4 text-center text-sm font-bold uppercase tracking-wide text-lasa-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-lasa-700 hover:text-white"
          >
            {en.splash.enterEnglish}
          </Link>
          <Link
            to="/es"
            className="inline-flex items-center justify-center rounded-xl border-2 border-lasa-700 bg-white px-4 py-4 text-center text-sm font-bold uppercase tracking-wide text-lasa-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-lasa-700 hover:text-white"
          >
            {es.splash.enterSpanish}
          </Link>
        </nav>
      </main>
    </div>
  );
}
