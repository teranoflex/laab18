// Header.jsx
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <Link to="/about">Про мене</Link> |{" "}
        <Link to="/my-city">Моє місто</Link> |{" "}
        <Link to="/my-future">Моє майбутнє</Link>
      </nav>
    </header>
  );
}
