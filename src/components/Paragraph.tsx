import classNames from 'classnames';

export interface ParagraphProps {
  className?: string;
  children?: React.ReactNode;
}

export function Paragraph({ className, children }: ParagraphProps) {
  return (
    <p
      className={classNames(
        'pt-2',
        'pb-2',
        'font-mono',
        'text-slate-900',
        'dark:text-slate-100',
        'leading-relaxed',
        className,
      )}
    >
      {children}
    </p>
  );
}
