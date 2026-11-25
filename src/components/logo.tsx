import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

const sources = {
  /** Cream wordmark and lime ring, for the ink header and footer. */
  "on-ink": "/brand/event-horizon-horizontal-reversed-lime.svg",
  /** Ink mark, for any light surface that shows the logo. */
  "on-light": "/brand/event-horizon-horizontal.svg",
} as const;

export function Logo({
  tone = "on-ink",
  className,
}: {
  tone?: keyof typeof sources;
  className?: string;
}) {
  return (
    <Link
      to="/"
      className="inline-flex min-h-11 shrink-0 items-center"
      aria-label="Adilflow home"
    >
      <img
        src={sources[tone]}
        alt="Adilflow"
        width={405}
        height={82}
        className={cn("h-8 w-auto", className)}
      />
    </Link>
  );
}
