import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="https://nextjs.org/icons/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
        <nav
          className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md transform transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li><a href="#" className="text-gray-600 hover:text-black border border-black rounded px-4 py-1">Home</a></li>
            <li><a href="#" className="text-gray-600 hover:text-black border border-black rounded px-4 py-1">Shop</a></li>
            <li><a href="/locator" className="text-gray-600 hover:text-black border border-black rounded px-4 py-1">Find Store</a></li>
            <li><a href="#" className="text-gray-600 hover:text-black border border-black rounded px-4 py-1">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
        {/* Hero Section */}
        <section className="w-full max-w-4xl py-16 flex">
          <div className="w-3/5 pr-8 text-left">
            <h1 className="text-6xl font-bold">Lost a Disk?</h1>
            <p className="mt-2 text-lg text-gray-600">
              Use our finder system to see if your disk has been found, then claim it!
            </p>
            <button className="mt-8 px-10 py-2 text-black bg-white border border-black rounded transition-colors duration-300 hover:bg-black hover:text-white hover:border-white"
            onClick={() => window.location.href = '/locator'}>
              Find
            </button>
          </div>
          <div className="w-2/5"></div>
        </section>

        {/* Product Highlights */}
        <section className="grid w-full max-w-4xl grid-cols-1 gap-8 py-16 md:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>
      </main>
    </>
  );
};

// Sample product data
const products: Product[] = [
  {
    id: 1,
    name: 'Minimalist Chair',
    price: 199.99,
    image: '/images/chair.jpg',
  },
  {
    id: 2,
    name: 'Modern Lamp',
    price: 89.99,
    image: '/images/lamp.jpg',
  },
  {
    id: 3,
    name: 'Sleek Desk',
    price: 299.99,
    image: '/images/desk.jpg',
  },
];

export default HomePage;
