import { DetailedHTMLProps, HTMLAttributes, InputHTMLAttributes } from 'react'

export interface FormInputProps
  extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  inputState: string
  setInputState: (value: string) => void
  labelText: string
}
