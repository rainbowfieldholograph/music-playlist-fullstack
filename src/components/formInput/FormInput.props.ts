import { ChangeEventHandler } from 'react'

export interface FormInputProps {
  inputState: string
  setInputState: (value: string) => void
  label: string
  id: string
}
