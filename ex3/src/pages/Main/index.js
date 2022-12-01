import { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Modal from "../../components/Modal";
import Product from "../../components/Product";
import shoes from "../../data";
import "./style.css";

export default function Home() {
  const [products, setProducts] = useState([...shoes]);
  const [openModal, setOpenModal] = useState(false);
  const [handleDetailProduct, setHandleDetailProduct] = useState({});

  return (
    <div className="container">
      <Header />
      <div className="container-shoes">
        {products.map((product) => (
          <Product
            key={product.id}
            shoe={product}
            setOpenModal={setOpenModal}
            setHandleDetailProduct={setHandleDetailProduct}
          />
        ))}
      </div>
      <Footer />
      {openModal && (
        <Modal
          setOpenModal={setOpenModal}
          handleDetailProduct={handleDetailProduct}
          setHandleDetailProduct={setHandleDetailProduct}
        />
      )}
    </div>
  );
}
