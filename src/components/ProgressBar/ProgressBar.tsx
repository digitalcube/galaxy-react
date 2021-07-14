import React, { FC } from 'react';
import { useMemo } from 'react';

export type ProgressBarProps = {
  className?: string;
  now: number;
  min?: number;
  max?: number;
};
export const ProgressBar: FC<ProgressBarProps> = ({
  className,
  now,
  min = 1,
  max = 100,
}) => {
  const width = useMemo(() => {
    const current = now / (max - min);
    return `${current * 100}%`;
  }, [min, max, now]);
  const classNames = useMemo(() => {
    return ['progress', 'd-block', className].filter(Boolean);
  }, [className]);
  if (now === undefined || now < 0) return null;
  return (
    <div className={`${classNames.join(' ')}`}>
      <div
        className="progress-bar"
        role="progressbar"
        aria-valuenow={now}
        aria-valuemin={min}
        aria-valuemax={max}
        style={{
          width,
        }}
      ></div>
    </div>
  );
};
