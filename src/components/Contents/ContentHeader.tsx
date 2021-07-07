import React, { FC } from 'react';

export type ContentHeaderProps = {
  href: string;
  src: string;
  width: string;
  height: string;
  alt?: string;
  title: string;
};
export const ContentHeader: FC<ContentHeaderProps> = ({
  href,
  src,
  width,
  height,
  alt,
  title,
}) => {
  return (
    <div className="shifter-guides">
      <h1 className="guide-heading-1 font-weight-bold">{title}</h1>
      {src ? (
        <div className="mt-4 container-fluid">
          <div className="row">
            <div className="col px-0">
              <a
                href={href}
                rel="noopener noreferrer"
                target="_blank"
                className="d-block"
              >
                <img
                  className="img-fluid"
                  src={src}
                  width={width}
                  height={height}
                  alt={alt}
                />
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
