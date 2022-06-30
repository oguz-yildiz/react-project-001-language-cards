import "./Header.css";
import reactLogo from "../../assets/react.svg";

const Header = () => {
  return (
    <div className="header-container">
      <img className="header-logo" src={reactLogo} alt="react" />
    </div>
  );
};

export default Header;
