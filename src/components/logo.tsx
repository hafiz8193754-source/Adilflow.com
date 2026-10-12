import { Link } from "@tanstack/react-router";

export function Logo() {
  return (
    <Link
      to="/"
      className="inline-flex min-h-11 items-center text-on-ink"
      aria-label="Adilflow home"
    >
      <svg viewBox="0 0 110 32" className="h-8 w-auto" role="img" aria-hidden="true">
        <text
          x="0"
          y="25"
          fill="currentColor"
          fontFamily="Instrument Serif, Georgia, serif"
          fontSize="30"
        >
          Adilflow
        </text>
      </svg>
    </Link>
  );
}
