import { useEffect } from "react";

export function useAutoScroll(
  ref: React.RefObject<HTMLElement | null>, // allow null
  active: boolean
) {
  useEffect(() => {
    if (!active || !ref.current) return;

    const el = ref.current;
    el.scrollTop = el.scrollHeight;

    const observer = new MutationObserver(() => {
      el.scrollTop = el.scrollHeight;
    });

    observer.observe(el, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, [ref, active]);
}