'use client';

import { i18n } from '../../../../i18n-config';

interface IClipboard {
  link: string;
  locale: string;
  className: string;
  textOrSvg: JSX.Element | string;
}
export const Clipboard = (props: IClipboard) => {
  const { defaultLocale } = i18n;

  const select = () => {
    const { locale, link } = props;
    const base = process.env.NEXT_PUBLIC_PATH_BASE;
    return locale === defaultLocale
      ? `${base}${link}`
      : `${base}/${locale}${link}`;
  };

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(select());
      alert('Texto copiado...');
    } catch (error) {
      console.log('Error: ', error);
    }
  };

  return (
    <button onClick={handleCopyClick} className={props.className}>
      {props.textOrSvg}
    </button>
  );
};
