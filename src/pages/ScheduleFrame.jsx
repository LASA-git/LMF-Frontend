import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ScheduleFrame({ content, title, children }) {
  return (
    <div className="min-h-screen max-w-[100%] overflow-x-clip">
      <Header content={content} />
      <main className="pt-24 sm:pt-28 lg:pt-32">
        <section className="relative overflow-hidden border-b border-slate-200 bg-white">
          <div className="relative mx-auto max-w-[72rem] px-4 py-6 sm:px-6 sm:py-8">
            <h1 className="reading-title font-sans text-4xl text-lasa-700 sm:text-5xl">{title}</h1>
          </div>
        </section>
        <section className="mx-auto max-w-[72rem] px-5 py-14 sm:px-8 lg:px-12 sm:py-20">{children}</section>
      </main>
      <Footer content={content} />
    </div>
  );
}
