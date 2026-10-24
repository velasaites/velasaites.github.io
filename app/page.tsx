import Image from "next/image";
import site from "@/content/site.json";
import LogoMark from "@/components/LogoMark";

// Префикс basePath (если сайт в подпапке) next/image к картинкам из public/ сам не добавляет.
const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nav = [
  { href: "#services", label: "Услуги" },
  { href: "#works", label: "Работы" },
  { href: "#process", label: "Как работаю" },
  { href: "#contacts", label: "Контакты" },
];

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-10 sm:mb-14">
      <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-accent">{eyebrow}</p>
      <h2 className="font-display text-[1.7rem] font-semibold leading-tight sm:text-4xl">{title}</h2>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true">
      <path d="m5 10.5 3.2 3L15 6.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" className="size-4" aria-hidden="true">
      <path d="M6 14 14 6M7 6h7v7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-20 border-b border-line/70 bg-bg/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
          <a href="#top" className="flex min-w-0 items-center gap-2.5 font-display text-base font-semibold tracking-[0.06em] uppercase">
            <LogoMark className="size-8 shrink-0" />
            <span className="truncate">{site.name}</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-muted md:flex">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-ink">
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href={site.contacts.telegram}
            className="shrink-0 rounded-full bg-ink px-4 py-2 text-sm font-medium text-bg transition hover:opacity-85"
          >
            Написать
          </a>
        </div>
      </header>

      <main id="top" className="flex-1">
        <section className="relative overflow-hidden">
          <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
          <div
            className="pointer-events-none absolute -top-48 right-[-15%] size-[560px] rounded-full bg-accent/20 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-6xl px-4 pb-12 pt-14 sm:px-6 sm:pb-16 sm:pt-24">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-sm text-muted">
              <span className="size-2 rounded-full bg-accent" />
              {site.hero.eyebrow}
            </p>
            <h1 className="max-w-4xl font-display text-[1.9rem] font-semibold leading-[1.12] sm:text-5xl lg:text-7xl">
              {site.hero.titleStart} <span className="text-accent">{site.hero.titleAccent}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">{site.hero.text}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={site.contacts.telegram}
                className="rounded-full bg-accent px-6 py-3.5 font-medium text-accent-ink shadow-lg shadow-accent/25 transition hover:-translate-y-0.5"
              >
                Обсудить сайт
              </a>
              <a
                href="#works"
                className="rounded-full border border-line bg-surface px-6 py-3.5 font-medium transition hover:border-ink"
              >
                Посмотреть работы
              </a>
            </div>
            <dl className="mt-16 grid gap-4 sm:grid-cols-3">
              {site.stats.map((stat) => (
                <div key={stat.label} className="flex flex-col-reverse rounded-2xl border border-line bg-surface/80 p-5 backdrop-blur">
                  <dt className="mt-1 text-sm text-muted">{stat.label}</dt>
                  <dd className="font-display text-3xl font-semibold">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-6xl px-4 pb-20 pt-12 sm:px-6 sm:pb-28 sm:pt-16">
          <SectionTitle eyebrow="Услуги" title="Что я делаю" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {site.services.map((service, i) => (
              <article
                key={service.title}
                className="rounded-2xl border border-line bg-surface p-6 transition hover:-translate-y-1 hover:border-accent"
              >
                <p className="font-mono text-sm text-accent">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-4 font-display text-lg font-semibold">{service.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{service.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="works" className="border-y border-line bg-surface/60">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
            <SectionTitle eyebrow="Работы" title="Что уже сделано" />
            <div className="grid gap-6">
              {site.works.map((work) => (
                <article
                  key={work.title}
                  className="grid overflow-hidden rounded-3xl border border-line bg-surface lg:grid-cols-[1.35fr_1fr]"
                >
                  <a href={work.url} className="group flex items-center bg-accent-soft p-5 sm:p-8">
                    <div className="w-full overflow-hidden rounded-xl border border-line bg-surface shadow-2xl shadow-black/20 transition duration-500 group-hover:-translate-y-1">
                      <div className="flex h-7 items-center gap-1.5 px-3" aria-hidden="true">
                        <span className="size-2.5 rounded-full bg-line" />
                        <span className="size-2.5 rounded-full bg-line" />
                        <span className="size-2.5 rounded-full bg-line" />
                      </div>
                      <Image
                        src={`${base}/works/${work.image}`}
                        alt={`Главная страница сайта ${work.title}`}
                        width={1200}
                        height={750}
                        sizes="(min-width: 1024px) 640px, 100vw"
                        className="h-auto w-full"
                      />
                    </div>
                  </a>
                  <div className="flex flex-col p-6 sm:p-8">
                    <h3 className="font-display text-2xl font-semibold">{work.title}</h3>
                    <p className="mt-3 leading-relaxed text-muted">{work.summary}</p>
                    <ul className="mt-6 grid gap-2.5">
                      {work.done.map((item) => (
                        <li key={item} className="flex gap-2.5">
                          <CheckIcon />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {work.tags.map((tag) => (
                        <span key={tag} className="rounded-full bg-accent-soft px-3 py-1 text-sm text-ink">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={work.url}
                      className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-ink px-5 py-3 font-medium text-bg transition hover:opacity-85"
                    >
                      Открыть сайт <ArrowIcon />
                    </a>
                  </div>
                </article>
              ))}
              <a
                href="#contacts"
                className="flex flex-col items-center justify-center gap-2 rounded-3xl border-2 border-dashed border-line p-10 text-center transition hover:border-accent"
              >
                <span className="font-display text-xl font-semibold">Здесь может быть ваш проект</span>
                <span className="text-muted">Расскажите о нём — начнём с плана и примеров.</span>
              </a>
            </div>
          </div>
        </section>

        <section id="process" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <SectionTitle eyebrow="Как я работаю" title="Пять шагов до запуска" />
              <p className="-mt-4 max-w-md text-lg leading-relaxed text-muted sm:-mt-8">{site.processIntro}</p>
              <a
                href={site.contacts.telegram}
                className="mt-8 inline-flex rounded-full bg-accent px-6 py-3.5 font-medium text-accent-ink transition hover:-translate-y-0.5"
              >
                Начать с первого шага
              </a>
            </div>
            <ol className="grid">
              {site.process.map((step, i) => (
                <li key={step.title} className="relative grid grid-cols-[auto_1fr] gap-4 pb-6 last:pb-0 sm:gap-5 sm:pb-8">
                  {i < site.process.length - 1 && (
                    <span className="absolute left-[21px] top-12 bottom-1 w-px bg-line" aria-hidden="true" />
                  )}
                  <span className="relative grid size-11 place-items-center rounded-full bg-accent font-display text-base font-semibold text-accent-ink">
                    {i + 1}
                  </span>
                  <div className="rounded-2xl border border-line bg-surface p-5 transition hover:border-accent sm:p-6">
                    <h3 className="font-display text-lg font-semibold">{step.title}</h3>
                    <p className="mt-2 leading-relaxed text-muted">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="contacts" className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 sm:pb-28">
          <div className="cta-card relative overflow-hidden rounded-3xl px-6 py-14 sm:px-14 sm:py-20">
            <div
              className="pointer-events-none absolute -bottom-40 -right-24 size-[420px] rounded-full bg-sky-400/30 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative max-w-2xl">
              <h2 className="font-display text-[1.7rem] font-semibold leading-tight sm:text-5xl">{site.contacts.title}</h2>
              <p className="mt-4 text-lg opacity-75">{site.contacts.text}</p>
              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href={site.contacts.telegram}
                  className="rounded-full bg-white px-6 py-3.5 font-medium text-[#0b1530] transition hover:-translate-y-0.5"
                >
                  Написать в Telegram
                </a>
                <a
                  href={`mailto:${site.contacts.email}`}
                  className="rounded-full border border-current/30 px-6 py-3.5 font-medium transition hover:border-current"
                >
                  {site.contacts.email}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-muted sm:flex-row sm:justify-between sm:px-6">
          <p>
            © {new Date().getFullYear()} {site.name}
          </p>
          <p>Сайт сделан на Next.js и опубликован на GitHub Pages</p>
        </div>
      </footer>
    </>
  );
}
