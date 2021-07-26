import React, { FC } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

export type LoadingProps = {
  show: boolean;
  shouldShow?: (flag: boolean) => void;
};

export const Loading: FC<LoadingProps> = (props) => {
  const [_show, _shouldShow] = useState(false);

  const shouldShow = props.shouldShow || _shouldShow;
  const show = typeof props.show === 'undefined' ? _show : props.show;

  useEffect(() => {
    shouldShow(show);
  }, [show, shouldShow]);

  if (!show) return null;

  return (
    <div
      onClick={() => shouldShow(false)}
      className="d-flex flex-column align-items-center justify-content-center c-loading"
    >
      <div className="c-loading-spinner"></div>
      <div className="text-center c-loading-text font-weight-bold">
        Loading...
      </div>
    </div>
  );
};
