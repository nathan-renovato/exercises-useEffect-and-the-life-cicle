import "./style.css";

export default function NewUser({
  inputName,
  setInputName,
  listUsers,
  setListUsers,
}) {
  function handleNewUser() {
    setListUsers([...listUsers, inputName]);
    setInputName("");
  }

  return (
    <div className="container-new-user">
      <input
        value={inputName}
        placeholder="Nome"
        onChange={(e) => setInputName(e.target.value)}
      />
      <button type="button" onClick={handleNewUser}>
        Adicionar
      </button>
    </div>
  );
}
