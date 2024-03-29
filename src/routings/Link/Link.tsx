import React, {
  createElement,
  CSSProperties,
  FC,
  PropsWithChildren,
} from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { LinkTagType, useLinkTag } from '../../providers/LinkTagProvider';

export type LinkProps = PropsWithChildren<{
  href?: string;
  style?: CSSProperties;
  className?: string;
  tagOverwrite?: LinkTagType;
  withExternalLinkIcon?: boolean;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}>;

export const Link: FC<LinkProps> = ({ withExternalLinkIcon, ...props }) => {
  const { tag } = useLinkTag();
  const as = props.tagOverwrite ? props.tagOverwrite : tag;
  /**
   * When given external link url (start from http),
   * The tag should be HTML a tag with open a new tab
   */
  if (!!props.href && /^http/.test(props.href)) {
    return (
      <a target="_blank" rel="noopener noreferrer" {...props}>
        {props.children}
        {withExternalLinkIcon ? (
          <i className="ml-2" aria-hidden="true">
            <FaExternalLinkAlt />
          </i>
        ) : null}
      </a>
    );
  }
  return createElement(as as any, {
    ...props,
    // Fallback for react-router
    to: props.href,
  });
};

export default Link;
