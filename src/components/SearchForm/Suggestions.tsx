import React, { FC, PropsWithChildren, ReactNode } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { Link } from '../../routings';
export type SuggestionItem = PropsWithChildren<{
  category?: ReactNode;
  icon?: ReactNode;
  noIcon?: boolean;
  href: string;
}>;
export type SearchSuggestionListProps = {
  suggestions?: SuggestionItem[];
  className?: string;
};
export const SearchSuggestionList: FC<SearchSuggestionListProps> = ({
  className,
  suggestions,
}) => {
  if (!suggestions) return null;
  return (
    <div className={`form-search${className ? ` ${className}` : ''}`}>
      <div
        className="mt-3 px-2 pb-2 rounded position-absolute suggest-list"
        style={{ background: '#fff' }}
      >
        {suggestions.map(({ href, category, icon, children, noIcon }, i) => {
          return (
            <div
              className="mt-2 suggest-list-item"
              key={`search-suggestion-${i}`}
            >
              <Link href={href} className="px-2 py-2 rounded d-block">
                <div className="px-1 d-flex align-items-center title position-relative">
                  {!icon && noIcon ? null : (
                    <div className="mr-2 rounded-circle flex-shrink-0 d-flex align-items-center justify-content-center icon">
                      <i className="suggest-list-item-icon" aria-hidden="true">
                        {icon || (
                          <svg
                            className="d-block"
                            width="9"
                            height="8"
                            viewBox="0 0 9 8"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M6.5 0.25H0.5V1.75H6.5V0.25ZM8.75 3.25H2.75V4.75H8.75V3.25ZM7.25 0.25H8.75V1.75H7.25V0.25ZM2 3.25H0.5V4.75H2V3.25ZM7.25 6.25H8.75V7.75H7.25V6.25ZM6.5 6.25H0.5V7.75H6.5V6.25Z" />
                          </svg>
                        )}
                      </i>
                    </div>
                  )}
                  {children}
                  {/http/.test(href) ? (
                    <i
                      className="pr-1 position-absolute suggest-list-external-icon"
                      aria-hidden="true"
                    >
                      <FaExternalLinkAlt className="d-block" />
                    </i>
                  ) : null}
                </div>
                {category ? (
                  <div className="mt-1 ml-4 pl-2 category">{category}</div>
                ) : null}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
