import "./style.css";
import LogoImage from "../../assets/logo.svg";

export default function Header() {
  return (
    <header>
      <div>
        <h1>MODA MASCULINA</h1>
        <h3>SAPATOS SOCIAIS - CASUAIS - ESPORTE FINO</h3>
      </div>
      <img className="logo" src={LogoImage} alt="Logo da empresa" />
    </header>
  );
}
