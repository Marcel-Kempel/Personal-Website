import { ArrowRight } from "lucide-react";
import { clsx } from "clsx";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  icon?: React.ReactNode;
  fullWidthOnMobile?: boolean;
  download?: boolean;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  icon,
  fullWidthOnMobile = true,
  download,
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      download={download}
      className={clsx(
        "button-link inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        fullWidthOnMobile && "w-full sm:w-auto",
        variant === "primary"
          ? "bg-primary text-primary-foreground shadow-[0_10px_24px_rgba(13,21,32,0.12)] hover:bg-[#243755]"
          : "border border-border bg-background text-foreground hover:border-[#3B5FDB]/35 hover:bg-accent"
      )}
    >
      {icon}
      {children}
      {variant === "primary" && !icon ? <ArrowRight size={15} aria-hidden="true" /> : null}
    </a>
  );
}

type PlaceholderButtonProps = {
  children: React.ReactNode;
  icon?: React.ReactNode;
};

export function PlaceholderButton({ children, icon }: PlaceholderButtonProps) {
  return (
    <button
      type="button"
      disabled
      className="inline-flex min-h-11 w-full cursor-not-allowed items-center justify-center gap-2 rounded-md border border-border bg-muted/65 px-5 py-3 text-sm font-semibold text-muted-foreground sm:w-auto"
      title="Platzhalter: Datei wird später ergänzt"
    >
      {icon}
      {children}
    </button>
  );
}
