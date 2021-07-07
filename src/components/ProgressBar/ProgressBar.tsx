import React, { FC } from 'react';
import { useMemo } from 'react';

export type ProgressBarProps = {
  className?: string;
  now: number;
  min?: number;
  max?: number;
}
export const ProgressBar: FC<ProgressBarProps> = ({
  className,
  now,
  min = 1,
  max = 100,
}) => {
  const width = useMemo(() => {
    const current = now / (max - min)
    return `${current * 100}%`
  }, [min, max, now])
  return (
    <div className={`progress ${className}`}>
      <div
        className="progress-bar"
        role="progressbar"
        aria-valuenow={now}
        aria-valuemin={min}
        aria-valuemax={max}
        style={{
          width
        }}
      ></div>
    </div>
  )
}