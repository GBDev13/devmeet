import { useEffect, useState } from "react";
import { intervalToDuration, isBefore } from "date-fns";

interface UseTickerProps {
  startDate: Date;
  finalDate: Date;
}

export interface UseTickerReturn {
  days: string;
  hours: string;
  minutes: string;
  isTimeUp: boolean;
  percentage: number;
}

function formatNumber(number: number | undefined) {
  if (!number) return "00";
  return number < 10 ? `0${number}` : String(number);
}

export const useTicker = ({
  startDate,
  finalDate,
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

  if (isTimeUp) {
    return {
      days: "00",
      hours: "00",
      minutes: "00",
      percentage: 100,
      isTimeUp,
    };
  }

  let { days, hours, minutes } = intervalToDuration({
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
    isTimeUp,
    percentage,
  };
};
