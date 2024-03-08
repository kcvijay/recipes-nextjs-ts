'use client';
import Link from 'next/link';

function Home() {
  return (
    <main className='grow bg-hero relative'>
      <HomepageHeader />
      <section className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center'>
        <div className='text-center'>
          <h1 className='text-[3rem] md:text-[3.5rem] lg:text-[4.5rem] font-bold text-white drop-shadow-lg transition-all'>
            Appetizing Recipes
          </h1>
          <Link
            className='inline-block px-9 py-3 bg-orange-500 mt-6 text-white rounded-full text-center hover:outline focus:outline-2 focus:outline-white transition-all'
            href='/recipes'
          >
            Visit All Recipes
          </Link>
        </div>
      </section>
    </main>
  );
}

export function HomepageHeader() {
  return (
    <header className='max-w-[80rem] mx-auto flex justify-between items-center text-white p-4'>
      <Link className='text-2xl' href='/'>
        <span className='bg-white p-1 rounded-sm font-bold text-orange-500 mr-1'>R.</span>Recipes
      </Link>
      <nav className=''>
        <ul className='flex gap-8'>
          <li>
            <Link
              className='hover:text-orange-500 active:text-slate-600'
              href='/'
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className='hover:text-orange-500 active:text-slate-600'
              href='/recipes'
            >
              Recipies
            </Link>
          </li>
          <li>
            <Link
              className='hover:text-orange-500 active:text-slate-600'
              href='/about'
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Home;
