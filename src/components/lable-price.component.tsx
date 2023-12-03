interface PropsLabelPrice {
  onClick: () => void
  price: string
}

// eslint-disable-next-line react/prop-types
const LabelPrice: React.FC<PropsLabelPrice> = ({ onClick, price }) => {
  return (
    <div className="field-price" onClick={onClick}>
      ${' '}
      {!price
        ? 0
        : parseFloat(price).toLocaleString('en-US', {
            maximumFractionDigits: 3,
          })}
    </div>
  )
}

export default LabelPrice
