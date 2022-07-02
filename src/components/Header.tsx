import OutlineButton from "./OutlineButton"
import TextButton from "./TextButton"
import { Link, useLocation } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../hooks"
import { selectedMenu } from "../slices/menu-slice"
const Header = () => {
  const location = useLocation()
  const selected = useAppSelector((state) => state.menu.selected)
  const dispatch = useAppDispatch()

  const menus = [
    {
      name: "Informasi",
      path: "/home",
    },
    {
      name: "Cleaning",
      path: "",
    },
    {
      name: "Insurance",
      path: "/insurance",
    },
  ]

  const onClick = (menu: string) => {
    const payload = {
      selected: menu,
    }
    dispatch(selectedMenu(payload))
  }

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
            {menus.map((menu) => {
              if (menu.name === selected) {
                return (
                  <li onClick={() => onClick(menu.name)}>
                    <Link style={{ color: "var(--blue)" }} to={menu.path}>
                      {menu.name}
                    </Link>
                  </li>
                )
              } else {
                return (
                  <li onClick={() => onClick(menu.name)}>
                    <Link to={menu.path}>
                      {menu.name}
                    </Link>
                  </li>
                )
              }
            })}
          </ul>
          <ul className="header__layer-2__right">
            <li>
              <Link to={"/login"}>
                <OutlineButton label="Masuk" className="outline-button" />
              </Link>
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
