import InputComponent from './components/input-component'
import './App.css'
function App() {
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
        <InputComponent />
      </div>
    </div>
  )
}

export default App
