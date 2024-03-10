import { HomepageHeader } from '@/UI/home/HomepageHeader';
import React from 'react';

function page() {
  return (
    <main className='grow bg-orange-50'>
      <HomepageHeader />
      <div className='bg-vegetables h-full max-w-[80rem] mx-auto p-4 grid grid-cols-1 md:grid-cols-2 place-content-start transition-all'>
        <div />
        <div className='leading-loose'>
          <h1 className='text-xl mb-4'>
            Enjoy the lists of appetizing recipes.
          </h1>
          <p className='mb-4'>
            This website is a recipe collection website that lists a variety of
            international recipes.
          </p>
          <p className='mb-4'>
            This website is created using Next.js, TypeScript, Tailwind CSS and
            DummyJSON Recipe REST API.
          </p>
          <p>
            More features such as recipe filter, search through tags and
            pagination coming soon...
          </p>
        </div>
      </div>
    </main>
  );
}

export default page;
