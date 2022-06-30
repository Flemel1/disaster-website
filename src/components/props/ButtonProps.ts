import { MouseEventHandler } from "react"

export type ButtonProps = {
  label: string
  className: string
  onClick?: MouseEventHandler<HTMLButtonElement>
}
