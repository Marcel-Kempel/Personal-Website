export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 flex items-center gap-2.5">
      <span className="h-px w-5 bg-[#3B5FDB]" aria-hidden="true" />
      <span className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#3B5FDB]">
        {children}
      </span>
    </div>
  );
}

export function SectionHeader({
  label,
  title,
  text,
  className = "",
}: {
  label: string;
  title: string;
  text?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <SectionLabel>{label}</SectionLabel>
      <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
        {title}
      </h2>
      {text ? <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">{text}</p> : null}
    </div>
  );
}
