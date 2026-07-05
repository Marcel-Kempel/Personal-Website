import { useEffect, useRef, useState } from "react";
import { clsx } from "clsx";

function useInView(threshold = 0.14) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold, rootMargin: "0px 0px -48px 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

export function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, inView } = useInView();
  const style = delay ? ({ "--reveal-delay": `${delay}s` } as React.CSSProperties) : undefined;

  return (
    <div
      ref={ref}
      className={clsx("reveal", inView && "is-visible", className)}
      style={style}
    >
      {children}
    </div>
  );
}
