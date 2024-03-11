'use client';

import { FC, useEffect, useState } from 'react';

interface Props {
  sectionId: string;
  buttonText: string;
  className: string;
  svgLeft?: JSX.Element;
  svgRight?: JSX.Element;
}

export const ScrollToSectionButton: FC<Props> = (props) => {
  
  const [propsData, setPropsData] = useState<Props>({
    sectionId: '',
    buttonText: '',
    className: '',
    svgLeft: undefined,
    svgRight: undefined,
  });

  useEffect(() => {
    setPropsData({ ...props });
  }, [props]);

  const scrollToSection = () => {
    const section = document.getElementById(propsData.sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <button
      type='button'
      onClick={() => scrollToSection()}
      className={propsData.className}
    >
      {propsData.svgLeft} {propsData.buttonText} {propsData.svgRight}
    </button>
  );
};
