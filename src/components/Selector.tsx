import classNames from 'classnames';

export interface SelectorProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  labelChildren?: React.ReactNode;
  options: { id: string | number; label: React.ReactNode }[];
}

export function Selector({ labelChildren, options, ...rest }: SelectorProps) {
  return (
    <select
      aria-label={labelChildren as string}
      {...rest}
      className={classNames(
        `bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg
          focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700
          dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
          dark:focus:border-blue-500`,
        rest.className,
      )}
    >
      <option selected value="" disabled>
        {labelChildren}
      </option>
      {options.map(({ id, label }) => (
        <option key={id} value={id}>
          {label}
        </option>
      ))}
    </select>
  );
}
