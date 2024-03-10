'use client'; // useParams is not supported in the server component.
import { Suspense } from 'react';
import SingleRecipeWrapper from './SingleRecipeWrapper';
import { useParams } from 'next/navigation';
import Loader from '@/UI/Loader';
import { HomepageHeader } from '@/UI/home/HomepageHeader';

function Recipe() {
  const { id } = useParams<{ id: string }>();
  return (
    <div className='grow bg-orange-50'>
      <HomepageHeader />
      <Suspense fallback={<Loader />}>
        <SingleRecipeWrapper params={{ id }} />
      </Suspense>
    </div>
  );
}

export default Recipe;
