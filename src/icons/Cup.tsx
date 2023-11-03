export function Cup({ className, width, height }: { className?: string, width?: number, height?: number }) {
  return (
    <span className={className}>
      <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24"> <g> <path fill="none" d="M0 0h24v24H0z" /> <path fill="currentColor" stroke="currentColor" d="M16 13V5H6v8a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2zM5 3h15a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-2v3a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V4a1 1 0 0 1 1-1zm13 2v3h2V5h-2zM2 19h18v2H2v-2z" /> </g> </svg>
    </span>)
}
