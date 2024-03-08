import { Recipe } from '@/constants/definitions';
import Image from 'next/image';
import StarRate from '@mui/icons-material/StarRate';
import Link from 'next/link';

function SingleRecipe(props: Recipe) {
  return (
    <div>
      <figure className='relative'>
        <Image
          className='w-full h-[25rem] object-cover rounded-md'
          src={props.image}
          alt={props.name}
          width={1000}
          height={400}
        />
        <section className='md:absolute w-full md:left-1/2 md:-bottom-[1.5rem] md:-translate-x-1/2 md:flex justify-center items-center gap-2 transition-all'>
          <div className='bg-orange-100 p-2 flex justify-between gap-2 border border-white rounded-md'>
            <span className='font-bold'>Meal</span>
            <span>{props.mealType}</span>
          </div>
          <div className='bg-orange-100 p-2 flex justify-between gap-2 border border-white rounded-md'>
            <span className='font-bold'>Cooking Time</span>
            <span>{props.prepTimeMinutes + props.cookTimeMinutes} minutes</span>
          </div>
          <div className='bg-orange-100 p-2 flex justify-between gap-2 border border-white rounded-md'>
            <span className='font-bold'>Difficulty</span>
            <span>{props.difficulty}</span>
          </div>
          <div className='bg-orange-100 p-2 flex justify-between gap-2 border border-white rounded-md'>
            <span className='font-bold'>Cuisine</span>
            <span>{props.cuisine}</span>
          </div>
        </section>
      </figure>

      <div className='flex items-center gap-2 justify-between  mt-4 md:mt-8'>
        <p className='text-lg md:text-xl lg:text-2xl transition-all'>
          {props.name}
        </p>
        <div className='flex items-center gap-1'>
          <StarRate />
          {props.rating} ({props.reviewCount})
        </div>
      </div>

      <div className='flex gap-2 items-center mt-4'>
        <span className='font-bold'>Serving</span>
        <span>
          {props.servings} {props.servings < 2 ? 'person' : 'people'}
        </span>
      </div>
      <div className='flex gap-2 items-center'>
        <span className='font-bold'>Calories per serving</span>
        <span>{props.caloriesPerServing} Kcal</span>
      </div>
      <section className='md:flex gap-8 mt-8 items-start'>
        <div className='shrink'>
          <ul className='border border-orange-300 rounded-md'>
            <li className='text-lg p-3 bg-orange-300 border-b border-b-orange-300 font-bold'>
              Ingredients
            </li>

            {props.ingredients.map((ing, i) => (
              <li
                className={`${
                  i === props.ingredients.length - 1
                    ? ''
                    : 'border-b border-b-orange-300'
                } p-3`}
                key={i}
              >
                <span className='inline-block w-6'>{i + 1}.</span>
                {ing}
              </li>
            ))}
          </ul>
        </div>
        <div className='grow mt-4 md:mt-0'>
          <ul className='border border-orange-300 rounded-md'>
            <li className='text-lg p-3 bg-orange-300 border-b border-b-orange-300 font-bold'>
              Instructions
            </li>
            {props.instructions.map((ins, i) => (
              <li
                className={`${
                  i !== props.instructions.length - 1 ? 'border-b' : ''
                } border-b-orange-300 p-3 list-inside`}
                key={i}
              >
                <span className='inline-block w-6'>{i + 1}.</span>
                {ins}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default SingleRecipe;
