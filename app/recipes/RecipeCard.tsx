import { Recipe } from '@/constants/definitions';
import Image from 'next/image';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import FlagIcon from '@mui/icons-material/Flag';
import SpeedIcon from '@mui/icons-material/Speed';
import StarRate from '@mui/icons-material/StarRate';
import Link from 'next/link';

function RecipeCard(props: Recipe) {
  return (
    <Link
      className='border border-orange-500 rounded-md hover:outline hover:outline-orange-500 outline-offset-2 focus:outline-4 focus:outline-orange-500 focus:outline-offset-2 max-w-full w-[40rem] overflow-hidden'
      href={`/recipes/${props.id}`}
    >
      <div>
        <Image
          className='w-full h-[16rem] object-cover'
          src={props.image}
          alt={props.name}
          width={500}
          height={150}
        />

        <section className='p-4'>
          <div className='flex items-center gap-1 justify-between mb-4'>
            <h2 className='text-lg overflow-ellipsis'>{props.name}</h2>

            <div className='min-w-[80px] flex justify-end items-center gap-1 text-[12px] text-orange-500'>
              <StarRate className='w-5' />
              <span>
                {props.rating} ({props.reviewCount})
              </span>
            </div>
          </div>

          <div className='flex justify-between items-center gap-1 text-sm'>
            <div className='grow p-1 flex gap-1 justify-start items-center text-slate-700 border border-orange-200 bg-orange-100 rounded'>
              <QueryBuilderIcon className='w-5' />
              <span className='ml-1 overflow-ellipsis'>
                {props.prepTimeMinutes + props.cookTimeMinutes} min
              </span>
            </div>
            <div className='grow p-1 flex gap-1 justify-start items-center text-slate-700 border border-orange-200 bg-orange-100 rounded'>
              <SpeedIcon className='w-5' />
              <span className='ml-1 overflow-ellipsis'>{props.difficulty}</span>
            </div>
            <div className='grow p-1 flex gap-1 justify-start items-center text-slate-700 border border-orange-200 bg-orange-100 rounded'>
              <FlagIcon className='w-5' />
              <span className='ml-1 overflow-ellipsis'>{props.cuisine}</span>
            </div>
          </div>
        </section>
      </div>
    </Link>
  );
}

export default RecipeCard;
