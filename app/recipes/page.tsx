import React, { Suspense } from 'react';
import RecipeWrapper from './RecipeWrapper';
import Loader from '@/UI/Loader';
import { HomepageHeader } from '@/UI/home/HomepageHeader';

function page() {
  return (
    <main className='grow bg-orange-50'>
      <HomepageHeader/>
      <h1 className='text-center text-xl font-bold mt-8'>Recipes</h1>
      <Suspense fallback={<Loader />}>
        <RecipeWrapper />
      </Suspense>
    </main>
  );
}

export default page;
