import { getRecipeById } from '@/constants/action';
import SingleRecipe from './SingleRecipe';
import { Recipe } from '@/constants/definitions';
import Link from 'next/link';

export async function SingleRecipeWrapper({
  params,
}: {
  params: { id: string };
}) {
  const id = params.id;
  const recipe = (await getRecipeById(id)) as Recipe;
  return (
    <div className='relative max-w-[80rem] mx-auto my-8 px-2'>
      <SingleRecipe {...recipe} />
    </div>
  );
}

export default SingleRecipeWrapper;
