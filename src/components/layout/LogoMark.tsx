type Props = { className?: string };

/** WinStaff mark: two heads over a W-shaped pair of shoulders. Inherits currentColor. */
export function LogoMark({ className = "" }: Props) {
  return (
    <svg viewBox="0 0 100 100" fill="none" aria-hidden="true" className={className}>
      <circle cx="34.5" cy="36" r="9.5" fill="currentColor" />
      <circle cx="65.5" cy="36" r="9.5" fill="currentColor" />
      <path
        d="M19 54 L34 70 L50 52 L66 70 L81 54"
        stroke="currentColor"
        strokeWidth="15"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
