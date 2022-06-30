import { ButtonProps } from "./props/ButtonProps"

const TextButton = ({ className, label, onClick }: ButtonProps) => {
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

export default TextButton
