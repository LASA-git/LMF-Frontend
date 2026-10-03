import Header from './Header';
import Footer from './Footer';

export default function SiteLayout({ content, title, lede, children }) {
  return (
    <div className="min-h-screen max-w-[100%] overflow-x-clip">
      <Header content={content} />
      <main className="pt-[4.5rem] sm:pt-24 lg:pt-28">
        {title ? (
          <section className="relative overflow-hidden">
            <div className="relative mx-auto w-full max-w-[90rem] px-5 py-5 sm:px-8 sm:py-8 lg:px-12">
              <h1 className="reading-title font-display text-4xl text-lasa-700 sm:text-5xl">{title}</h1>
              {lede ? (
                <p className="reading-copy mt-3 max-w-4xl text-base text-lasa-600 sm:text-lg">{lede}</p>
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
