'use client';
import { HomepageHeader } from '@/UI/home/HomepageHeader';
import Link from 'next/link';

function Home() {
  return (
    <main className='grow bg-hero relative'>
      <HomepageHeader />
      <section className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center'>
        <div className='text-center'>
          <h1 className='text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-bold text-white drop-shadow-lg transition-all'>
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

export default Home;
