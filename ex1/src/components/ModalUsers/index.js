import "./style.css";

export default function ModalUsers({ setOpenList }) {
  return (
    <div className="container-modal">
      <div className="container-list">
        <h1>Users</h1>
        <div className="container-users">
          <strong>Nathan</strong>
          <strong>Nathan</strong>
          <strong>Nathan</strong>
          <strong>Nathan</strong>
          <strong>Nathan</strong>
          <strong>Nathan</strong>
        </div>
        <button type="button" onClick={() => setOpenList(false)}>
          Close
        </button>
      </div>
    </div>
  );
}
