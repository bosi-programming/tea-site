import React, { useState, useEffect } from 'react';
import { Paragraph } from '.';

const audio = new Audio('./beep.mp3');

const baseClasses = [
  'm-auto',
  'mt-2',
  'w-6/12',
  'rounded',
  'border',
  'border-yellow-700',
  'bg-yellow-500',
  'px-4',
  'py-2',
  'font-mono',
  'font-bold',
  'text-slate-900',
  'hover:bg-yellow-700',
  'focus:bg-yellow-500',
  'disabled:hover:bg-yellow-500',
  'lg:w-3/12',
];

const darkClasses = [
  'dark:border-pink',
  'dark:bg-thulian',
  'dark:text-green',
  'dark:hover:bg-pink',
  'dark:focus:bg-pink',
  'dark:disabled:hover:bg-gray-600',
  'dark:disabled:bg-gray-600',
  'dark:disabled:border-gray-600',
];

const timerText = (time: number) => {
  const date = new Date(1000 * time);
  return date.toISOString().substring(14, 19);
};

let timer: ReturnType<typeof setInterval>;

export function Timer({ infusionTime }: { infusionTime: number[] }) {
  const [start, setStart] = useState(false);
  const [steep, setSteep] = useState(10);
  const [time, setTime] = useState(infusionTime[steep]);
  const [timeText, setTimeText] = useState('Start timer');

  useEffect(() => {
    if (start) {
      timer = setInterval(() => {
        const newTime = time - 1;
        setTime(newTime);
        setTimeText(timerText(newTime));
      }, 1000);
      return () => {
        clearInterval(timer);
      };
    }
  }, [start, time]);

  useEffect(() => {
    if (time === 0) {
      if (steep === infusionTime.length) {
        setStart(false);
        setSteep(0);
        setTimeText('Last steep finished. Click here to restart');
        return;
      } else if (start) {
        setStart(false);
        setSteep(steep + 1);
        setTimeText('Start timer');
        audio.play().catch((e: unknown) => console.error(e));
        clearInterval(timer);
      }
    }
  }, [time, steep, infusionTime.length, start]);

  const handleStart = (e: React.MouseEvent) => {
    e.preventDefault();
    setStart(true);
    setTime(infusionTime[steep]);
    setTimeText(timerText(infusionTime[steep]));
  };

  return (
    <>
      <Paragraph className="mt-10 text-center">
        You are on steep {steep + 1} of {infusionTime.length}
      </Paragraph>
      <button
        className={[...baseClasses, ...darkClasses].join(' ')}
        onClick={(e) => handleStart(e)}
        role="button"
        disabled={start || steep === infusionTime.length}
      >
        {timeText}
      </button>
    </>
  );
}
