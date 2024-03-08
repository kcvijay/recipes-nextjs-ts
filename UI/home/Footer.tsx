import Link from 'next/link';
import React from 'react';

function Footer() {
  const thisYear = new Date().getFullYear();
  return (
    <footer className='w-full bg-slate-600 p-4 border-t'>
      <div>
        <h2 className='inline-block text-2xl font-bold mb-2 text-white border rounded-sm p-1'>R.</h2>
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
      </div>
    </footer>
  );
}

export default Footer;
