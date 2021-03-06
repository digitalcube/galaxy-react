import React, {
  FC,
  PropsWithChildren,
  useState,
  CSSProperties,
  useMemo,
} from 'react';
import { Collapse, Button } from 'reactstrap';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

export type AccordionProps = PropsWithChildren<{
  defaultOpen?: boolean;
  id: string;
  title: string;
  style?: CSSProperties;
  className?: string;
}>;

export const Accordion: FC<AccordionProps> = ({
  defaultOpen = false,
  children,
  id,
  style,
  title,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const toggle = () => setIsOpen(!isOpen);
  const classNames = useMemo(() => {
    return [
      'accordion',
      'rounded',
      'px-3',
      'py-1',
      'bg-white',
      isOpen ? 'accordion-close' : 'accordion-open',
      className,
    ].filter(Boolean);
  }, [className, isOpen]);

  return (
    <div style={style} className={classNames.join(' ')}>
      <Button
        id={id}
        onClick={toggle}
        defaultOpen={false}
        className="d-flex justify-content-between align-items-center py-0 px-0 bg-transparent border-0"
      >
        <span className="accordion-title font-weight-bold text-body">
          {title}
        </span>
        <span className="h4 mb-0" style={{ color: 'Var(--primary)' }}>
          {!isOpen ? (
            <FaAngleDown className="d-block" />
          ) : (
            <FaAngleUp className="d-block" />
          )}
        </span>
      </Button>
      <Collapse className="accordion-body" isOpen={isOpen}>
        {children}
      </Collapse>
    </div>
  );
};
