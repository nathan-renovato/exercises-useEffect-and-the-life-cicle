import "./style.css";
import ModalUsers from "../../components/ModalUsers";
import ButtonOpen from "../../components/ButtonOpen";
import { useState } from "react";

function Main() {
  const [openList, setOpenList] = useState(false);

  return (
    <div className="container">
      {openList ? (
        <ModalUsers setOpenList={setOpenList} />
      ) : (
        <ButtonOpen setOpenList={setOpenList} />
      )}
    </div>
  );
}

export default Main;
