import { Link } from "@tanstack/react-router";

export function Logo() {
  return (
    <Link
      to="/"
      className="inline-flex min-h-11 items-center text-on-ink"
      aria-label="adilflow home"
    >
      <svg viewBox="0 0 148 32" className="h-8 w-auto" role="img" aria-hidden="true">
        <text
          x="0"
          y="25"
          fill="currentColor"
          fontFamily="Instrument Serif, Georgia, serif"
          fontSize="30"
        >
          adilflow
        </text>
      </svg>
    </Link>
  );
}
