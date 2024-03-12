import { LangSelect, LinkItem } from '@/components';
import Image from 'next/image';
import header from '../../../../public/images/perfil.png';
import Link from 'next/link';

interface IJacksonQuintero {
  locale: string;
  intl: string[];
}
export const JacksonQuintero = (props: IJacksonQuintero) => {
  return (
    <div className='lg:row-span-2 ring-1 dark:ring-white/10 ring-primary/5 bg-white dark:bg-secondary shadow-custom1 dark:shadow-thick rounded-3xl p-8'>
      <div className='relative flex items-center gap-x-4'>
        <Image
          src={header}
          className='h-10 w-10 rounded-full ring-1 dark:ring-white/10 ring-primary/5 shadow-custom1'
          alt={'user name'}
          title={'Jackson Quintero'}
          width='0'
          height='0'
          sizes='100vw'
        />
        <div className='text-sm leading-6'>
          <p className='flex justify-between font-semibold text-primary dark:text-white'>
            <Link
              title={'Jackson Quintero'}
              href={'https://www.codigoarchivo.com/'}
              locale={props.locale}
              target='_blank'
            >
              <span className='absolute inset-0'></span>
              Jackson Quintero
            </Link>
            <LangSelect locale={props.locale} />
          </p>
          <p className='text-gray-500 text-xs dark:text-zinc-400'>
            {props.intl[0]}
          </p>
        </div>
      </div>
      <p className='text-3xl mt-6 font-medium lg:text-4xl tracking-tight text-primary dark:text-white'>
        {props.intl[1]}
      </p>
      <p className='mt-4 text-sm text-zinc-500 dark:text-zinc-400 font-light lg:text-xl'>
        {props.intl[2]}
      </p>
    </div>
  );
};
