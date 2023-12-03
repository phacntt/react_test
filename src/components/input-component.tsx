import { type ChangeEvent, useState } from 'react'
import '../css/input-component.css'
import LabelPrice from './lable-price.component'

const InputComponent: React.FC = () => {
  const [price, setprice] = useState('')
  const [isFocus, setIsFocus] = useState<boolean>(false)

  const handleFocus = () => {
    setIsFocus(!isFocus)
  }

  const handleOnChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 12) return false
    setprice(e.target.value)
  }

  const handleOnBlur = (e: any) => {
    console.log(e.target.value)
    setIsFocus(!isFocus)
  }

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
            defaultValue={price}
            onChange={handleOnChangeInput}
            onBlur={handleOnBlur}
          />
        </div>
      ) : (
        <LabelPrice onClick={handleFocus} price={price} />
      )}
    </>
  )
}

export default InputComponent
