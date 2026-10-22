import { useState } from 'react';
import { Play, Pause } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Image } from '@/components/ui/image';
import { cn } from '@/lib/utils';
import type { IProject } from '@/data/portfolio';

export interface ProjectCardProps {
  project: IProject;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [open, setOpen] = useState(false);
  const hasVideo = Boolean(project.video);

  const card = (
    <>
      {/* 海报 */}
      <div className="relative overflow-hidden">
        <Image
          src={project.poster}
          alt={project.title}
          className={cn(
            'w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]',
            project.ratio === '9:16' ? 'aspect-[9/16]' : 'aspect-video',
          )}
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-black/10"
        />

        {/* 取景框标注 */}
        <div className="absolute left-4 top-4 flex items-center gap-2 font-mono text-[10px] tracking-[0.24em] text-white/85">
          <span className="border border-white/30 px-2 py-1">{project.reel}</span>
          <span className="hidden border border-white/30 px-2 py-1 sm:inline">
            {project.year}
          </span>
        </div>
        <span className="absolute right-4 top-4 border border-white/30 px-2 py-1 font-mono text-[10px] tracking-[0.2em] text-white/85">
          {project.ratio}
        </span>

        {/* 播放按钮 */}
        {hasVideo && (
          <span
            aria-hidden
            className="absolute left-1/2 top-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/40 backdrop-blur-sm transition-all duration-300 group-hover:border-primary group-hover:bg-primary md:size-20"
          >
            <Play className="size-6 fill-current text-white transition-colors group-hover:text-primary-foreground md:size-7" />
          </span>
        )}
      </div>

      {/* 信息 */}
      <div className="flex flex-col gap-3 border-t border-border p-5 md:p-6">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-display text-2xl tracking-wide text-foreground md:text-[1.7rem]">
            {project.titleEn}
          </h3>
          <span className="shrink-0 font-mono text-[11px] tracking-[0.2em] text-muted-foreground">
            {project.duration}
          </span>
        </div>
        <p className="font-mono text-[11px] tracking-[0.26em] text-primary">
          {project.title} · {project.category}
        </p>
        <p className="line-clamp-2 text-sm leading-relaxed text-foreground/65">
          {project.desc}
        </p>
        <div className="mt-1 flex items-center justify-between font-mono text-[11px] tracking-[0.2em] text-muted-foreground">
          <span>{project.playCount}</span>
          {hasVideo ? (
            <span className="inline-flex items-center gap-1.5 text-foreground/70">
              <Pause aria-hidden className="size-3" />
              点击播放
            </span>
          ) : (
            <span>CASE STUDY</span>
          )}
        </div>
      </div>
    </>
  );

  const cardClass = cn(
    'group relative flex break-inside-avoid flex-col overflow-hidden border border-border bg-card transition-colors duration-300 hover:border-primary/60',
    hasVideo && 'cursor-pointer',
  );

  if (!hasVideo) {
    return <article className={cardClass}>{card}</article>;
  }

  return (
    <>
      <div
        role="button"
        tabIndex={0}
        aria-label={`播放项目 ${project.title}`}
        className={cardClass}
        onClick={() => setOpen(true)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setOpen(true);
          }
        }}
      >
        {card}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-4xl gap-0 overflow-hidden border-border bg-black p-0">
          <DialogHeader className="sr-only">
            <DialogTitle>{project.title}</DialogTitle>
            <DialogDescription>{project.desc}</DialogDescription>
          </DialogHeader>
          <video
            src={project.video}
            controls
            autoPlay
            playsInline
            className="max-h-[70vh] w-full bg-black object-contain"
          />
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border bg-card px-6 py-4">
            <div>
              <p className="font-display text-xl tracking-wide">{project.titleEn}</p>
              <p className="mt-0.5 font-mono text-[11px] tracking-[0.22em] text-muted-foreground">
                {project.reel} · {project.title} · {project.category}
              </p>
            </div>
            <span className="font-mono text-[11px] tracking-[0.2em] text-primary">
              {project.playCount}
            </span>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
