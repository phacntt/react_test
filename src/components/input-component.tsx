import { type ChangeEvent, useState } from 'react'
import '../css/input-component.css'

const InputComponent: React.FC = () => {
  const [price, setprice] = useState('')
  const [isFocus, setIsFocus] = useState<boolean>(false)

  const handleFocus = () => {
    setIsFocus(!isFocus)
  }

  const handleOnChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const numericValue = e.target.value.replace(/[^0-9.]/g, '')
    const formattedValue = parseFloat(numericValue).toLocaleString('en-US', {
      maximumFractionDigits: 3,
    })
    setprice(formattedValue)
  }

  const handleOnBlur = () => {
    setIsFocus(!isFocus)
  }

  return (
    <>
      {isFocus ? (
        <div className="InputComponent" onBlur={handleOnBlur}>
          <div className="icon-input-border">
            <div className="icon-input">Price</div>
          </div>
          <input
            autoFocus
            className="field-input"
            type="number"
            placeholder="Fill Price"
            defaultValue={price}
            onChange={handleOnChangeInput}
            onBlur={handleOnBlur}
          />
        </div>
      ) : (
        <div className="field-price" onClick={handleFocus}>
          $ {price}
        </div>
      )}
    </>
  )
}

export default InputComponent
