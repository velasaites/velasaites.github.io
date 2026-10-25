import Image from "next/image";
import site from "@/content/site.json";
import { BrowserArt, BubbleArt, Embers, LaptopArt, PhoneArt } from "@/components/LineArt";
import LogoMark from "@/components/LogoMark";
import MobileMenu from "@/components/MobileMenu";
import ServiceVisual from "@/components/ServiceVisual";
import SpotlightGroup from "@/components/SpotlightGroup";
import ThemeToggle from "@/components/ThemeToggle";
import { ArrowIcon, CartIcon, CheckIcon, ClockIcon, LockIcon, MailIcon, PlusIcon, SparkIcon, TelegramIcon } from "@/components/icons";

// Префикс basePath (если сайт в подпапке) next/image к картинкам из public/ сам не добавляет.
const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nav = [
  { href: "#services", label: "Услуги" },
  { href: "#works", label: "Работы" },
  { href: "#process", label: "Как работаю" },
  { href: "#prices", label: "Цены" },
  { href: "#contacts", label: "Контакты" },
];

// Раскладка «бенто» в блоке услуг: какие карточки шире (на 2 колонки) или выше (на 2 ряда) остальных.
const serviceSpan: Record<string, string> = {
  catalog: "sm:col-span-2",
  cart: "lg:row-span-2",
  support: "sm:col-span-2",
};

