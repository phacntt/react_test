import { ChangeEvent, useState } from "react";

const InputComponent: React.FC = () => {
  const [price, setprice] = useState(0);
  const [isFocus, setIsFocus] = useState<boolean>(false);

  const handleFocus = () => {
    setIsFocus(!isFocus);
  };

  const handleOnChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setprice(Number(e.target.value));
  };

  const handleOnBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocus(!isFocus);
  };

  return (
    <>
      {isFocus ? (
        <div
          className="InputComponent"
          onBlur={handleOnBlur}
          style={{ marginTop: "5px" }}
        >
          <input
            autoFocus
            style={{
              fontWeight: "bold",
              fontFamily: "Time New Romane",
              fontSize: "20px",
              width: "230px",
              padding: "8.5px 10px 8.5px",
            }}
            type="number"
            placeholder="price"
            defaultValue={price}
            onChange={handleOnChangeInput}
            onBlur={handleOnBlur}
          />
        </div>
      ) : (
        <div
          style={{
            marginTop: "5px",
            fontWeight: "bold",
            fontSize: "20px",
            width: "230px",
            padding: "10px",
            border: "2px solid black",
            borderRadius: "3px",
          }}
          onClick={handleFocus}
        >
          $ {price}
        </div>
      )}
    </>
  );
};

export default InputComponent;
