import Header from './Header';
import Footer from './Footer';

export default function SiteLayout({ content, title, lede, children }) {
  return (
    <div className="min-h-screen max-w-[100%] overflow-x-clip">
      <Header content={content} />
      <main className="pt-24 sm:pt-28 lg:pt-32 xl:pt-36">
        {title ? (
          <section className="relative overflow-hidden border-b border-slate-200 bg-white">
            <div className="relative mx-auto w-full max-w-[90rem] px-5 py-10 sm:px-8 sm:py-14 lg:px-12">
              <h1 className="reading-title font-display text-5xl text-lasa-700 sm:text-7xl">{title}</h1>
              {lede ? (
                <p className="reading-copy mt-6 max-w-4xl text-lg text-lasa-600 sm:text-xl">{lede}</p>
              ) : null}
            </div>
          </section>
        ) : null}
        {children}
      </main>
      <Footer content={content} />
    </div>
  );
}
