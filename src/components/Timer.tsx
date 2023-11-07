import React, { useState, useEffect } from 'react';
import { sound } from '../assets/beep';
import { Paragraph } from '.';

const timerText = (time: number) => {
  const date = new Date(1000 * time);
  return date.toISOString().substring(14, 19);
};

export function Timer({ infusionTime }: { infusionTime: number[] }) {
  const [start, setStart] = useState(false);
  const [steep, setSteep] = useState(0);
  const [time, setTime] = useState(infusionTime[steep]);
  const [timeText, setTimeText] = useState('Start timer');

  useEffect(() => {
    if (start) {
      const timer = setInterval(() => {
        const newTime = time - 1;
        setTime(newTime);
        setTimeText(timerText(newTime));
      }, 1000);

      if (time === 0) {
        setStart(false);
        setSteep(steep + 1);
        setTimeText('Start timer');
        sound.play().catch((e: unknown) => console.error(e));
        clearInterval(timer);
      }

      return () => {
        clearInterval(timer);
      };
    }
  }, [start, time, steep]);

  const handleStart = (e: React.MouseEvent) => {
    e.preventDefault();
    setStart(true);
    setTime(infusionTime[steep]);
    setTimeText(timerText(infusionTime[steep]));
  };

  return (
    <>
      <Paragraph className='mt-10 text-center'>
        You are on steep {steep + 1} of {infusionTime.length}
      </Paragraph>
      <button
        className="m-auto mt-2 w-6/12 rounded border border-yellow-700 bg-yellow-500 px-4 py-2 font-mono font-bold text-slate-900 hover:bg-yellow-700 focus:bg-yellow-500 disabled:hover:bg-yellow-500 lg:w-3/12"
        onClick={(e) => handleStart(e)}
        role="button"
        disabled={start || steep === infusionTime.length}
      >
        {timeText}
      </button>
    </>
  );
}