const telegramHandle = site.contacts.telegram.replace(/^https:\/\/t\.me\//, "@");
const featured = site.works[0];

function SectionTitle({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="reveal mb-10 grid gap-5 sm:mb-14 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
      <div>
        <p className="mb-4 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.18em] text-accent">
          <span className="h-px w-8 bg-accent" aria-hidden="true" />
          {eyebrow}
        </p>
        <h2 className="font-display text-[1.85rem] font-semibold leading-[1.1] tracking-tight sm:text-5xl">{title}</h2>
      </div>
      {text && <p className="max-w-sm text-lg leading-relaxed text-muted">{text}</p>}
    </div>
  );
}

function BrowserBar({ url }: { url: string }) {
  return (
    <div className="flex h-8 items-center gap-3 border-b border-line bg-surface px-3" aria-hidden="true">
      <span className="flex gap-1.5">
        <span className="size-2.5 rounded-full bg-line" />
        <span className="size-2.5 rounded-full bg-line" />
        <span className="size-2.5 rounded-full bg-line" />
      </span>
      <span className="mx-auto flex items-center gap-1.5 rounded-md bg-surface-2 px-3 py-0.5 text-[11px] text-muted">
        <LockIcon className="size-3" />
        {new URL(url).host}
      </span>
      <span className="w-[42px]" />
    </div>
  );
}

// Витрина на первом экране: окно браузера с последней работой, телефон и «живые» карточки вокруг.
// При наведении на витрину окно и телефон плавно разворачиваются к зрителю (.showcase в globals.css).
function HeroShowcase({ work }: { work: (typeof site.works)[number] }) {
  return (
    <div className="showcase rise relative mx-auto w-full max-w-xl pb-6 [--d:200ms] lg:max-w-none">
      <div className="absolute inset-x-8 inset-y-10 rounded-full bg-accent/30 blur-3xl" aria-hidden="true" />
      <a href={work.url} className="relative block" aria-label={`Открыть сайт ${work.title}`}>
        <div className="tilt overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl shadow-black/30">
          <BrowserBar url={work.url} />
          <Image
            src={`${base}/works/${work.image}`}
            alt={`Главная страница сайта ${work.title}`}
            width={1200}
            height={750}
            loading="eager"
            fetchPriority="high"
            sizes="(min-width: 1024px) 640px, 100vw"
            className="h-auto w-full"
          />
        </div>
      </a>

      <div className="float pointer-events-none absolute -left-2 top-10 [--d:-1s] sm:-left-8" aria-hidden="true">
        <div className="flex items-center gap-3 rounded-2xl border border-line bg-surface/90 p-2.5 pr-4 shadow-xl shadow-black/15 backdrop-blur-xl">
          <span className="grid size-9 place-items-center rounded-xl bg-accent text-accent-ink">
            <CartIcon className="size-5" />
          </span>
          <span>
            <span className="block text-sm font-semibold">Новый заказ</span>
            <span className="block text-xs text-muted">Все детали — у вас на почте</span>
          </span>
        </div>
      </div>

      <div className="float pointer-events-none absolute -bottom-2 left-4 [--d:-4s] sm:left-10" aria-hidden="true">
        <div className="flex items-center gap-2 rounded-full border border-line bg-surface/90 py-2 pl-2 pr-4 text-sm font-medium shadow-xl shadow-black/15 backdrop-blur-xl">
          <span className="grid size-6 place-items-center rounded-full bg-accent-soft text-accent">
            <CheckIcon className="size-3.5" />
          </span>
          Удобно с телефона
        </div>
      </div>

      {"imageMobile" in work && (
        <div className="float pointer-events-none absolute -bottom-6 -right-1 w-[24%] [--d:-2.5s] sm:-right-6" aria-hidden="true">
          {/* Телефон в 3D: боковая грань даёт толщину, корпус со статус-строкой и «островком», снимок мобильной версии, блик на стекле */}
          <div className="phone-3d relative">
            <span className="phone-edge" />
            <div className="relative rounded-[1.6rem] bg-[#0b0f1c] p-[4px] shadow-2xl shadow-black/50 ring-1 ring-white/15">
              <div className="relative overflow-hidden rounded-[1.35rem] bg-[#121212]">
                <div className="flex aspect-[10/1] items-center justify-center">
                  <span className="h-[46%] w-[32%] rounded-full bg-black" />
                </div>
                <Image
                  src={`${base}/works/${work.imageMobile}`}
                  alt=""
                  width={480}
                  height={1039}
                  sizes="(min-width: 1024px) 170px, 25vw"
                  className="h-auto w-full"
                />
                <span className="phone-glare absolute inset-0" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-30 px-3 pt-3 sm:px-4">
        <div className="nav-pill mx-auto flex h-14 max-w-6xl items-center justify-between gap-2 rounded-full border border-line bg-surface/75 pl-3.5 pr-2 shadow-lg shadow-black/5 backdrop-blur-xl sm:gap-4 sm:pl-5">
          <a href="#top" className="flex min-w-0 items-center gap-2 font-display text-base font-semibold uppercase tracking-[0.06em] sm:gap-2.5">
            <LogoMark className="size-8 shrink-0" />
            <span className="truncate">{site.name}</span>
          </a>
          <nav className="hidden items-center gap-1 text-sm text-muted lg:flex">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="whitespace-nowrap rounded-full px-4 py-2 transition hover:bg-accent-soft hover:text-ink">
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            <ThemeToggle />
            <a
              href={site.contacts.telegram}
              className="group inline-flex items-center gap-1.5 rounded-full bg-ink px-3.5 py-2.5 text-sm font-medium text-bg transition hover:opacity-90 sm:px-4"
            >
              Написать
              <ArrowIcon className="size-3.5 transition duration-300 group-hover:rotate-45" />
            </a>
            <MobileMenu items={nav} />
          </div>
        </div>
      </header>

      <main id="top" className="flex-1">
        <section className="relative overflow-hidden pt-28 sm:pt-36">
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <div className="hero-grid absolute inset-0" />
            <div className="blob absolute -top-56 right-[-12%] size-[640px] rounded-full bg-accent/25 blur-3xl" />
            <div className="blob absolute -left-48 top-1/3 size-[460px] rounded-full bg-accent-2/15 blur-3xl [animation-delay:-8s]" />
          </div>

          <div className="relative mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-24">
            <p className="rise mb-7 inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/70 py-1 pl-2.5 pr-3.5 text-sm text-muted backdrop-blur">
              <span className="live-dot size-2 rounded-full bg-accent" />
              {site.hero.eyebrow}
            </p>
            <h1 className="rise max-w-5xl font-display text-[2.1rem] font-semibold leading-[1.06] tracking-tight [--d:80ms] sm:text-6xl lg:text-[5.25rem]">
              {site.hero.titleStart} <span className="text-gradient">{site.hero.titleAccent}</span>
            </h1>

            <div className="mt-10 grid items-center gap-14 lg:mt-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
              <div>
                <p className="rise max-w-xl text-lg leading-relaxed text-muted [--d:160ms] sm:text-xl">{site.hero.text}</p>
                <div className="rise mt-9 flex flex-wrap gap-3 [--d:240ms]">
                  <a
                    href={site.contacts.telegram}
                    className="group inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-accent px-6 py-3.5 font-medium text-accent-ink shadow-lg shadow-accent/30 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/40"
                  >
                    Обсудить сайт
                    <ArrowIcon className="size-4 transition duration-300 group-hover:rotate-45" />
                  </a>
                  <a
                    href="#works"
                    className="whitespace-nowrap rounded-full border border-line bg-surface/80 px-6 py-3.5 font-medium backdrop-blur transition hover:border-ink"
                  >
                    Посмотреть работы
                  </a>
                </div>
              </div>
              {featured && <HeroShowcase work={featured} />}
            </div>

            <dl className="rise mt-16 grid overflow-hidden rounded-3xl border border-line bg-surface/70 backdrop-blur [--d:320ms] sm:mt-20 sm:grid-cols-3">
              {site.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-row-reverse items-baseline justify-end gap-4 border-line p-5 not-last:border-b sm:flex-col-reverse sm:items-start sm:gap-1.5 sm:p-7 sm:not-last:border-r sm:not-last:border-b-0"
                >
                  <dt className="text-sm text-muted">{stat.label}</dt>
                  <dd className="w-32 shrink-0 whitespace-nowrap font-display text-xl font-semibold sm:w-auto sm:text-4xl">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <div className="marquee overflow-hidden border-y border-line bg-surface/50 py-5" aria-label="Что я делаю">
          <div className="marquee-track flex w-max">
            {[0, 1, 2, 3].map((copy) => (
              <ul key={copy} className="flex shrink-0 items-center" aria-hidden={copy > 0}>
                {site.services.map((service) => (
                  <li key={service.title} className="flex items-center gap-8 pr-8 font-display text-lg font-medium text-muted sm:text-xl">
                    {service.title}
                    <SparkIcon className="size-4 text-accent" />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <section id="services" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <SectionTitle eyebrow="Услуги" title="Что я делаю" text={site.servicesIntro} />
          <SpotlightGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {site.services.map((service, i) => (
              <article
                key={service.title}
                className={`spot reveal group flex flex-col rounded-3xl border border-line bg-surface p-2.5 ${serviceSpan[service.visual] ?? ""}`}
              >
                <ServiceVisual kind={service.visual} />
                <div className="p-3.5 pt-5 sm:p-4 sm:pt-6">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-display text-lg font-semibold">{service.title}</h3>
                    <span className="font-mono text-sm text-muted">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <p className="mt-2 leading-relaxed text-muted">{service.text}</p>
                </div>
              </article>
            ))}
          </SpotlightGroup>
        </section>

        <section id="works" className="border-y border-line bg-surface/50">
          <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
            <div className="absolute right-6 top-12 hidden w-[340px] lg:block xl:-right-6 xl:w-[420px]" aria-hidden="true">
              <BrowserArt className="w-full [mask-image:linear-gradient(to_bottom,#000_50%,transparent_92%)]" />
              <Embers />
            </div>
            <SectionTitle eyebrow="Работы" title="Что уже сделано" />
            <div className="relative grid gap-6">
              {site.works.map((work) => (
                <article
                  key={work.title}
                  className="reveal group grid overflow-hidden rounded-[2rem] border border-line bg-surface lg:grid-cols-[1.35fr_1fr]"
                >
                  <a href={work.url} className="relative flex items-center overflow-hidden p-5 sm:p-10">
                    <div className="work-backdrop absolute inset-0" aria-hidden="true" />
                    <div className="relative w-full overflow-hidden rounded-xl border border-line bg-surface shadow-2xl shadow-black/25 transition duration-700 group-hover:-translate-y-1.5 group-hover:scale-[1.015]">
                      <BrowserBar url={work.url} />
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
                  <div className="flex flex-col p-6 sm:p-10">
                    <p className="text-sm text-muted">{new URL(work.url).host}</p>
                    <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight sm:text-3xl">{work.title}</h3>
                    <p className="mt-3 leading-relaxed text-muted">{work.summary}</p>
                    <ul className="mt-6 grid gap-2.5">
                      {work.done.map((item) => (
                        <li key={item} className="flex gap-2.5">
                          <CheckIcon className="mt-0.5 size-5 shrink-0 text-accent" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {work.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-line bg-surface-2 px-3 py-1 text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={work.url}
                      className="group/btn mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-ink px-5 py-3 font-medium text-bg transition hover:opacity-90"
                    >
                      Открыть сайт <ArrowIcon className="size-4 transition duration-300 group-hover/btn:rotate-45" />
                    </a>
                  </div>
                </article>
              ))}
              <a
                href="#contacts"
                className="reveal group flex flex-col items-start gap-5 rounded-[2rem] border-2 border-dashed border-line p-7 transition hover:border-accent hover:bg-accent-soft/40 sm:flex-row sm:items-center sm:p-10"
              >
                <span className="grid size-14 shrink-0 place-items-center rounded-full bg-accent text-accent-ink shadow-lg shadow-accent/30 transition duration-500 group-hover:rotate-90">
                  <PlusIcon className="size-6" />
                </span>
                <span className="flex-1">
                  <span className="block font-display text-xl font-semibold">Здесь может быть ваш проект</span>
                  <span className="mt-1 block text-muted">Расскажите о нём — начнём с плана и примеров.</span>
                </span>
                <span className="hidden size-12 place-items-center rounded-full border border-line transition group-hover:border-accent group-hover:text-accent sm:grid">
                  <ArrowIcon className="size-5" />
                </span>
              </a>
            </div>
          </div>
        </section>

        <section id="process" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <SectionTitle eyebrow="Как я работаю" title="Пять шагов до запуска" />
              <p className="-mt-4 max-w-md text-lg leading-relaxed text-muted sm:-mt-8">{site.processIntro}</p>
              <a
                href={site.contacts.telegram}
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 font-medium text-accent-ink shadow-lg shadow-accent/25 transition hover:-translate-y-0.5"
              >
                Начать с первого шага
                <ArrowIcon className="size-4 transition duration-300 group-hover:rotate-45" />
              </a>
              <div className="relative mt-14 hidden max-w-sm lg:block" aria-hidden="true">
                <LaptopArt className="w-full" />
                <Embers />
              </div>
            </div>
            <ol className="grid">
              {site.process.map((step, i) => (
                <li key={step.title} className="relative grid grid-cols-[auto_1fr] gap-4 pb-6 last:pb-0 sm:gap-5 sm:pb-8">
                  {i < site.process.length - 1 && (
                    <span className="step-track absolute bottom-0 left-[21px] top-11 w-px bg-line" aria-hidden="true">
                      <span className="step-fill absolute inset-0 origin-top bg-gradient-to-b from-accent to-accent-2" />
                    </span>
                  )}
                  <span className="step-dot relative grid size-11 place-items-center rounded-full border border-accent bg-accent font-display text-base font-semibold text-accent-ink">
                    {i + 1}
                  </span>
                  <div className="reveal rounded-2xl border border-line bg-surface p-5 transition hover:border-accent sm:p-6">
                    <h3 className="font-display text-lg font-semibold">{step.title}</h3>
                    <p className="mt-2 leading-relaxed text-muted">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="prices" className="border-y border-line bg-surface/50">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
            <SectionTitle eyebrow="Цены" title="Сколько стоит сайт" text={site.pricingIntro} />
            <SpotlightGroup className="grid gap-4 lg:grid-cols-3">
              {site.pricing.map((plan) => {
                const featured = "featured" in plan && plan.featured;
                return (
                  <article
                    key={plan.title}
                    className={`spot reveal flex flex-col rounded-3xl border p-6 sm:p-8 ${
                      featured ? "border-accent bg-gradient-to-b from-accent-soft to-surface shadow-xl shadow-accent/10" : "border-line bg-surface"
                    }`}
                  >
                    <h3 className="font-display text-lg font-semibold">{plan.title}</h3>
                    <p className="mt-2 leading-relaxed text-muted">{plan.text}</p>
                    <p className="mt-7 whitespace-nowrap font-display text-[2rem] font-semibold leading-none tracking-tight sm:text-4xl">
                      {plan.price}
                    </p>
                    <p className="mt-3 flex items-center gap-2 text-sm text-muted">
                      <ClockIcon className="size-4 text-accent" />
                      Срок — {plan.term}
                    </p>
                    <ul className="mt-7 grid gap-3 border-t border-line pt-7">
                      {plan.features.map((item) => (
                        <li key={item} className="flex gap-2.5">
                          <CheckIcon className="mt-0.5 size-5 shrink-0 text-accent" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto pt-8">
                      <a
                        href={site.contacts.telegram}
                        className={`group/btn flex items-center justify-center gap-2 rounded-full px-5 py-3.5 font-medium transition ${
                          featured
                            ? "bg-accent text-accent-ink shadow-lg shadow-accent/30 hover:-translate-y-0.5"
                            : "border border-line hover:border-accent hover:text-accent"
                        }`}
                      >
                        Обсудить проект
                        <ArrowIcon className="size-4 transition duration-300 group-hover/btn:rotate-45" />
                      </a>
                    </div>
                  </article>
                );
              })}
            </SpotlightGroup>
            <ul className="reveal mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3 text-muted">
              {site.pricingNote.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckIcon className="size-4 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <SectionTitle eyebrow="Вопросы" title="Частые вопросы" />
              <p className="-mt-4 max-w-md text-lg leading-relaxed text-muted sm:-mt-8">
                Не нашли ответ? Напишите — отвечу лично.
              </p>
              <a
                href={site.contacts.telegram}
                className="group mt-8 inline-flex items-center gap-2 rounded-full border border-line px-6 py-3.5 font-medium transition hover:border-accent hover:text-accent"
              >
                <TelegramIcon className="size-5" />
                Задать вопрос
              </a>
              <div className="relative mt-12 hidden h-64 max-w-sm lg:block" aria-hidden="true">
                <PhoneArt className="absolute left-2 top-0 w-32" />
                <BubbleArt className="absolute left-[9.5rem] top-4 w-44" />
                <Embers />
              </div>
            </div>
            <div className="grid gap-3">
              {site.faq.map((item) => (
                <details key={item.q} className="faq reveal group rounded-2xl border border-line bg-surface transition open:border-accent">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-display font-semibold sm:p-6 sm:text-lg [&::-webkit-details-marker]:hidden">
                    {item.q}
                    <span className="grid size-9 shrink-0 place-items-center rounded-full border border-line text-accent transition duration-300 group-open:rotate-45 group-open:border-accent group-open:bg-accent group-open:text-accent-ink">
                      <PlusIcon className="size-4" />
                    </span>
                  </summary>
                  <p className="px-5 pb-5 leading-relaxed text-muted sm:px-6 sm:pb-6">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contacts" className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 sm:pb-28">
          <div className="cta-card reveal relative overflow-hidden rounded-[2rem] px-6 py-16 sm:px-14 sm:py-24">
            <div className="cta-glow" aria-hidden="true" />
            <div className="cta-grid absolute inset-0" aria-hidden="true" />
            <div className="relative mx-auto max-w-3xl text-center">
              <h2 className="font-display text-[1.9rem] font-semibold leading-[1.08] tracking-tight sm:text-6xl">{site.contacts.title}</h2>
              <p className="mx-auto mt-5 max-w-xl text-lg text-white/75">{site.contacts.text}</p>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <a
                  href={site.contacts.telegram}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-medium text-[#0b1530] shadow-xl shadow-black/20 transition hover:-translate-y-0.5"
                >
                  <TelegramIcon className="size-5 text-[#229ed9]" />
                  Написать в Telegram
                </a>
                <a
                  href={`mailto:${site.contacts.email}`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3.5 font-medium backdrop-blur transition hover:border-white/70"
                >
                  <MailIcon className="size-5" />
                  {site.contacts.email}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative overflow-hidden border-t border-line">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 pt-14 sm:px-6 md:grid-cols-[1fr_auto_auto] md:gap-x-16 lg:gap-x-24">
          <div>
            <a href="#top" className="inline-flex items-center gap-2.5 font-display text-base font-semibold uppercase tracking-[0.06em]">
              <LogoMark className="size-8" />
              {site.name}
            </a>
            <p className="mt-4 max-w-xs leading-relaxed text-muted">{site.description}</p>
          </div>
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-muted">Разделы</p>
            <ul className="grid gap-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="transition hover:text-accent">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-muted">Связаться</p>
            <ul className="grid gap-2.5">
              <li>
                <a href={site.contacts.telegram} className="inline-flex items-center gap-2 transition hover:text-accent">
                  <TelegramIcon className="size-4 text-muted" />
                  {telegramHandle}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.contacts.email}`} className="inline-flex items-center gap-2 whitespace-nowrap transition hover:text-accent">
                  <MailIcon className="size-4 shrink-0 text-muted" />
                  {site.contacts.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="wordmark mt-8 select-none text-center font-display font-bold uppercase leading-[0.8] tracking-tight" aria-hidden="true">
          {site.name}
        </p>
        <div className="border-t border-line">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-sm text-muted sm:flex-row sm:justify-between sm:px-6">
            <p>
              © {new Date().getFullYear()} {site.name}
            </p>
            <p>Сайт сделан на Next.js и опубликован на GitHub Pages</p>
          </div>
        </div>
      </footer>
    </>
  );
}
