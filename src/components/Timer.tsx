import React, { useState, useEffect } from 'react';
import { sound } from '../assets/beep';

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
        setTimeText('Start timer');
        sound.play().catch((e: unknown) => console.error(e));
        clearInterval(timer);
      }

      return () => {
        clearInterval(timer);
      };
    }
  }, [start, time]);

  const handleStart = (e: React.MouseEvent) => {
    e.preventDefault();
    setStart(true);
    setSteep(steep + 1);
    setTime(infusionTime[steep]);
    setTimeText(timerText(infusionTime[steep]));
  };

  return (
    <button
      className="bg-yellow-500 w-6/12 lg:w-3/12 m-auto mt-10 hover:bg-yellow-700 focus:bg-yellow-500 text-slate-900 font-bold font-mono py-2 px-4 border border-yellow-700 rounded"
      onClick={(e) => handleStart(e)}
      role="button"
    >
      {timeText}
    </button>
  );
}
