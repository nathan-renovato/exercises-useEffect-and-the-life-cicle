import "./style.css";

export default function ListUsers({ listUsers }) {
  return (
    <div className="container-users">
      <h1>Usuários</h1>
      <div className="list-users">
        {listUsers.map((user) => (
          <strong key={user}>{user}</strong>
        ))}
      </div>
    </div>
  );
}
