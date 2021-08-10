import React, { FC, PropsWithChildren, ReactNode } from 'react';
import { FaCheck } from 'react-icons/fa';

export type AuthFormLayoutProps = PropsWithChildren<{
  status: '' | 'inprogress' | 'failure' | 'success';
  inprogress?: {
    title?: string;
    message?: ReactNode;
  };
  success?: {
    title?: string;
    message?: ReactNode;
  };
  variant: 'login' | 'signup';
  className?: string;
}>;

export const AuthFormLayout: FC<AuthFormLayoutProps> = ({
  status,
  children,
  //inprogress,
  success,
  className,
  variant,
}) => {
  const classNames = [
    variant,
    'px-4',
    'py-4',
    'rounded',
    'd-flex',
    'flex-column',
    'justify-content-center',
    'mx-3',
    className,
  ].filter(Boolean);
  if (['success'].includes(status)) classNames.push('success');
  if (status === 'failure') classNames.push('error');

  const succeededMessageTitle = success?.title || null;
  const succeededMessage = success?.message || null;
  return (
    <div className={classNames.join(' ')}>
      {status === 'success' ? (
        <div className={`mb-4 pb-2 ${variant}-header`}>
          <div
            className={`mx-auto mb-3 pt-2 d-flex align-items-center justify-content-center rounded-circle ${variant}-success-icon`}
          >
            <i aria-hidden="true">
              <FaCheck className="d-block" />
            </i>
          </div>
          <h1 className={`pt-4 font-weight-bold text-center ${variant}-title`}>
            {succeededMessageTitle || 'Complete'}
          </h1>
          {succeededMessage ? (
            typeof succeededMessage === 'string' ? (
              <div className="mt-4 font-weight-bold text-center send-email">
                {succeededMessage}
              </div>
            ) : (
              succeededMessage
            )
          ) : null}
        </div>
      ) : null}
      {!['success'].includes(status) ? children : null}
    </div>
  );
};
