import "./style.css";
import FacebookIcon from "../../assets/facebook.svg";
import InstagramIcon from "../../assets/instagram.svg";
import LogoImage from "../../assets/logo.svg";

export default function Footer() {
  return (
    <footer>
      <div className="left-footer">
        <strong>Endereço:</strong>
        <div className="left-address">
          <span>Rua Cubos, 10</span>
          <span>Jardim Academy</span>
          <span>Salvador - Bahia - CEP 41820-021</span>
        </div>
        <div className="left-social">
          <img src={FacebookIcon} alt="ícone do facebook" />
          <img src={InstagramIcon} alt="ícone do instagram" />
        </div>
      </div>
      <div className="rigth-footer">
        <img src={LogoImage} alt="Logo da empresa" />
      </div>
    </footer>
  );
}
