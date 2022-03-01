import { memo } from 'react'
import styles from './FormInput.module.css'
import { FormInputProps } from './FormInput.props'

export const FormInput = memo(
  ({ inputState, setInputState, label, id }: FormInputProps): JSX.Element => {
    return (
      <>
        <label htmlFor={id}>
          <h3>{label}</h3>
        </label>
        <input
          id={id}
          required
          className={styles.input}
          value={inputState}
          onChange={(event) => setInputState(event.target.value)}
          type="text"
        />
      </>
    )
  }
)
