import { memo } from 'react'
import styles from './FormInput.module.css'

const FormInput = memo(function ({ inputState, setInputState, label, id }) {
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
})

export default FormInput
