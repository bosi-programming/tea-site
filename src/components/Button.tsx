import React, { MouseEventHandler } from 'react';
import classNames from 'classnames';

export interface ButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
}

const baseClasses = [
  'text-center',
  'w-6/12',
  'rounded',
  'border',
  'border-yellow-700',
  'bg-yellow-500',
  'px-4',
  'py-2',
  'font-mono',
  'font-bold',
  'text-slate-900',
  'hover:bg-yellow-700',
  'focus:bg-yellow-500',
  'disabled:hover:bg-yellow-500',
];

const darkClasses = [
  'dark:border-pink',
  'dark:bg-thulian',
  'dark:text-white',
  'dark:hover:bg-pink',
  'dark:focus:bg-pink',
  'dark:disabled:hover:bg-gray-600',
  'dark:disabled:bg-gray-600',
  'dark:disabled:border-gray-600',
];

export function Button({
  onClick,
  disabled,
  children,
  className,
}: ButtonProps) {
  return (
    <button
      className={classNames(className, [...baseClasses, ...darkClasses])}
      role="button"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
