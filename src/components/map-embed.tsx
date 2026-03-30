"use client";

import { useEffect, useRef, useState } from "react";

export function MapEmbed() {
  const [shouldLoad, setShouldLoad] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = containerRef.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "300px 0px",
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="mt-16 overflow-hidden rounded-2xl border-2 border-[rgba(212,175,55,0.2)] shadow-[0_4px_20px_rgba(30,58,95,0.08)]"
    >
      {shouldLoad ? (
        <iframe
          title="Elite Legal Consultancy Location"
          src="https://www.google.com/maps?q=3rd%20Floor,%20Treasury%20Square,%20Aizawl,%20Mizoram,%20Opposite%20Congress%20Bhawan&z=16&output=embed"
          className="h-[450px] w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <div className="h-[450px] w-full bg-[linear-gradient(180deg,#eef2f7,#e3e8ef)]" />
      )}
    </div>
  );
}
