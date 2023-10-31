import classNames from "classnames"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labelClassName?: string
  inputClassName?: string
  labelFor?: string
  labelChildren?: React.ReactNode
}

export function Input({ labelClassName, labelFor, inputClassName, labelChildren, ...rest }: InputProps) {
  return (
    <div>
      <label htmlFor={labelFor} className={classNames("font-mono",
        "text-slate-900",
        "dark:text-slate-100",
        "pr-2",
        labelClassName
      )}>{labelChildren}:</label>
      <input type='text' id={labelFor} {...rest} />
    </div>
  )
}
