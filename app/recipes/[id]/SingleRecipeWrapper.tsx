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
    <div className='max-w-[80rem] mx-auto my-8 px-2'>
      <Link
        className='fixed top-2 right-2 bg-white border border-orange-300 focus:outline p-2 flex gap-2 items-center rounded-md z-50'
        href={`/recipes`}
      >
        &larr;
        <span>Back</span>
      </Link>
      <SingleRecipe {...recipe} />
    </div>
  );
}

export default SingleRecipeWrapper;
