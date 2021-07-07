import React, { FC, PropsWithChildren, ReactNode, useMemo } from 'react';

export type ContentCardColumnProps = PropsWithChildren<{
  column?: number;
  title?: ReactNode
}>;

export const ContentCardColumn: FC<ContentCardColumnProps> = ({
  children,
  column = 3,
  title,
}) => {
  const colWidth = useMemo(() => {
    const result = Math.round(12 / column);
    if (result > 12) return 12;
    if (result <= 1) return 1;
    return result;
  }, [column]);
  return (
      <>
        {title ? <h2 className="guide-heading-2 font-weight-bold">{title}</h2>: null}
        <div className="shifter-guides">
        <div className="container-fluid px-0 guides-list guides-list-md">
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
    </>
  );
};
