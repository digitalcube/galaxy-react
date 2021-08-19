import React, { FC } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Input, Form, InputGroup } from 'reactstrap';
import { SearchSuggestionList, SuggestionItem } from './Suggestions';

export type SearchFormProps = {
  placeholder?: string;
  value?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  suggestions?: SuggestionItem[];
};

export const SearchForm: FC<SearchFormProps> = ({
  placeholder = 'search',
  value,
  onChange,
  onSubmit,
  suggestions,
}) => {
  return (
    <Form
      onSubmit={onSubmit}
      className="form-inline my-2 my-lg-0 flex-grow-1 d-flex position-relative form-search"
    >
      <InputGroup>
        <FaSearch className="fas fa-search form-search-icon position-absolute" />
        <Input
          aria-label="Search"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </InputGroup>
      {suggestions ? <SearchSuggestionList suggestions={suggestions} /> : null}
    </Form>
  );
};
