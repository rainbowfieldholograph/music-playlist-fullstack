import clsx from 'clsx';
import { FC } from 'react';
import styles from './FormInput.module.scss';
import { FormInputProps } from './FormInput.props';

export const FormInput: FC<FormInputProps> = ({
  inputState,
  setInputState,
  labelText,
  className,
  ...rest
}) => {
  return (
    <label>
      <h3>{labelText}</h3>
      <input
        required
        className={clsx(styles.input, className)}
        value={inputState}
        onChange={(event) => setInputState(event.target.value)}
        type="text"
        {...rest}
      />
    </label>
  );
};
