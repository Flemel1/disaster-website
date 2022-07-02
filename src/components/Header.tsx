import OutlineButton from "./OutlineButton"
import TextButton from "./TextButton"
import { Link, useLocation } from "react-router-dom"
const Header = () => {
  const location = useLocation()

  return (
    <div className="header">
      <div className="header__layer-1">
        <ul>
          <li>Tentang Kami</li>
          <li>FAQ</li>
          <li>Karir</li>
          <li>Blog</li>
        </ul>
      </div>
      {location.pathname != "/register" && (
        <div className="header__layer-2">
          <ul className="header__layer-2__left">
            <li>
              <img src="/logo.png" alt="icon" />
            </li>
            <li><Link to={'/home'}>Informasi</Link></li>
            <li>Cleaning</li>
            <li><Link to={'/insurance'}>Insurance</Link></li>
          </ul>
          <ul className="header__layer-2__right">
            <li>
              <Link to={'/login'}><OutlineButton label="Masuk" className="outline-button" /></Link>
            </li>
            <li>
              <TextButton label="Ajukan Pembiayaan" className="text-button" />
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Header
