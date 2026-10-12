import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/site";
import { cn } from "@/lib/utils";

export function FaqList({ tone = "cream" }: { tone?: "cream" | "ink" }) {
  const [open, setOpen] = useState<number | null>(0);
  const onCream = tone === "cream";

  return (
    <div className={cn("divide-y", onCream ? "divide-line border-y border-line" : "divide-ink-line border-y border-ink-line")}>
      {faqs.map((item, index) => {
        const isOpen = open === index;
        return (
          <div key={item.q}>
            <button
              type="button"
              className="flex min-h-11 w-full items-center justify-between gap-4 py-4 text-left text-base"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : index)}
            >
              <span className="font-medium">{item.q}</span>
              <ChevronDown
                className={cn("size-5 shrink-0 transition-transform", isOpen && "rotate-180")}
                aria-hidden="true"
              />
            </button>
            {isOpen ? (
              <p className={cn("pb-5 text-base leading-relaxed", onCream ? "text-muted" : "text-on-ink-muted")}>
                {item.a}
              </p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
