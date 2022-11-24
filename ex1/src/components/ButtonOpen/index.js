import "./style.css";

export default function ButtonOpen({ setOpenList }) {
  return (
    <button type="button" onClick={() => setOpenList(true)}>
      Open
    </button>
  );
}
