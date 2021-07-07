import React, { FC, Fragment } from 'react';
import { ContentCardProps } from './ContentCard';

export type ContentCardCategoriesProps = Pick<ContentCardProps, 'categories'>
export const ContentCardCategories: FC<ContentCardCategoriesProps> = ({categories}) => {
    if (!categories) return null;
  const categoryLength = categories.length
  return (
    <div className="mb-2 guide-list-genre">
      {categories.map((category, index) => {
        const separater = index + 1 < categoryLength ? ' / ' : null
        if (!category.link) {
          return <Fragment key={index}>{category.name}{separater}</Fragment>
        }
        return (
          <Fragment key={index}>
            <a href={category.link}>{category.name}</a>
            {separater}
          </Fragment>
        )
      })}
    </div>
  )
}