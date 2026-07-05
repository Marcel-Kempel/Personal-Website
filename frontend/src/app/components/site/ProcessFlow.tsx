import { CheckCircle2 } from "lucide-react";
import { clsx } from "clsx";
import { processNodes } from "../../content";

export function ProcessFlow() {
  return (
    <figure
      className="relative mx-auto w-full max-w-[28rem] select-none lg:ml-auto"
      aria-label="Abstrakte Prozessgrafik von manuellem Prozess über Datenstruktur und Automatisierung bis zum Dashboard"
    >
      <div className="absolute inset-0 rounded-[2rem] border border-border/70 bg-card/55 shadow-[0_24px_70px_rgba(13,21,32,0.08)]" />
      <div className="relative overflow-hidden rounded-[2rem] p-4 sm:p-5">
        <div className="mb-4 flex items-center justify-between border-b border-border/70 pb-4">
          <div>
            <p className="font-mono text-[0.66rem] uppercase tracking-[0.18em] text-muted-foreground">
              Prozesskette
            </p>
            <p className="mt-1 text-sm font-semibold text-foreground">Von Aufwand zu Übersicht</p>
          </div>
          <div className="flex items-center gap-1.5 rounded-full border border-[#4A766E]/20 bg-[#EDF5F2] px-2.5 py-1 text-[0.68rem] font-semibold text-[#315B54]">
            <CheckCircle2 size={12} aria-hidden="true" />
            strukturiert
          </div>
        </div>

        <div className="grid gap-3">
          {processNodes.map((node, index) => (
            <div key={node.step} className="relative">
              <div
                className={clsx(
                  "flow-reveal relative z-10 flex items-center gap-3 rounded-lg border px-4 py-3.5 shadow-sm",
                  node.accent
                    ? "border-[#3B5FDB]/35 bg-[#F2F5FF]"
                    : "border-border bg-background"
                )}
                style={{ "--flow-delay": `${350 + index * 100}ms` } as React.CSSProperties}
              >
                <span
                  className={clsx(
                    "font-mono text-[0.68rem] font-semibold tabular-nums",
                    node.accent ? "text-[#3B5FDB]" : "text-muted-foreground"
                  )}
                >
                  {node.step}
                </span>
                <div className="min-w-0">
                  <p
                    className={clsx(
                      "truncate text-sm font-semibold",
                      node.accent ? "text-[#223FBA]" : "text-foreground"
                    )}
                  >
                    {node.label}
                  </p>
                  <p className="mt-0.5 truncate font-mono text-[0.68rem] text-muted-foreground">
                    {node.sub}
                  </p>
                </div>
              </div>

              {index < processNodes.length - 1 ? (
                <div
                  className="flow-reveal flex flex-col items-center py-1"
                  aria-hidden="true"
                  style={{ "--flow-delay": `${480 + index * 100}ms` } as React.CSSProperties}
                >
                  <span className="h-3 w-px bg-border" />
                  <span className="h-0 w-0 border-l-[4px] border-r-[4px] border-t-[5px] border-l-transparent border-r-transparent border-t-muted-foreground/45" />
                </div>
              ) : null}
            </div>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2">
          {["Input", "Logik", "KPI"].map((item, index) => (
            <div
              key={item}
              className="flow-reveal flow-reveal-up rounded-md border border-border bg-secondary/55 px-3 py-2"
              style={{ "--flow-delay": `${850 + index * 80}ms` } as React.CSSProperties}
            >
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-muted-foreground">
                {item}
              </p>
              <div className="mt-2 h-1.5 rounded-full bg-[#3B5FDB]/20">
                <div
                  className="h-full rounded-full bg-[#3B5FDB]"
                  style={{ width: `${54 + index * 14}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </figure>
  );
}
