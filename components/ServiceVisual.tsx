import { Fragment } from "react";
import { CheckIcon, LockIcon } from "@/components/icons";

// Мини-иллюстрации для карточек услуг. Какую рисовать — поле services[].visual в content/site.json.
// Карточка услуги должна быть с классом group: часть элементов оживает при наведении.

function Bar({ className }: { className: string }) {
  return <span className={`block h-1.5 rounded-full ${className}`} />;
}

function Thumb({ className = "" }: { className?: string }) {
  return <span className={`block rounded-lg bg-gradient-to-br from-accent-soft to-accent/35 ${className}`} />;
}

function Catalog() {
  return (
    <>
      <div className="absolute inset-x-5 top-5 flex gap-2 text-[11px]">
        <span className="rounded-full bg-accent px-3 py-1 font-medium text-accent-ink">Все</span>
        <span className="rounded-full border border-line bg-surface px-3 py-1 text-muted">Новинки</span>
        <span className="rounded-full border border-line bg-surface px-3 py-1 text-muted">Хиты</span>
      </div>
      <div className="absolute inset-x-5 top-14 grid grid-cols-3 gap-3 sm:grid-cols-4">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className={`rounded-xl border border-line bg-surface p-2 shadow-sm transition duration-500 ${
              i === 1 ? "group-hover:-translate-y-2 group-hover:shadow-lg" : ""
            } ${i === 3 ? "hidden sm:block" : ""}`}
          >
            <Thumb className="aspect-[4/3]" />
            <Bar className="mt-2 w-3/4 bg-line" />
            <Bar className="mt-1.5 w-1/3 bg-accent/60" />
          </div>
        ))}
      </div>
    </>
  );
}

// Корзина растягивается на всю высоту карточки (в широкой сетке она на два ряда),
// поэтому вёрстка здесь потоком, а не absolute: уведомление прижато к низу и не наезжает на корзину.
function Cart() {
  return (
    <div className="relative flex flex-1 flex-col justify-between gap-4 p-5">
      <div className="rounded-2xl border border-line bg-surface p-4 shadow-sm">
        <div className="flex items-center justify-between text-xs font-medium">
          <span>Корзина</span>
          <span className="rounded-full bg-accent-soft px-2 py-0.5 text-accent">3</span>
        </div>
        {["w-3/5", "w-1/2", "w-2/3"].map((w) => (
          <div key={w} className="mt-3 flex items-center gap-3">
            <Thumb className="size-9 shrink-0" />
            <span className="flex-1">
              <Bar className={`${w} bg-line`} />
              <Bar className="mt-1.5 w-1/4 bg-line" />
            </span>
            <Bar className="w-8 bg-accent/50" />
          </div>
        ))}
        <div className="mt-4 flex items-center justify-between border-t border-line pt-3 text-xs">
          <span className="text-muted">Итого</span>
          <span className="h-2 w-14 rounded-full bg-ink/80" />
        </div>
        <div className="mt-3 rounded-xl bg-accent py-2 text-center text-xs font-medium text-accent-ink">Оформить заказ</div>
      </div>
      <div className="flex items-center gap-3 rounded-2xl border border-line bg-surface p-3 shadow-lg transition duration-500 group-hover:-translate-y-1.5">
        <span className="grid size-8 shrink-0 place-items-center rounded-full bg-accent-soft text-accent">
          <CheckIcon className="size-4" />
        </span>
        <span className="min-w-0">
          <span className="block text-xs font-semibold">Заказ оформлен</span>
          <span className="block truncate text-[11px] text-muted">Письмо с деталями — у вас на почте</span>
        </span>
      </div>
    </div>
  );
}

