import clsx from 'clsx';
import SearchIcon from 'assets/search-icon.svg?react';
import styles from './search-input.module.scss';
import type { FC } from 'react';
import type { SearchInputProps } from './search-input.props';

export const SearchInput: FC<SearchInputProps> = ({
  className,
  value,
  style,
  onChange,
}) => {
  return (
    <label style={style} className={clsx(styles.wrapper, className)}>
      <input
        value={value}
        onChange={onChange}
        placeholder="Search..."
        type="search"
        className={styles.input}
      />
      <SearchIcon className={styles.icon} />
    </label>
  );
};
