import clsx from 'clsx';
import { FC } from 'react';
import { ReactComponent as SearchIcon } from '../../img/search-icon.svg';
import { SearchInputProps } from './SearchInput.props';
import styles from './SearchInput.module.scss';

export const SearchInput: FC<SearchInputProps> = ({ className, value, onChange }) => {
  return (
    <label className={clsx(styles.wrapper, className)}>
      <input
        value={value}
        onChange={onChange}
        placeholder="Search..."
        type="search"
        className={clsx(styles.input)}
      />
      <SearchIcon className={styles.icon} />
    </label>
  );
};
