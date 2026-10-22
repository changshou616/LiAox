import { ArrowUpRight, Copy, Mail, MessageCircle, Play, Tv } from 'lucide-react';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';
import type { IContactItem } from '@/data/portfolio';

const ICON_MAP: Record<IContactItem['type'], typeof Mail> = {
  mail: Mail,
  wechat: MessageCircle,
  douyin: Play,
  bilibili: Tv,
};

export interface ContactRowProps {
  item: IContactItem;
  className?: string;
}

export default function ContactRow({ item, className }: ContactRowProps) {
  const Icon = ICON_MAP[item.type] ?? Copy;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(item.value);
      toast.success(`已复制${item.label}`);
    } catch {
      toast.error('复制失败，请手动复制');
    }
  };

  const baseClass = cn(
    'group flex w-full items-center justify-between gap-4 border border-border bg-card/60 px-5 py-4 text-left transition-colors hover:border-primary/70',
    className,
  );

  const content = (
    <>
      <span className="flex min-w-0 items-center gap-4">
        <Icon aria-hidden className="size-5 shrink-0 text-primary" />
        <span className="flex min-w-0 flex-col gap-0.5">
          <span className="font-mono text-[11px] tracking-[0.24em] text-muted-foreground">
            {item.label.toUpperCase()}
          </span>
          <span className="truncate text-sm font-medium text-foreground">{item.value}</span>
        </span>
      </span>
      {item.type === 'mail' ? (
        <ArrowUpRight
          aria-hidden
          className="size-4 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
        />
      ) : (
        <Copy
          aria-hidden
          className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
        />
      )}
    </>
  );

  if (item.type === 'mail') {
    return (
      <a href={`mailto:${item.value}`} className={baseClass}>
        {content}
      </a>
    );
  }
  return (
    <button type="button" onClick={handleCopy} className={baseClass}>
      {content}
    </button>
  );
}
