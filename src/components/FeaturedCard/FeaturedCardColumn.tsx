import React, { FC, PropsWithChildren, useMemo } from 'react';

export type FeaturedCardColumnProps = PropsWithChildren<{
  column?: number;
}>;
export const FeaturedCardColumn: FC<FeaturedCardColumnProps> = ({
  children,
  column = 3,
}) => {
  const colWidth = useMemo(() => {
    const result = Math.round(12 / column);
    if (result > 12) return 12;
    if (result <= 1) return 1;
    return result;
  }, [column]);
  return (
    <div className="shifter-guides">
      <div className="container-fluid mb-4 pb-4 px-0 guides-list guides-list-lg">
        <div className="row">
          {Array.isArray(children) ? (
            <>
              {children.flat().map((child, index) => (
                <div className={`col-md-${colWidth}`} key={index}>
                  {child}
                </div>
              ))}
            </>
          ) : (
            <div className={`col-md-${colWidth}`}>{children}</div>
          )}
        </div>
      </div>
    </div>
  );
};
