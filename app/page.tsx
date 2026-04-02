import Image from "next/image";
import type { ReactNode } from "react";
import {
  BadgeCheck,
  Heart,
  Leaf,
  Menu,
  Search,
  ShieldCheck,
  ShoppingBag,
  Sofa,
  Star,
  Truck,
} from "lucide-react";

const navItems = ["Главная", "Каталог", "Коллекции", "О нас", "Контакты"];

const features = [
  {
    title: "Натуральные материалы",
    description: "Массив дерева, лен, камень и тактильно приятные фактуры.",
    icon: Leaf,
  },
  {
    title: "Современный дизайн",
    description: "Лаконичные формы, продуманные детали и баланс пропорций.",
    icon: Sofa,
  },
  {
    title: "Доставка по всей стране",
    description: "Бережная логистика и удобные интервалы доставки.",
    icon: Truck,
  },
  {
    title: "Гарантия качества",
    description: "Контроль на каждом этапе и официальная гарантия бренда.",
    icon: ShieldCheck,
  },
];

const products = [
  {
    title: 'Кресло "Элегант"',
    description: "Мягкая посадка, округлая форма и износостойкая обивка.",
    price: "19 900 ₽",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
    badge: "Хит",
    rating: 4.9,
  },
  {
    title: 'Диван "Норфолк"',
    description: "Глубокое сиденье и спокойная палитра для современной гостиной.",
    price: "79 900 ₽",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80",
    badge: "Хит",
    rating: 4.8,
  },
  {
    title: 'Шкаф "Лофт"',
    description: "Комбинация дерева и стекла, продуманная система хранения.",
    price: "64 900 ₽",
    image:
      "https://images.unsplash.com/photo-1616628182509-6b871c9d0c16?auto=format&fit=crop&w=1200&q=80",
    badge: "Новинка",
    rating: 4.7,
  },
  {
    title: 'Стол "Норд"',
    description: "Сдержанный дизайн и премиальные материалы для столовой зоны.",
    price: "54 900 ₽",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
    badge: "Хит",
    rating: 4.9,
  },
];

