import classNames from 'classnames';

export interface SelectorProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  labelClassName?: string;
  containerClassName?: string;
  labelFor?: string;
  labelChildren?: React.ReactNode;
  options: { id: string | number; label: React.ReactNode }[];
}

export function Selector({
  labelClassName,
  containerClassName,
  labelFor,
  labelChildren,
  options,
  ...rest
}: SelectorProps) {
  return (
    <div className={containerClassName}>
      <label
        htmlFor={labelFor}
        className={classNames(
          'font-mono',
          'text-slate-900',
          'dark:text-slate-100',
          'pr-2',
          labelClassName,
        )}
      >
        {labelChildren}:
      </label>
      <select
        {...rest}
        className={classNames(
          `bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg
          focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700
          dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
          dark:focus:border-blue-500`,
          rest.className,
        )}
      >
        {options.map(({ id, label }) => (
          <option key={id} value={id} className="font-mono">
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}
