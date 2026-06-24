import Image from "next/image";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import Faq from "@/components/Faq";

const services = [
  {
    name: "Класичний оздоровчо-лікувальний",
    desc: "Базова техніка для зняття напруги, покращення кровообігу та загального тонусу тіла.",
  },
  {
    name: "Мануальна терапія",
    desc: "Робота з суглобами та хребтом для відновлення рухливості й зменшення болю.",
  },
  {
    name: "Тайський масаж",
    desc: "Поєднання розтяжки й точкового впливу для глибокого розслаблення тіла.",
  },
  {
    name: "Ребозо масаж",
    desc: "Техніка з використанням тканини для м'якого обгортання й зняття глибокої напруги.",
  },
  {
    name: "Дитячий масаж",
    desc: "Бережний підхід для зміцнення опорно-рухового апарату дитини.",
  },
  {
    name: "Антицелюлітний масаж",
    desc: "Інтенсивна робота з проблемними зонами для покращення тонусу шкіри.",
  },
  {
    name: "Масаж обличчя",
    desc: "Лімфодренаж і робота з мімічними м'язами для свіжого, відпочилого вигляду.",
  },
  {
    name: "Стоун масаж",
    desc: "Гарячі камені для глибокого прогрівання та повного розслаблення.",
  },
  {
    name: "Масаж для вагітних",
    desc: "Безпечні техніки, що враховують стан і потреби майбутньої мами.",
  },
  {
    name: "Спортивний масаж",
    desc: "Підготовка мʼязів до навантажень і прискорене відновлення після них.",
  },
  {
    name: "Антистресовий масаж",
    desc: "Повільні, заколисуючі рухи для глибокого емоційного розвантаження.",
  },
  {
    name: "Лімфодренажний масаж",
    desc: "Стимуляція лімфотоку для зменшення набряків і відчуття легкості.",
  },
  {
    name: "Масаж бамбуковими паличками (креольський)",
    desc: "Розкочування тіла бамбуком для глибокого пророблення мʼязів.",
  },
  {
    name: "Іспанський масаж",
    desc: "Ритмічна техніка з акцентом на плавність і енергетичний баланс тіла.",
  },
  {
    name: "Масаж Ломі-Ломі",
    desc: "Гавайська практика з текучими рухами передпліч для глибокого розслаблення.",
  },
];

const principles = [
  {
    n: "01",
    title: "Індивідуальний підхід",
    text: "Кожен сеанс будується навколо вашого стану, цілей та чутливості тіла — без шаблонних схем.",
  },
  {
    n: "02",
    title: "Професійний досвід",
    text: "Понад 10 років практики та постійне поглиблення знань у різних техніках масажу.",
  },
  {
    n: "03",
    title: "Комфортна атмосфера",
    text: "Спокійний простір, де можна повністю розслабитися й довіритися процесу.",
  },
  {
    n: "04",
    title: "Комплексне відновлення",
    text: "Робота не лише з тілом, а з загальним самопочуттям, енергією та якістю сну.",
  },
];

const steps = [
  {
    n: "01",
    title: "Консультація",
    text: "Обговорюємо самопочуття, спосіб життя та запит, з яким ви прийшли.",
  },
  {
    n: "02",
    title: "Визначення потреб",
    text: "Підбираю техніку та інтенсивність, що відповідають саме вашому тілу.",
  },
  {
    n: "03",
    title: "Проведення процедури",
    text: "Сеанс проходить у спокійному темпі, з увагою до вашої реакції.",
  },
  {
    n: "04",
    title: "Рекомендації після сеансу",
    text: "Даю поради щодо відновлення, водного балансу та подальшого догляду.",
  },
];

const reviews = [
  {
    name: "Олена К.",
    text: "Найкращий масаж, який я отримувала у Києві. Тарас одразу відчуває, де тримається напруга, і працює дуже уважно.",
  },
  {
    name: "Андрій В.",
    text: "Звернувся через біль у спині після тренувань. Після кількох сеансів стало значно легше рухатись.",
  },
  {
    name: "Марина С.",
    text: "Атмосфера спокою з першої хвилини. Виходжу з сеансу немовби тіло почало дихати по-новому.",
  },
  {
    name: "Дмитро П.",
    text: "Дуже професійний підхід, пояснює кожен етап. Відчувається багаторічний досвід і турбота про клієнта.",
  },
  {
    name: "Юлія Т.",
    text: "Робила антицелюлітний курс — результат помітний вже після третього сеансу. Дуже задоволена.",
  },
  {
    name: "Сергій Л.",
    text: "Приходжу регулярно на антистресовий масаж. Це той час, коли можна повністю відключитися від справ.",
  },
];

