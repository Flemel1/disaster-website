import { ButtonProps } from "./props/ButtonProps"

const OutlineButton = ({ label, className, onClick }: ButtonProps) => {
  return (
    <>
      {onClick ? (
        <button className={className} onClick={onClick}>
          {label}
        </button>
      ) : (
        <button className={className}>{label}</button>
      )}
    </>
  )
}

export default OutlineButton
