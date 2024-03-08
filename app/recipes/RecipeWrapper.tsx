import { Suspense } from 'react';
import { getAllRecipies } from '../../constants/action';
import RecipeCard from './RecipeCard';
import { Recipe } from '@/constants/definitions';
import Link from 'next/link';

export default async function RecipeWrapper() {
  const data = await getAllRecipies();
  return (
    <div className='relative max-w-[80rem] mx-auto px-2 my-8 grid-autofit-300'>
      <Link
        className='fixed top-2 right-2 border border-orange-300 bg-white p-3 focus:outline rounded-md z-50'
        href='/'
      >
        &larr; Back to Home
      </Link>

      {data.recipes.map((recipe: Recipe) => (
        <RecipeCard key={recipe.id} {...recipe} />
      ))}
    </div>
  );
}
