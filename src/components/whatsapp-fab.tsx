import { WhatsAppIcon } from "@/components/icons";
import { site } from "@/lib/site";

export function WhatsAppFab() {
  return (
    <a
      href={site.whatsapp}
      target="_blank"
      rel="noreferrer"
      className="dark-surface fixed right-4 bottom-4 z-40 grid size-14 place-items-center rounded-full bg-whatsapp text-whatsapp-ink shadow-[0_8px_24px_rgba(0,0,0,0.35)] hover:bg-accent md:right-6 md:bottom-6"
      aria-label={`WhatsApp ${site.phoneDisplay}`}
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}
