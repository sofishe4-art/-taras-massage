"use client";

import { useState } from "react";

const items = [
  {
    q: "Скільки триває сеанс?",
    a: "Стандартний сеанс триває 60–90 хвилин залежно від обраної техніки та зони роботи. Тривалість завжди узгоджується заздалегідь, щоб приділити достатньо часу кожній ділянці тіла.",
  },
  {
    q: "Який масаж підійде саме мені?",
    a: "Під час консультації я зʼясовую ваш стан, рівень навантажень та мету — розслаблення, відновлення чи робота з конкретною проблемою — і підбираю техніку індивідуально.",
  },
  {
    q: "Чи потрібна попередня підготовка?",
    a: "Спеціальна підготовка не потрібна. Достатньо прийти за кілька хвилин до сеансу, уникати щільного прийому їжі безпосередньо перед процедурою та повідомити про самопочуття.",
  },
  {
    q: "Скільки процедур потрібно для результату?",
    a: "Це залежить від запиту: для загального розслаблення часто достатньо одного сеансу, для роботи з хронічною напругою рекомендую курс із 5–10 процедур з регулярністю 1–2 рази на тиждень.",
  },
  {
    q: "Чи є протипоказання?",
    a: "Так, як і у будь-якій тілесній практиці. Гострі запальні процеси, висока температура, деякі шкірні захворювання та окремі стани потребують консультації лікаря перед сеансом — про це варто повідомити заздалегідь.",
  },
  {
    q: "Як записатися на прийом?",
    a: "Найпростіше — написати в Instagram, Facebook або зателефонувати за номером, вказаним у контактах. Я підберу час, який вам зручний.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-beige">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.q}>
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between gap-6 py-7 text-left group"
            >
              <span className="text-xl md:text-2xl tracking-tightest2 text-walnut group-hover:text-clay transition-colors duration-300">
                {item.q}
              </span>
              <span
                className={`shrink-0 w-9 h-9 rounded-full border border-taupe/50 flex items-center justify-center text-walnut transition-transform duration-500 ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>
            <div
              className="overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{ maxHeight: isOpen ? "240px" : "0px" }}
            >
              <p className="pb-7 pr-12 text-charcoal/70 text-base md:text-lg leading-relaxed">
                {item.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
