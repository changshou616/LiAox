import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import AnchorLink from '@/components/AnchorLink';
import { NAV_ITEMS } from '@/data/portfolio';

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-border bg-background/85 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-[1700px] items-center justify-between px-6 md:h-20 md:px-10">
        {/* Logo */}
        <AnchorLink id="top" className="flex items-center gap-2.5" activeClassName="!text-foreground">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
          </span>
          <span className="font-mono text-sm font-semibold tracking-[0.22em] text-foreground">
            AI·DIRECTOR
          </span>
        </AnchorLink>

        {/* 导航 */}
        <nav className="hidden items-center gap-9 md:flex" aria-label="主导航">
          {NAV_ITEMS.map((item) => (
            <AnchorLink
              key={item.id}
              id={item.id}
              className="font-mono text-[13px] font-medium tracking-[0.24em] text-muted-foreground transition-colors hover:text-foreground"
              activeClassName="!text-primary"
            >
              {item.label}
            </AnchorLink>
          ))}
        </nav>

        {/* CTA */}
        <AnchorLink
          id="contact"
          className="group inline-flex items-center gap-2 border border-primary/70 px-5 py-2 font-mono text-[13px] font-semibold tracking-[0.18em] text-primary transition-all hover:bg-primary hover:text-primary-foreground"
        >
          LET'S TALK
          <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
            →
          </span>
        </AnchorLink>
      </div>
    </header>
  );
}
