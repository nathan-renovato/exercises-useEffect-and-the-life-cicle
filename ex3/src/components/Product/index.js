import "./style.css";
import { handleCalculateInstallments } from "../../utils/functions";

export default function Product({
  shoe,
  setOpenModal,
  setHandleDetailProduct,
}) {
  function handleOpenModal() {
    setHandleDetailProduct(shoe);

    setOpenModal(true);
  }

  return (
    <div className="shoe" onClick={() => handleOpenModal()}>
      <img src={shoe.image} alt="imagem do sapato" />
      <span className="shoe-name">{shoe.name}</span>
      <div className="content-price">
        <div className="product-price">
          <h6>R$ {shoe.oldPrice.toFixed(2)}</h6>
          <h2>R$ {shoe.currentPrice.toFixed(2)}</h2>
        </div>
        <div className="product-installment">
          <h3>6x R$ {handleCalculateInstallments(shoe.currentPrice)}</h3>
          <span>Sem juros</span>
        </div>
      </div>
    </div>
  );
}
