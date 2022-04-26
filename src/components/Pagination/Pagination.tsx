import React, { FC } from 'react';

export type PaginationProps = {
  num: number;
  className?: string;
  previousTitle?: string;
  nextTitle?: string;
  handleClick: any;
  handlePrev: any;
  handleNext: any;
};
export const Pagination: FC<PaginationProps> = ({
  num,
  handleClick,
  handlePrev,
  handleNext,
  className,
  previousTitle = 'Previous',
  nextTitle = 'Next',
}) => {
  return (
    <>
      {num >= 2 ? (
        <nav className={['paginationNav', className].filter(Boolean).join(' ')}>
          <ul className="pagination">
            <li className="page-item">
              <a
                className="page-link previouslink"
                href="#"
                onClick={() => handlePrev()}
              >
                <span>{previousTitle}</span>
                <svg
                  width="12"
                  height="21"
                  viewBox="0 0 10 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.375 2.25C9.375 1.33594 8.25781 0.878906 7.59766 1.53906L1.09766 8.03906C0.691406 8.44531 0.691406 9.10547 1.09766 9.51172L7.59766 16.0117C8.25781 16.6719 9.375 16.2148 9.375 15.3008V2.25Z"
                    fill="#892885"
                  />
                </svg>
              </a>
            </li>
						{[...Array(num)].map((_, i) => (
							<li className="page-item">
							<a className="page-link" href={'#' + (i + 1)} onClick={() => handleClick()} >
								{i + 1}
							</a>
						</li>
              // <Paginationlist num={i} handleClick={handleClick} />
            ))}
            <li className="page-item">
              <a
                className="page-link nextlink"
                href="#"
                onClick={() => handleNext()}
              >
                <span>{nextTitle}</span>
                <svg
                  width="12"
                  height="21"
                  viewBox="0 0 12 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.5 18.5625C0.5 19.6875 1.8125 20.25 2.625 19.4375L10.625 11.4375C11.125 10.9375 11.125 10.125 10.625 9.625L2.625 1.625C1.8125 0.8125 0.5 1.375 0.5 2.5V18.5625Z"
                    fill="#892885"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </>
  );
};
