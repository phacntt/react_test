import { type ChangeEvent } from 'react'
import '../css/input-component.css'
import LabelPrice from './lable-price.component'

interface Props {
  value: string
  isFocus: boolean
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  onBlur: () => void
}

// eslint-disable-next-line react/prop-types
const InputComponent: React.FC<Props> = ({
  // eslint-disable-next-line react/prop-types
  value,
  // eslint-disable-next-line react/prop-types
  isFocus,
  // eslint-disable-next-line react/prop-types
  onChange,
  // eslint-disable-next-line react/prop-types
  onBlur,
}) => {
  return (
    <>
      {isFocus ? (
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
      ) : (
        <LabelPrice onClick={onBlur} price={value} />
      )}
    </>
  )
}

export default InputComponent
