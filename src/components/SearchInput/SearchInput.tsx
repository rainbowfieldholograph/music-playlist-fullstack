import clsx from 'clsx';
import { ReactComponent as SearchIcon } from '../../assets/search-icon.svg';
import styles from './SearchInput.module.scss';
import type { FC } from 'react';
import type { SearchInputProps } from './SearchInput.props';

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
        className={clsx(styles.input)}
      />
      <SearchIcon className={styles.icon} />
    </label>
  );
};
