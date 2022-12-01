import CloseIcon from "../../assets/close-icon.svg";
import { handleCalculateInstallments } from "../../utils/functions";
import "./style.css";

export default function Modal({
  setOpenModal,
  handleDetailProduct,
  setHandleDetailProduct,
}) {
  function handleCloseModal() {
    setOpenModal(false);

    setHandleDetailProduct({});
  }

  return (
    <div className="container-modal">
      <div className="modal">
        <img
          className="close-modal"
          src={CloseIcon}
          alt="botão fechar modal"
          onClick={() => handleCloseModal()}
        />
        <img
          className="product-image"
          src={handleDetailProduct.image}
          alt="foto do sapato"
        />
        <h2 className="product-name">{handleDetailProduct.name}</h2>
        <p>{handleDetailProduct.description}</p>
        <div className="buy-product">
          <button>Comprar</button>
          <div className="content-price">
            <div className="product-price">
              <h6>R$ {handleDetailProduct.oldPrice}</h6>
              <h2>R$ {handleDetailProduct.currentPrice}</h2>
            </div>
            <div className="product-installment">
              <h3>
                6x R$
                {handleCalculateInstallments(handleDetailProduct.currentPrice)}
              </h3>
              <span>Sem juros</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
