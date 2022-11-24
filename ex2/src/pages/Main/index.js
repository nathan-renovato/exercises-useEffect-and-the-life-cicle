import { useState } from "react";
import ListUsers from "../../components/ListUsers";
import NewUser from "../../components/NewUser";
import Notify from "../../components/Notify";
import "./style.css";

function Main() {
  const [inputName, setInputName] = useState("");
  const [listUsers, setListUsers] = useState([]);

  return (
    <div className="container">
      <NewUser
        inputName={inputName}
        setInputName={setInputName}
        listUsers={listUsers}
        setListUsers={setListUsers}
      />
      <ListUsers listUsers={listUsers} />
      <Notify listUsers={listUsers} text={"Novo usuário adicionado!"} />
    </div>
  );
}

export default Main;
