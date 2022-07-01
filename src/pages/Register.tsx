import { ChangeEvent } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"
import TextButton from "../components/TextButton"
import { useAppDispatch, useAppSelector } from "../hooks"
import { registered } from "../slices/user-slice"

const Register = () => {
  const navigate = useNavigate()
  const users = useAppSelector((state) => state.user.users)
  const dispatch = useAppDispatch()

  let dataForm = {
    username: "",
    email: "",
    password: "",
    hp: "",
  }

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name
    const value = event.target.value
    if (name === "username") dataForm.username = value
    else if (name === "email") dataForm.email = value
    else if (name === "password") dataForm.password = value
    else dataForm.hp = value
  }

  const onSubmit = () => {
    dispatch(registered(dataForm))
    navigate('/')
  }

  return (
    <>
      <Header />
      <div className="register">
        <h1>Daftar Akun ChiFlo</h1>
        <p>Sudah punya akun? Masuk di sini</p>
        {users.map((user) => {
          return <p>{user.username}</p>
        })}
        <div className="register__wrapper">
          <div className="register__left">
            <img src="/favicon.ico" alt="icon" />
          </div>
          <div className="register__right">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Masukkan Username"
              onChange={onChange}
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Masukkan Email"
              onChange={onChange}
            />
            <label htmlFor="password">Kata Sandi</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Kata Sandi Anda"
              onChange={onChange}
            />
            <label htmlFor="nohp">Nomor HP</label>
            <input
              type="number"
              name="nohp"
              id="nohp"
              placeholder="Masukkan Nomor HP"
              onChange={onChange}
            />
            <TextButton
              className="text-button"
              label="Daftar"
              onClick={onSubmit}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Register