export default function Home() {
  return (
    <main id="top" className="bg-ivory text-charcoal overflow-x-hidden">
      <Nav />

      {/* SECTION 1 — HERO */}
      <section className="relative min-h-screen flex flex-col lg:flex-row">
        <div className="relative w-full lg:w-1/2 h-[55vh] lg:h-screen grain">
          <Image
            src="/taras.jpg"
            alt="Тарас Шевельов, масажист у Києві"
            fill
            priority
            className="object-cover duotone"
          />
          <div className="duotone-wash" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
        </div>

        <div className="w-full lg:w-1/2 flex items-center bg-ivory px-6 md:px-14 lg:px-16 py-16 lg:py-0">
          <div className="max-w-xl">
            <Reveal>
              <p className="text-clay text-sm md:text-base tracking-[0.18em] uppercase mb-6">
                Масажист · Київ
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="text-[clamp(2.6rem,6vw,4.6rem)] leading-[0.98] tracking-tightest2 font-medium text-walnut">
                Тарас
                <br />
                Шевельов
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 text-xl md:text-2xl text-charcoal/80 tracking-tightest2">
                Професійний масаж у Києві
              </p>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-6 text-base md:text-lg leading-relaxed text-charcoal/65 max-w-md">
                Індивідуальний підхід до відновлення, здоров&rsquo;я та
                гармонії тіла. Багаторічний досвід роботи з різними
                техніками масажу та тілесними практиками.
              </p>
            </Reveal>
            <Reveal delay={320} className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-walnut text-ivory px-8 py-4 text-base hover:bg-charcoal transition-colors duration-300"
              >
                Записатися
              </a>
              <a
                href="https://www.instagram.com/taras_massage_sheveliov/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-walnut/30 text-walnut px-8 py-4 text-base hover:border-walnut transition-colors duration-300"
              >
                Зв&rsquo;язатися
              </a>
            </Reveal>
            <Reveal delay={400} className="mt-10 flex flex-wrap items-center gap-6 text-sm text-charcoal/60">
              <a href="tel:+380505974812" className="hover:text-clay transition-colors">
                +380 50 597 48 12
              </a>
              <span className="w-px h-4 bg-beige" />
              <a
                href="https://www.instagram.com/taras_massage_sheveliov/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-clay transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/taras.sheveljov?locale=uk_UA"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-clay transition-colors"
              >
                Facebook
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 2 — ПРО МЕНЕ */}
      <section id="about" className="py-24 md:py-36 px-6 md:px-10">
        <div className="mx-auto max-w-page grid lg:grid-cols-2 gap-16 lg:gap-24">
          <Reveal>
            <p className="text-clay text-sm tracking-[0.18em] uppercase mb-6">
              Про мене
            </p>
            <h2 className="text-[clamp(2.2rem,4.5vw,3.4rem)] leading-[1.02] tracking-tightest2 text-walnut">
              Досвід та підхід
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <div className="space-y-6 text-lg leading-relaxed text-charcoal/70">
              <p>
                Працюю масажистом з лютого 2016 року, постійно поглиблюючи
                знання в різних напрямках тілесних практик — від класичних
                технік до мануальної терапії та авторських підходів.
              </p>
              <p>
                Для мене важливо не просто виконати процедуру, а уважно
                почути тіло клієнта: зрозуміти, де тримається напруга, як
                рухається людина у повсякденному житті та що саме допоможе
                їй відновитися.
              </p>
              <p>
                Кожен сеанс — це індивідуальна робота, без шаблонів і
                поспіху, з фокусом на довгостроковий результат, а не
                миттєве полегшення.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-5">
              {[
                { num: "10+", label: "років досвіду" },
                { num: "1000+", label: "проведених сеансів" },
                { num: "15", label: "напрямків масажу" },
                { num: "100%", label: "індивідуальний підхід" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl2 bg-sand/60 px-6 py-7 shadow-card"
                >
                  <p className="text-3xl md:text-4xl tracking-tightest2 text-walnut">
                    {stat.num}
                  </p>
                  <p className="mt-2 text-sm text-charcoal/60">{stat.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ФІЛОСОФІЯ РОБОТИ */}
      <section id="philosophy" className="py-24 md:py-36">
        <div className="mx-auto max-w-page px-6 md:px-10 grid lg:grid-cols-2 gap-0 rounded-xl3 overflow-hidden shadow-soft">
          <Reveal className="relative h-[420px] lg:h-auto">
            <div className="relative w-full h-full min-h-[420px] grain">
              <Image
                src="/taras.jpg"
                alt="Спокійна атмосфера сеансу масажу"
                fill
                className="object-cover duotone"
              />
              <div className="duotone-wash" />
            </div>
          </Reveal>

          <Reveal delay={100} className="bg-sand/50 flex items-center">
            <div className="px-8 md:px-14 py-14 md:py-0">
              <p className="text-clay text-sm tracking-[0.18em] uppercase mb-6">
                Філософія роботи
              </p>
              <p className="text-[clamp(1.4rem,2.4vw,2rem)] leading-[1.35] tracking-tightest2 text-walnut">
                Тіло зберігає напругу, втому та наслідки щоденного стресу.
                Моє завдання — допомогти відновити природний баланс, зняти
                напруження та повернути відчуття легкості й комфорту.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-charcoal/65">
                Кожен сеанс починається з уважного ставлення до ваших
                потреб. Я підбираю техніки індивідуально, враховуючи стан
                організму, спосіб життя та цілі, з якими ви звертаєтесь.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-charcoal/65">
                Для мене масаж — це не лише процедура, а процес турботи про
                здоров&rsquo;я, самопочуття та якість життя.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 3 — НАПРЯМКИ МАСАЖУ */}
      <section id="services" className="py-24 md:py-36 px-6 md:px-10">
        <div className="mx-auto max-w-page">
          <Reveal className="max-w-2xl mb-16">
            <p className="text-clay text-sm tracking-[0.18em] uppercase mb-6">
              Послуги
            </p>
            <h2 className="text-[clamp(2.2rem,4.5vw,3.4rem)] leading-[1.02] tracking-tightest2 text-walnut">
              Напрямки масажу
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Reveal key={s.name} delay={(i % 3) * 80}>
                <div className="group h-full rounded-xl2 bg-white/60 border border-beige px-7 py-8 shadow-card hover:shadow-soft hover:-translate-y-1.5 hover:bg-white transition-all duration-500">
                  <h3 className="text-xl tracking-tightest2 text-walnut">
                    {s.name}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-charcoal/60">
                    {s.desc}
                  </p>
                  <span className="mt-5 inline-block h-px w-10 bg-taupe/50 group-hover:w-16 transition-all duration-500" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — Принципи моєї практики */}
      <section id="principles" className="py-24 md:py-36 px-6 md:px-10 bg-sand/40">
        <div className="mx-auto max-w-page">
          <Reveal className="max-w-2xl mb-16">
            <p className="text-clay text-sm tracking-[0.18em] uppercase mb-6">
              Цінності
            </p>
            <h2 className="text-[clamp(2.2rem,4.5vw,3.4rem)] leading-[1.02] tracking-tightest2 text-walnut">
              Принципи моєї практики
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-14">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 90}>
                <div className="flex gap-6 border-t border-taupe/30 pt-6">
                  <span className="text-clay text-sm tracking-tightest2 pt-1">
                    {p.n}
                  </span>
                  <div>
                    <h3 className="text-2xl tracking-tightest2 text-walnut">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-charcoal/60 max-w-md">
                      {p.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — ЯК ПРОХОДИТЬ СЕАНС */}
      <section id="process" className="py-24 md:py-36 px-6 md:px-10">
        <div className="mx-auto max-w-page">
          <Reveal className="max-w-2xl mb-16">
            <p className="text-clay text-sm tracking-[0.18em] uppercase mb-6">
              Процес
            </p>
            <h2 className="text-[clamp(2.2rem,4.5vw,3.4rem)] leading-[1.02] tracking-tightest2 text-walnut">
              Як проходить сеанс
            </h2>
          </Reveal>

          <div className="relative grid md:grid-cols-4 gap-10">
            <div className="hidden md:block absolute top-5 left-0 right-0 h-px bg-taupe/30" />
            {steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 100} className="relative">
                <div className="w-10 h-10 rounded-full bg-walnut text-ivory flex items-center justify-center text-sm relative z-10">
                  {i + 1}
                </div>
                <h3 className="mt-6 text-xl tracking-tightest2 text-walnut">
                  {step.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-charcoal/60">
                  {step.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — ВІДГУКИ */}
      <section id="reviews" className="py-24 md:py-36 px-6 md:px-10 bg-sand/40">
        <div className="mx-auto max-w-page">
          <Reveal className="max-w-2xl mb-16">
            <p className="text-clay text-sm tracking-[0.18em] uppercase mb-6">
              Відгуки
            </p>
            <h2 className="text-[clamp(2.2rem,4.5vw,3.4rem)] leading-[1.02] tracking-tightest2 text-walnut">
              Відгуки клієнтів
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <Reveal key={r.name} delay={(i % 3) * 90}>
                <div className="h-full rounded-xl2 bg-white/70 px-7 py-8 shadow-card">
                  <p className="text-[15px] leading-relaxed text-charcoal/70">
                    &laquo;{r.text}&raquo;
                  </p>
                  <p className="mt-6 text-sm tracking-tightest2 text-walnut">
                    {r.name}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — КОНТАКТИ */}
      <section id="contact" className="py-24 md:py-36 px-6 md:px-10">
        <div className="mx-auto max-w-page rounded-xl3 bg-walnut text-ivory px-8 md:px-16 py-16 md:py-24 text-center shadow-soft">
          <Reveal>
            <h2 className="text-[clamp(2.4rem,5vw,4rem)] leading-[1.02] tracking-tightest2">
              Запишіться на сеанс
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-6 text-lg text-ivory/70 max-w-xl mx-auto">
              Залиште повідомлення в Instagram, Facebook або зателефонуйте
              напряму — підберу для вас зручний час.
            </p>
          </Reveal>

          <Reveal delay={200} className="mt-12 flex flex-col items-center gap-4 text-lg">
            <a href="tel:+380505974812" className="hover:text-clay transition-colors">
              +380 50 597 48 12
            </a>
            <a
              href="https://www.instagram.com/taras_massage_sheveliov/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-clay transition-colors"
            >
              instagram.com/taras_massage_sheveliov
            </a>
            <a
              href="https://www.facebook.com/taras.sheveljov?locale=uk_UA"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-clay transition-colors"
            >
              facebook.com/taras.sheveljov
            </a>
          </Reveal>

          <Reveal delay={300} className="mt-12">
            <a
              href="tel:+380505974812"
              className="inline-flex items-center justify-center rounded-full bg-ivory text-walnut px-10 py-4 text-base hover:bg-clay hover:text-ivory transition-colors duration-300"
            >
              Записатися на сеанс
            </a>
          </Reveal>
        </div>
      </section>

      {/* SECTION 8 — FAQ */}
      <section id="faq" className="py-24 md:py-36 px-6 md:px-10">
        <div className="mx-auto max-w-3xl">
          <Reveal className="mb-14">
            <p className="text-clay text-sm tracking-[0.18em] uppercase mb-6">
              FAQ
            </p>
            <h2 className="text-[clamp(2.2rem,4.5vw,3.4rem)] leading-[1.02] tracking-tightest2 text-walnut">
              Часті запитання клієнтів
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <Faq />
          </Reveal>
        </div>
      </section>

      <footer className="px-6 md:px-10 py-12 border-t border-beige">
        <div className="mx-auto max-w-page flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-charcoal/50">
          <p>&copy; {new Date().getFullYear()} Тарас Шевельов · Масажист, Київ</p>
          <p>Лютий 2016 — Червень 2026</p>
        </div>
      </footer>
    </main>
  );
}
