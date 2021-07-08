import React, { FC, ReactNode } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from '../../../routings/Link/Link';

export type SidebarBackToProps = {
  to?: string;
  icon?: ReactNode;
  label?: string;
};
export const SidebarBackTo: FC<SidebarBackToProps> = ({ to, icon, label }) => {
  if (!to && !label) return null;
  return (
    <div className="return2sites">
      <Link className="d-inline-flex align-items-center" href={to}>
        <i className="mr-2" aria-hidden="true">
          {icon || <FaArrowLeft className="d-block" />}
        </i>
        {label}
      </Link>
    </div>
  );
};
