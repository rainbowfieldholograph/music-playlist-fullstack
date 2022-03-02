import clsx from 'clsx'
import { memo } from 'react'
import styles from './FormInput.module.css'
import { FormInputProps } from './FormInput.props'

export const FormInput = memo(
  ({
    inputState,
    setInputState,
    labelText,
    className,
    ...rest
  }: FormInputProps): JSX.Element => {
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
    )
  }
)
