import { ButtonProps } from "./props/ButtonProps"

const OutlineButton = ({ label, className, onClick }: ButtonProps) => {
  return (
    <>
      {onClick ? (
        <button type="button" className={className} onClick={onClick}>
          {label}
        </button>
      ) : (
        <button type="button" className={className}>{label}</button>
      )}
    </>
  )
}

export default OutlineButton
