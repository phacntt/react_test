import { useState } from "react";
import InputComponent from "./components/input-component";

function App() {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [price, setPrice] = useState<number>(0);
  const handleFocus = () => {
    setIsFocus(!isFocus);
  };

  const handleChangePrice = (value: number) => setPrice(value);
  const handleChangeFocus = (clause: boolean) => setIsFocus(clause);

  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          border: "2px solid black",
          padding: "20px",
          marginTop: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "250px",
        }}
      >
        <div>
          <img
            style={{ width: "250px", height: "250px" }}
            src="https://www.w3schools.com/html/img_girl.jpg"
            alt={`images`}
          />
        </div>
        <div style={{margin: "10px 0 10px 0", fontSize: '20px', fontWeight: 'bold'}}>Áo khoác mùa đông ấm áp</div>
        {isFocus ? (
          <InputComponent
            handleChangePrice={handleChangePrice}
            handleChangeFocus={handleChangeFocus}
            price={price}
          />
        ) : (
          <div
            style={{ fontWeight: "bold", fontSize: "24px", marginTop: "25px" }}
            onClick={handleFocus}
          >
            $ {price}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
