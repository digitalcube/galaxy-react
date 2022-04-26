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
		<>
		{[...Array(num)].map((_, i) => (
    <li className="page-item">
		<a
			className="page-link"
			href={'#' + (i + 1)}
			onClick={() => handleClick()}
		>
			{i + 1}
		</a>
	</li>
))}
		</>
  );
};
