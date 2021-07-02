import React, { FC } from 'react';
import { ImageDigitalcubeLogo } from '../Images';

export type CopyrightProps = {
  serviceName: string;
  today?: Date;
};
export const Copyright: FC<CopyrightProps> = ({
  serviceName,
  today = new Date(),
}) => {
  const theYear = today.getFullYear();
  return (
    <footer className="mt-auto text-center">
      <p className="m-0 common-footer-copyright">
        <small className="d-flex align-items-center justify-content-center">
          {`©${theYear} ${serviceName} | A Product by `}
          <a
            href="https://www.digitalcube.jp/"
            rel="nofollow noopener"
            title="DigitalCube"
          >
            <ImageDigitalcubeLogo
              className="d-block"
              width="77"
              height="15"
              alt=""
            />
          </a>
        </small>
      </p>
    </footer>
  );
};
