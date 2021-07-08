import React, { FC } from 'react';
import { FaEllipsisH, FaPlay, FaStop, FaWordpressSimple } from 'react-icons/fa';
import { ProgressBar } from '../ProgressBar/ProgressBar';

export type SiteCardProps = {
  image?: {
    src: string;
    alt?: string;
  };
  site?: {
    id: string;
    name: string;
    domain: string;
    team?: {
      name: string;
      id?: string;
    };
  };
};
export const SiteCard: FC<SiteCardProps> = ({ image, site }) => {
  if (!site) return null;
  return (
    <div className="mb-3 rounded d-md-flex align-items-start site-list-item">
      <ProgressBar now={10} />
      {image ? (
        <div className="site-thumbnail rounded-left">
          <img src={image.src} width="167" height="111" alt={image.alt} />
        </div>
      ) : null}
      <div className="pl-3 py-3 site-data">
        <h2 className="mb-0 font-weight-bold site-name">{site.name}</h2>
        <div className="mt-3 d-flex align-items-center site-info">
          <span className="d-inline-block align-middle site-url">
            <a href={`${site.domain}`}>{site.domain}</a>
          </span>
          <span className="d-inline-block align-middle text-truncate site-description">
            <span className="mr-2 d-inline-block rounded-circle font-weight-bold text-center site-initial">
              D
            </span>
            <p className="mb-0 d-inline site-description">{site.team?.name}</p>
          </span>
        </div>
      </div>
      <div className="ml-auto pt-4 pr-3 d-flex align-items-center flex-shrink-0 site-setting">
        <div className="ml-4 site-status">
          <div className="rounded font-weight-bold c-site-status c-is-site-running">
            WordPress Running
          </div>
        </div>
        <div className="ml-4 site-panel">
          <a href="#" title="管理画面">
            <i aria-hidden="true">
              <FaWordpressSimple className="d-block" />
            </i>
          </a>
        </div>
        <div className="ml-4 font-weight-bold site-manage">
          <a href="#">Manage site</a>
        </div>
        <div className="ml-4 site-control">
          <a
            className="dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i aria-hidden="true">
              <FaEllipsisH className="d-block" />
            </i>
          </a>
          <div
            className="dropdown-menu dropdown-menu-right"
            aria-labelledby="navbarDropdown"
          >
            <a
              className="dropdown-item px-3 py-2 d-flex align-items-center justify-content-between"
              href="#"
            >
              Start WordPress
              <i aria-hidden="true">
                <FaPlay className="d-block" />
              </i>
            </a>
            <a
              className="dropdown-item px-3 py-2 d-flex align-items-center justify-content-between"
              href="#"
            >
              Restart WordPress
              <i aria-hidden="true">
                <FaStop className="d-block" />
              </i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
