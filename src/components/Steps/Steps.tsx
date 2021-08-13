import React, { FC, ReactNode } from 'react';
export type StepDetail = {
  className?: string;
  name: ReactNode;
  description?: ReactNode;
  title?: ReactNode;
};
export type StepsProps = {
  currentStep: number;
  title?: ReactNode;
  steps: StepDetail[];
  footer?: ReactNode;
  className?: string;
};
export const Steps: FC<StepsProps> = ({
  currentStep,
  className,
  steps,
  title,
  footer,
}) => {
  return (
    <div
      className={`px-3 py-3 rounded steps fade show${
        className ? ` ${className}` : ''
      }`}
      role="alert"
    >
      {title ? (
        <header className="steps-header mb-4 d-flex align-items-center justify-content-between">
          <h2 className="mb-0 font-weight-bold steps-title">{title}</h2>
        </header>
      ) : null}
      <div className="container">
        <div className="row">
          {steps.map((step, i) => (
            <div
              className={`col-sm mx-1 text-center${
                currentStep === i + 1 ? ` is-current` : ''
              }${step.className ? ` ${step.className}` : ''}`}
              key={`step-${i}`}
            >
              {step.title ? (
                step.title
              ) : (
                <div className={`step-num font-weight-bold`}>{i + 1}</div>
              )}
              <div className="mt-2 font-weight-bold step-name">{step.name}</div>
              {step.description ? (
                <div className="mt-2 step-description">{step.description}</div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
      {footer ? (
        <div className="steps-footer mt-3 px-3 align-items-center font-weight-bold">
          {footer}
        </div>
      ) : null}
    </div>
  );
};