const collections = [
  {
    title: "Скандинавская коллекция",
    image:
      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Минимализм",
    image:
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Тёплое дерево",
    image:
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=1200&q=80",
  },
];

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#d8cec4]/60 bg-[#f8f3ed]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 md:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="rounded-xl bg-[#2d2621] px-2 py-1 text-sm font-semibold text-[#f6eee5]">FM</div>
          <p className="text-lg font-semibold tracking-wide text-[#2b2521]">Furniture Maison</p>
        </div>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm font-medium text-[#4b443e] transition hover:text-[#1f1915]"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <IconButton icon={<Search className="h-4 w-4" />} label="Поиск" />
          <IconButton icon={<Heart className="h-4 w-4" />} label="Избранное" />
          <button className="relative inline-flex h-10 items-center justify-center rounded-xl border border-[#cec0b2] bg-[#f4ede4] px-3 text-[#2b2521] transition hover:-translate-y-0.5 hover:shadow-md">
            <ShoppingBag className="h-4 w-4" />
            <span className="ml-2 hidden text-sm font-medium sm:inline">Корзина</span>
            <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-[#2d2621] px-1 text-xs font-semibold text-[#f8f3ed]">
              3
            </span>
          </button>
          <button className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#d8cec4] lg:hidden">
            <Menu className="h-5 w-5 text-[#2d2621]" />
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pt-8 md:px-6 lg:px-8 lg:pt-12">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_#ffffff_0%,_#f6efe6_45%,_#ece3d9_100%)]" />
      <div className="mx-auto grid w-full max-w-7xl gap-8 rounded-[2rem] border border-white/60 bg-white/30 p-4 shadow-[0_30px_100px_-45px_rgba(35,20,10,0.45)] backdrop-blur-sm md:p-7 lg:grid-cols-[1.02fr_1fr] lg:items-center">
        <div className="space-y-6 lg:space-y-8">
          <span className="inline-flex items-center rounded-full border border-[#d7cabd] bg-white/60 px-4 py-1 text-sm font-medium text-[#5b524b]">
            Премиальная коллекция 2026
          </span>
          <h1 className="max-w-xl text-4xl font-semibold leading-tight tracking-tight text-[#2a241f] md:text-5xl lg:text-6xl">
            Мебель, которая формирует характер интерьера
          </h1>
          <p className="max-w-lg text-base leading-relaxed text-[#6a625c] md:text-lg">
            Премиальная мебель из натуральных материалов для вашего комфорта: чистая эстетика,
            продуманная эргономика и современный стиль для дома с характером.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <button className="rounded-2xl bg-[#2f2721] px-6 py-3 text-sm font-medium text-[#f8f1e8] transition duration-300 hover:-translate-y-0.5 hover:bg-[#1f1915] hover:shadow-xl">
              Смотреть каталог
            </button>
            <button className="rounded-2xl border border-[#d4c6b8] bg-[#f5eee7] px-6 py-3 text-sm font-medium text-[#352e28] transition duration-300 hover:-translate-y-0.5 hover:bg-[#efe4d8]">
              Новая коллекция
            </button>
          </div>
          <div className="inline-flex items-start gap-3 rounded-2xl border border-white/60 bg-[#f9f4ee]/80 p-4 shadow-sm">
            <BadgeCheck className="mt-1 h-5 w-5 text-[#9f7f62]" />
            <div>
              <p className="font-medium text-[#3a332d]">Индивидуальный подбор мебели</p>
              <p className="text-sm text-[#6f6660]">Поможем собрать гармоничное пространство под ваш интерьер.</p>
            </div>
          </div>
        </div>

        <div className="relative min-h-[320px] overflow-hidden rounded-[1.75rem] md:min-h-[460px]">
          <Image
            src="https://images.unsplash.com/photo-1616594039964-3c8a49322d77?auto=format&fit=crop&w=1800&q=80"
            alt="Современный интерьер"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#19120d]/15 via-transparent to-white/30" />
          <div className="absolute bottom-6 right-6 rounded-2xl border border-white/40 bg-[#f9f4ee]/85 px-5 py-4 shadow-xl backdrop-blur-sm">
            <p className="text-sm uppercase tracking-[0.2em] text-[#8f8175]">Luxury interior</p>
            <p className="mt-1 text-xl font-semibold text-[#2e2722]">Новая эстетика уюта</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className="px-4 py-10 md:px-6 md:py-14 lg:px-8">
      <div className="mx-auto grid w-full max-w-7xl gap-4 md:grid-cols-2 xl:grid-cols-4">
        {features.map(({ title, description, icon: Icon }) => (
          <article
            key={title}
            className="rounded-3xl border border-white/60 bg-white/50 p-6 shadow-[0_12px_45px_-35px_rgba(34,20,12,0.55)] backdrop-blur transition hover:-translate-y-1 hover:shadow-[0_20px_45px_-28px_rgba(34,20,12,0.45)]"
          >
            <Icon className="h-7 w-7 text-[#9f7f62]" />
            <h3 className="mt-4 text-xl font-medium text-[#312b26]">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#6c645e]">{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProductGrid() {
  return (
    <section className="px-4 py-8 md:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-3xl font-semibold text-[#2d2621] md:text-4xl">Популярные товары</h2>
          <a className="hidden text-sm font-medium text-[#6f645a] transition hover:text-[#2b2521] md:inline" href="#">
            Смотреть все →
          </a>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <article
              key={product.title}
              className="group rounded-3xl border border-[#e5ddd3] bg-[#fbf7f2] p-3 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_45px_-25px_rgba(43,30,20,0.35)]"
            >
              <div className="relative h-64 overflow-hidden rounded-2xl">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-[#2d2621]/80 px-3 py-1 text-xs font-medium text-white">
                  {product.badge}
                </span>
              </div>
              <div className="space-y-3 px-1 pb-2 pt-4">
                <h3 className="text-2xl font-medium text-[#2b2521]">{product.title}</h3>
                <div className="flex items-center gap-2 text-sm text-[#a07e61]">
                  <Star className="h-4 w-4 fill-[#a07e61] text-[#a07e61]" />
                  {product.rating}
                </div>
                <p className="text-sm leading-relaxed text-[#6a635d]">{product.description}</p>
                <p className="text-3xl font-semibold text-[#2d2621]">{product.price}</p>
                <div className="flex gap-2 opacity-100 transition md:opacity-0 md:group-hover:opacity-100">
                  <button className="inline-flex flex-1 items-center justify-center rounded-xl bg-[#2f2721] px-4 py-2.5 text-sm font-medium text-[#f9f3ea] transition hover:bg-[#1e1814]">
                    В корзину
                  </button>
                  <button className="inline-flex items-center justify-center rounded-xl border border-[#d8cdc1] bg-white/80 px-4 py-2.5 text-sm font-medium text-[#3a322d] transition hover:bg-white">
                    Подробнее
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Collections() {
  return (
    <section className="px-4 py-12 md:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-3">
        {collections.map((collection) => (
          <article
            key={collection.title}
            className="group relative min-h-[280px] overflow-hidden rounded-3xl"
          >
            <Image
              src={collection.image}
              alt={collection.title}
              fill
              className="object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1f1813]/65 via-[#1f1813]/15 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
              <h3 className="text-2xl font-medium text-[#f8efe5]">{collection.title}</h3>
              <button className="rounded-xl border border-white/40 bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-white/30">
                Смотреть
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function AboutBrand() {
  return (
    <section className="px-4 py-8 md:px-6 md:py-12 lg:px-8">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-8 rounded-[2rem] border border-[#e8dfd5] bg-[#f7f1e8] p-5 md:grid-cols-2 md:p-8">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.2em] text-[#8b7867]">Почему выбирают нас</p>
          <h2 className="text-3xl font-semibold text-[#2f2721] md:text-4xl">Создаём интерьер, в который хочется возвращаться</h2>
          <p className="text-base leading-relaxed text-[#675e57]">
            Мы работаем с проверенными европейскими и локальными производствами, тщательно отбираем
            фактуры и оттенки, чтобы каждая модель органично вписывалась в современный интерьер.
          </p>
          <p className="text-base leading-relaxed text-[#675e57]">
            От первого эскиза до финальной доставки — заботимся о сервисе, эстетике и долговечности.
          </p>
        </div>
        <div className="relative min-h-[320px] overflow-hidden rounded-3xl">
          <Image
            src="https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&w=1400&q=80"
            alt="Интерьер бренда"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mt-12 border-t border-[#d9cec2] bg-[#efe5da] px-4 py-10 md:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-7xl gap-8 md:grid-cols-4">
        <div>
          <p className="text-xl font-semibold text-[#2d2621]">Furniture Maison</p>
          <p className="mt-2 text-sm text-[#5d544d]">Премиальная мебель для современного интерьера.</p>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-[#4f4640]">Навигация</p>
          <ul className="space-y-2 text-sm text-[#5d544d]">
            {navItems.map((item) => (
              <li key={item}>
                <a href="#" className="transition hover:text-[#2b2521]">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-[#4f4640]">Контакты</p>
          <ul className="space-y-2 text-sm text-[#5d544d]">
            <li>+7 (495) 123-45-67</li>
            <li>hello@furnituremaison.ru</li>
            <li>Москва, Ленинский проспект, 21</li>
          </ul>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-[#4f4640]">Соцсети</p>
          <ul className="space-y-2 text-sm text-[#5d544d]">
            <li>Instagram</li>
            <li>Pinterest</li>
            <li>Telegram</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-10 w-full max-w-7xl border-t border-[#d7cabd] pt-4 text-sm text-[#6b625b]">
        © 2026 Furniture Maison. Все права защищены.
      </div>
    </footer>
  );
}

function IconButton({ icon, label }: { icon: ReactNode; label: string }) {
  return (
    <button
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#d8cec4] bg-[#f5eee6]/80 text-[#2d2621] transition hover:-translate-y-0.5 hover:bg-[#efe5da]"
    >
      {icon}
    </button>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f4eee6] text-[#2b2521]">
      <Header />
      <Hero />
      <Features />
      <ProductGrid />
      <Collections />
      <AboutBrand />
      <Footer />
    </main>
  );
}
