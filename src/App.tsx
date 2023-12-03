import InputComponent from './components/input-component'
import './App.css'
import { ChangeEvent, useState } from 'react'
import LabelPrice from './components/lable-price.component'
function App() {
  const [price, setprice] = useState('')
  const [isFocus, setIsFocus] = useState<boolean>(false)

  const handleFocus = () => {
    setIsFocus(!isFocus)
  }

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setprice(event.target.value)
  }

  return (
    <div className="App">
      <div className="card">
        <div>
          <img
            className="thumbnail"
            src="https://www.w3schools.com/html/img_girl.jpg"
            alt={'images'}
          />
        </div>
        <div className="title-card">Áo khoác mùa đông ấm áp</div>
        {isFocus ? (
          <InputComponent
            value={price}
            onChange={onChangeInput}
            onBlur={handleFocus}
          />
        ) : (
          <LabelPrice onClick={handleFocus} price={price} />
        )}
      </div>
    </div>
  )
}

export default App
