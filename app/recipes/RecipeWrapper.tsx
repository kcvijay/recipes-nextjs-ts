import { getAllRecipies } from '../../constants/action';
import RecipeCard from './RecipeCard';
import { Recipe } from '@/constants/definitions';
import Link from 'next/link';

export default async function RecipeWrapper() {
  const data = await getAllRecipies();
  return (
    <div className='relative max-w-[80rem] mx-auto px-2 my-8 grid-autofit-300'>
      {data.recipes.map((recipe: Recipe) => (
        <RecipeCard key={recipe.id} {...recipe} />
      ))}
    </div>
  );
}
