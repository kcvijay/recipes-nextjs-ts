import Link from 'next/link';

export function HomepageHeader() {
  return (
    <header className='max-w-[80rem] mx-auto flex justify-between items-center text-white p-4'>
      <Link className='text-2xl' href='/'>
        <span className='bg-white p-1 rounded-sm font-bold text-orange-500 mr-1'>
          R.
        </span>
        Recipes
      </Link>
      <nav className=''>
        <ul className='flex gap-8'>
          <li>
            <Link
              className='hover:text-orange-500 active:text-slate-600'
              href='/'
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className='hover:text-orange-500 active:text-slate-600'
              href='/recipes'
            >
              Recipies
            </Link>
          </li>
          <li>
            <Link
              className='hover:text-orange-500 active:text-slate-600'
              href='/about'
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
