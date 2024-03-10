import Link from 'next/link';
import React from 'react';

function Footer() {
  const thisYear = new Date().getFullYear();
  return (
    <footer className='w-full bg-slate-600 p-4 border-t z-50'>
      <div>
        <div className='inline-block text-2xl h-8 w-8 text-center font-bold rounded border text-white mb-2'>
          R.
        </div>
        <p className='text-slate-200'>Copyright &copy; Vijay KC {thisYear} </p>
        <p className='text-slate-200'>
          API powered by{' '}
          <Link
            className='hover:underline underline-offset-2'
            href='https://dummyjson.com'
            target='_blank noreferer'
          >
            DummyJSON
          </Link>
        </p>
        <p className='text-slate-100'>
          Images sourced from{' '}
          <Link
            className='hover:underline underline-offset-2'
            href='https://unsplash.com'
          >
            Unsplash
          </Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
