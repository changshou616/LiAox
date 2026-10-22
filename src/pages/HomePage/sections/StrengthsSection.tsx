import { motion } from 'framer-motion';
import { BarChart3, Clapperboard, Cpu, Scissors, TrendingUp, Video } from 'lucide-react';
import { STRENGTHS } from '@/data/portfolio';
import type { IStrength } from '@/data/portfolio';

const ICON_MAP: Record<string, typeof Video> = {
  clapperboard: Clapperboard,
  cpu: Cpu,
  trending: TrendingUp,
  video: Video,
  scissors: Scissors,
  chart: BarChart3,
};

export default function StrengthsSection() {
  return (
    <section id="strengths" className="scroll-mt-20 border-t border-border/70 bg-background">
      <div className="mx-auto w-full max-w-[1700px] px-6 py-24 md:px-10 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <p className="frame-label">CORE STRENGTHS / 个人优势</p>
          <h2 className="mt-5 font-display text-5xl leading-[0.95] tracking-tight md:text-7xl">
            WHAT I <span className="text-primary">BRING</span>
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3 md:mt-20">
          {STRENGTHS.map((strength, i) => {
            const Icon = ICON_MAP[strength.icon] ?? Video;
            return (
              <motion.article
                key={strength.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: (i % 3) * 0.07, ease: 'easeOut' }}
                className="group relative flex flex-col border border-border bg-card p-7 transition-colors duration-300 hover:border-primary/70 md:p-8"
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs tracking-[0.3em] text-primary">
                    {strength.no}
                  </span>
                  <Icon aria-hidden className="size-6 text-muted-foreground transition-colors group-hover:text-primary" />
                </div>
                <h3 className="mt-10 font-display text-[1.7rem] leading-none tracking-wide text-foreground md:text-3xl">
                  {strength.titleEn}
                </h3>
                <p className="mt-2 font-mono text-[11px] tracking-[0.26em] text-muted-foreground">
                  {strength.title}
                </p>
                <div className="rule-line mt-6 w-12 opacity-60" />
                <p className="mt-4 text-sm leading-relaxed text-foreground/65">
                  {strength.desc}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
