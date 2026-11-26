import { Link } from "@tanstack/react-router";

export function EnquiryLegalNote() {
  return (
    <p className="text-sm leading-relaxed text-muted">
      Your details are used only to reply to this enquiry.{" "}
      <Link to="/privacy" className="text-accent-ink underline underline-offset-4">
        Privacy Policy
      </Link>
      {" · "}
      <Link to="/terms" className="text-accent-ink underline underline-offset-4">
        Terms of Service
      </Link>
    </p>
  );
}
