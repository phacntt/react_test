import { type ChangeEvent } from 'react'
import '../css/input-component.css'

interface Props {
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  onBlur?: () => void
}

// eslint-disable-next-line react/prop-types
const InputComponent: React.FC<Props> = ({ value, onChange, onBlur }) => {
  return (
    <>
      <div className="InputComponent">
        <div className="icon-input-border">
          <div className="icon-input">Price</div>
        </div>
        <input
          autoFocus
          className="field-input"
          type="number"
          placeholder="Fill Price"
          defaultValue={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      </div>
    </>
  )
}

export default InputComponent
