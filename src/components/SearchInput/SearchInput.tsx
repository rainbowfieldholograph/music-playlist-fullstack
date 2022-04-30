import clsx from 'clsx';
import { ReactComponent as SearchIcon } from '../../img/search-icon.svg';
import { SearchInputProps } from './SearchInput.props';
import styles from './SearchInput.module.scss';

export const SearchInput = ({ className, value, onChange }: SearchInputProps): JSX.Element => {
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
