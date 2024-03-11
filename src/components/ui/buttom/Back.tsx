'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

type b = { back: string }
export const Back = (props: b ) => {
  const router = useRouter();
  const [back, setback] = useState<string>('')

  useEffect(() => {
    setback(props.back)
  }, [props.back])
  
  return (
    <button
      type='button'
      onClick={() => router.back()}
      className='inline-flex justify-center py-2 px-4 border border-transparent shadow-custom1 text-sm font-medium rounded-md text-textPrimary bg-primary hover:bg-secondary transition duration-500 ease-in-out transform'
    >
      {back}
    </button>
  );
};
