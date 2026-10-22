import { useEffect, useState } from 'react';
import type { MouseEvent, ReactNode } from 'react';
import { cn } from '@/lib/utils';

export interface AnchorLinkProps {
  id: string;
  children: ReactNode;
  className?: string;
  activeClassName?: string;
}

// 单页锚点滚动：BrowserRouter 下 Link/NavLink 不会滚到锚点，这里统一处理。
export default function AnchorLink({
  id,
  children,
  className,
  activeClassName,
}: AnchorLinkProps) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = document.getElementById(id);
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        let intersecting = false;
        for (const entry of entries) {
          if (entry.isIntersecting) intersecting = true;
        }
        setActive(intersecting);
      },
      { rootMargin: '-45% 0px -45% 0px' },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [id]);

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    window.history.replaceState(null, '', `#${id}`);
  };

  return (
    <a
      href={`#${id}`}
      onClick={handleClick}
      aria-current={active ? 'true' : undefined}
      className={cn(className, active && activeClassName)}
    >
      {children}
    </a>
  );
}
