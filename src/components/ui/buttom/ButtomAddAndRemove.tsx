'use client';

import { IScheduled } from '@/interfaces';
import { useScheduledStore } from '@/store';
import { useEffect, useState } from 'react';

interface Props {
  text: string;
  data: IScheduled;
  select?: boolean;
}

export const ButtomAddAndRemove = (props: Props) => {
  const [first, setFirst] = useState(false);
  const addScheduled = useScheduledStore((state) => state.addScheduled);
  const removeScheduled = useScheduledStore((state) => state.removeScheduled);
  const scheduled = useScheduledStore((state) => state.scheduled);

  const [propsData, setPropsData] = useState<Props>({
    text: '',
    data: props.data,
    select: false,
  });

  useEffect(() => {
    setPropsData({ ...props, select: props.select ?? true });
  }, [props]);

  useEffect(() => {
    let list = scheduled.some((item) => item.id === propsData.data?.id);
    if (propsData.select) setFirst(list);
  }, [scheduled, propsData.data?.id, propsData.select]);

  const handleSelect = () => {
    if (propsData.select) {
      addScheduled(propsData.data);
    } else {
      setFirst(false);
      removeScheduled(propsData.data.id);
    }
  };

  const select = () => {
    let status = propsData.data.status
    return first || status === 'completed' || status === 'cancel' 
  }
  return (
    <button
      disabled={select()}
      type='button'
      onClick={handleSelect}
      className={`${
        select() ? 'text-gray-400' : 'text-primary hover:underline'
      } font-medium `}
    >
      {propsData.text}
    </button>
  );
};
