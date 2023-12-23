import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useIntl } from 'react-intl';
import { useInfusionStore } from '@/stores';
import { timerText } from './Timer.utils';

const audio = new Audio('./beep.mp3');

let timer: ReturnType<typeof setInterval>;

export const useTimer = (infusionTime: number[]) => {
  const intl = useIntl();
  const { setHideForm } = useInfusionStore();
  const [start, setStart] = useState(false);
  const [steep, setSteep] = useState(0);
  const [time, setTime] = useState(infusionTime[steep]);

  const startText = intl.formatMessage({ id: 'startTimer' });
  const lastInfusionText = intl.formatMessage({ id: 'lastInfusion' });
  const [timeText, setTimeText] = useState(startText);

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
        setHideForm(false);
        setStart(false);
        setSteep(0);
        setTimeText(lastInfusionText);
        return;
      } else if (start) {
        setStart(false);
        setSteep(steep + 1);
        setTimeText(startText);
        audio.play().catch((e: unknown) => console.error(e));
        clearInterval(timer);
      }
    }
  }, [
    time,
    startText,
    setHideForm,
    lastInfusionText,
    steep,
    infusionTime.length,
    start,
  ]);

  const handleStart = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      setHideForm(true);
      setStart(true);
      setTime(infusionTime[steep]);
      setTimeText(timerText(infusionTime[steep]));
    },
    [infusionTime, steep, setHideForm],
  );

  const values = useMemo(
    () => ({
      steep,
      handleStart,
      start,
      timeText,
    }),
    [steep, handleStart, start, timeText],
  );

  return values;
};
