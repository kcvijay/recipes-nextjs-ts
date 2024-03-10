'use client';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import Link from 'next/link';

export function HomepageHeader() {
  const pathname = usePathname();
  return (
    <header className='w-screen  bg-[rgba(0,0,0,0.5)]'>
      <div className='max-w-[80rem] mx-auto flex justify-between items-center text-white p-4'>
        <Link
          className='inline-block text-2xl h-8 w-8 text-center font-bold rounded bg-orange-500 text-white'
          href='/'
        >
          R.
        </Link>
        <nav>
          <ul className='flex gap-8'>
            <li>
              <Link
                className={clsx('hover:text-orange-500 active:text-slate-600', {
                  'text-orange-500': pathname === '/',
                })}
                href='/'
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={clsx('hover:text-orange-500 active:text-slate-600', {
                  'text-orange-500': pathname === '/recipes',
                })}
                href='/recipes'
              >
                Recipies
              </Link>
            </li>
            <li>
              <Link
                className={clsx('hover:text-orange-500 active:text-slate-600', {
                  'text-orange-500': pathname === '/about',
                })}
                href='/about'
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
