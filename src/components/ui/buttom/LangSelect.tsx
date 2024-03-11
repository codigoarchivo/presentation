'use client';

import React, { ChangeEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { i18n } from '../../../../i18n-config';
 
type Props = { locale: string };

export const LangSelect = (props: Props) => {
  const router = useRouter();
  const { locales, defaultLocale } = i18n;

  const [propsData, setPropsData] = useState<string>(defaultLocale);

  useEffect(() => {
    setPropsData(props.locale);
  }, [props.locale]);

  const handleLocaleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    let path = newLocale === defaultLocale ? '/' : `/${newLocale}`;
    router.push(path);
    router.refresh()
  };

  return (
    <select
      value={propsData}
      onChange={handleLocaleChange}
      className='text-xs font-bold text-primary hover:text-secondary transition duration-500 ease-in-out transform inline-flex items-center'
    >
      {locales.map((Locale) => (
        <option key={Locale} value={Locale}>
          {Locale}
        </option>
      ))}
    </select>
  );
};
