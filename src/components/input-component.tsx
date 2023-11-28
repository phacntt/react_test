import { ChangeEvent, useState } from "react";

interface Props {
  handleChangePrice: (value: number) => void;
  handleChangeFocus: (clause: boolean) => void;
  price: number;
}

const InputComponent: React.FC<Props> = ({
  handleChangePrice,
  handleChangeFocus,
  price,
}) => {
  const [priceChange, setPriceChange] = useState(0);

  const handleOnChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setPriceChange(Number(e.target.value));
  };

  const handleOnBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    handleChangeFocus(false);
    handleChangePrice(priceChange);
  };

  return (
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
  );
};

export default InputComponent;
