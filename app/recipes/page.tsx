import React, { Suspense } from 'react';
import Home, { HomepageHeader } from '../page';
import RecipeWrapper from './RecipeWrapper';
import Loader from '@/UI/Loader';
import Link from 'next/link';

function page() {
  return (
    <main className='grow bg-orange-50'>
      <h1 className='text-center text-xl font-bold mt-8'>Recipes</h1>
      <Suspense fallback={<Loader />}>
        <RecipeWrapper />
      </Suspense>
    </main>
  );
}

export default page;
