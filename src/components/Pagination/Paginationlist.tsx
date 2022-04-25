import React, { FC } from 'react';

export type PaginationlistProps = {
  num: number;
  handleClick: any;
};
export const Paginationlist: FC<PaginationlistProps> = ({
  num,
  handleClick,
}) => {
  return (
    <li className="page-item">
      <a
        className="page-link"
        href={'#' + (num + 1)}
        onClick={() => handleClick()}
      >
        {num + 1}
      </a>
    </li>
  );
};