function Configurator() {
  return (
    <>
      <div className="absolute inset-x-5 top-5 flex items-center gap-1.5">
        {[1, 2, 3, 4].map((n) => (
          <Fragment key={n}>
            <span
              className={`grid size-6 shrink-0 place-items-center rounded-full text-[11px] font-semibold ${
                n <= 2 ? "bg-accent text-accent-ink" : "border border-line bg-surface text-muted"
              }`}
            >
              {n}
            </span>
            {n < 4 && <span className={`h-px flex-1 ${n < 2 ? "bg-accent" : "bg-line"}`} />}
          </Fragment>
        ))}
      </div>
      <div className="absolute left-1/2 top-14 grid w-24 -translate-x-1/2 grid-cols-2 gap-1.5">
        <span className="aspect-square rounded-lg bg-accent" />
        <span className="aspect-square rounded-lg bg-accent/70" />
        <span className="aspect-square rounded-lg border-2 border-dashed border-accent/50 transition duration-500 group-hover:border-transparent group-hover:bg-accent/45" />
        <span className="aspect-square rounded-lg border-2 border-dashed border-line" />
      </div>
      <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 text-[11px] font-medium shadow-sm">
        Итог
        <span className="h-1.5 w-10 rounded-full bg-accent" />
      </div>
    </>
  );
}

function Mobile() {
  return (
    <div className="absolute left-1/2 top-5 w-32 -translate-x-1/2 rounded-[1.6rem] border border-line bg-surface p-2 shadow-xl transition duration-500 group-hover:-translate-y-2">
      <span className="mx-auto mb-2 block h-1.5 w-10 rounded-full bg-line" />
      <Thumb className="aspect-[4/3] rounded-xl" />
      <Bar className="mt-2.5 w-4/5 bg-line" />
      <Bar className="mt-1.5 w-1/2 bg-line" />
      <span className="mt-3 block rounded-full bg-accent py-1.5" />
      <Thumb className="mt-2.5 aspect-[4/3] rounded-xl" />
    </div>
  );
}

function Launch() {
  return (
    <>
      <div className="absolute inset-x-5 top-5 flex items-center gap-1.5 rounded-full border border-line bg-surface px-3 py-2 text-xs shadow-sm">
        <LockIcon className="size-3.5 shrink-0 text-accent" />
        <span className="text-muted">https://</span>
        <span className="truncate font-medium">ваш-сайт.ru</span>
      </div>
      <div className="absolute inset-x-5 top-[4.25rem] flex gap-3 rounded-2xl border border-line bg-surface p-3 shadow-sm transition duration-500 group-hover:-translate-y-1">
        <span className="w-1 shrink-0 rounded-full bg-accent" />
        <div className="flex-1">
          <span className="block text-[11px] font-semibold text-accent">ваш-сайт.ru</span>
          <Bar className="mt-1.5 w-4/5 bg-line" />
          <Bar className="mt-1.5 w-3/5 bg-line" />
          <Thumb className="mt-2.5 aspect-[2/1]" />
        </div>
      </div>
    </>
  );
}

function Support() {
  return (
    <div className="absolute inset-x-5 top-5 flex flex-col gap-2.5 text-[13px] leading-snug">
      <p className="ml-auto max-w-[80%] rounded-2xl rounded-br-md bg-accent px-3.5 py-2 text-accent-ink">
        Добавьте, пожалуйста, новые фото и цены
      </p>
      <p className="max-w-[80%] rounded-2xl rounded-bl-md border border-line bg-surface px-3.5 py-2">
        Готово — уже на сайте ✓
      </p>
      <p className="flex w-fit items-center gap-1 rounded-2xl rounded-bl-md border border-line bg-surface px-3.5 py-3" aria-hidden="true">
        <span className="size-1.5 animate-bounce rounded-full bg-muted" />
        <span className="size-1.5 animate-bounce rounded-full bg-muted [animation-delay:150ms]" />
        <span className="size-1.5 animate-bounce rounded-full bg-muted [animation-delay:300ms]" />
      </p>
    </div>
  );
}

const visuals: Record<string, () => React.ReactNode> = {
  catalog: Catalog,
  cart: Cart,
  configurator: Configurator,
  mobile: Mobile,
  launch: Launch,
  support: Support,
};

export default function ServiceVisual({ kind }: { kind?: string }) {
  const Visual = kind ? visuals[kind] : undefined;
  return (
    <div
      className={`dots-bg relative overflow-hidden rounded-2xl border border-line bg-surface-2 ${
        kind === "cart" ? "flex flex-1 flex-col" : "h-44"
      }`}
      aria-hidden="true"
    >
      {Visual && <Visual />}
      {kind !== "cart" && (
        <span className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-surface-2 to-transparent" />
      )}
    </div>
  );
}
