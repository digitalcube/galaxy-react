import React, { FC, PropsWithChildren, ReactNode } from 'react';
import { FaCheck } from 'react-icons/fa';

export type AuthFormLayoutProps = PropsWithChildren<{
  status: '' | 'inprogress' | 'failure' | 'success';
  inprogress?: {
      title?: string;
      message?: ReactNode;
  }
  success?: {
    title?: string;
    message?: ReactNode
  }
}>;

export const AuthFormLayout: FC<AuthFormLayoutProps> = ({
  status,
  children,
  inprogress,
  success,
}) => {
  const classNames = [
    'login',
    'px-4',
    'py-4',
    'rounded',
    'd-flex',
    'flex-column',
    'justify-content-center',
  ];
  if (['inprogress', 'success'].includes(status)) classNames.push('success');
  if (status === 'failure') classNames.push('error');

  const inprogressMessageTitle = inprogress?.title || null
  const inprogressMessage = inprogress?.message || null
  const succeededMessageTitle = success?.title || null
  const succeededMessage = success?.message || null
  return (
    <div className={classNames.join(' ')}>
      {status === 'inprogress' ? (
        <div className="mb-4 pb-2 login-header">
          <div className="mx-auto mb-3 pt-2 d-flex align-items-center justify-content-center rounded-circle login-success-icon">
            <i aria-hidden="true">
              <FaCheck className="d-block" />
            </i>
          </div>
          <h1 className="mb-0 font-weight-bold text-center logging-text">
            {inprogressMessageTitle || 'Processing...'}
          </h1>
          {inprogressMessage ? (
            <div className="mt-4 font-weight-bold text-center send-email">
              {inprogressMessage}
            </div>
          ) : null}
        </div>
      ) : null}
      {status === 'success' ? (

          <div className="mb-4 pb-2 login-header">
            <div className="mx-auto mb-3 pt-2 d-flex align-items-center justify-content-center rounded-circle login-success-icon">
              <i aria-hidden="true">
                <FaCheck className="d-block" />
              </i>
            </div>
            <h1 className="mb-0 font-weight-bold text-center logging-text">
              {succeededMessageTitle || 'Complete'}
            </h1>
            {inprogressMessage ? (
              <div className="mt-4 font-weight-bold text-center send-email">
                {succeededMessage}
              </div>
            ) : null}
          </div>

      ): null}
      {!['inprogress', 'success'].includes(status) ? children: null}
    </div>
  );
};
