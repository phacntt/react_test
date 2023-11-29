import InputComponent from "./components/input-component";

function App() {
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
        <div
          style={{
            margin: "10px 0 10px 0",
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          Áo khoác mùa đông ấm áp
        </div>
        <InputComponent />
      </div>
    </div>
  );
}

export default App;
