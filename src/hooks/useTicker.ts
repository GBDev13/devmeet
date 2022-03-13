import { useEffect, useState } from "react";
import { intervalToDuration, isBefore } from "date-fns";

interface UseTickerProps {
  startDate: Date;
  finalDate: Date;
  endDate: Date;
}

export interface UseTickerReturn {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
  isTimeUp: boolean;
  isEnded: boolean;
  percentage: number;
}

function formatNumber(number: number | undefined) {
  if (!number) return "00";
  return number < 10 ? `0${number}` : String(number);
}

export const useTicker = ({
  startDate,
  finalDate,
  endDate,
}: UseTickerProps): UseTickerReturn => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [finalDate]);

  const isTimeUp = isBefore(finalDate, now);
  const isEnded = isBefore(endDate, now);

  if (isTimeUp || isEnded) {
    return {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
      percentage: 100,
      isTimeUp,
      isEnded,
    };
  }

  let { days, hours, minutes, seconds } = intervalToDuration({
    start: now,
    end: finalDate,
  });

  const startTime = startDate.getTime();
  let percentage = Math.round(
    ((now.getTime() - startTime) / (finalDate.getTime() - startTime)) * 100
  );

  return {
    days: formatNumber(days),
    hours: formatNumber(hours),
    minutes: formatNumber(minutes),
    seconds: formatNumber(seconds),
    isTimeUp,
    isEnded,
    percentage,
  };
};
