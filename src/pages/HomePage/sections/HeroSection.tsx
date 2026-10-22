import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import AnchorLink from '@/components/AnchorLink';
import { HERO_STATS } from '@/data/portfolio';
import { BASE } from '@/lib/base';

export default function HeroSection() {
  return (
    <section id="top" className="relative flex min-h-screen flex-col overflow-hidden">
      {/* 背景视频 + 兜底渐变 */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a120c] via-background to-background" />
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover opacity-70"
        src={`${BASE}videos/hero-bg.mp4`}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/25 to-background" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1700px] flex-1 flex-col justify-center px-6 pb-10 pt-28 md:px-10">
        {/* 左上角坐标标注 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-8 flex items-center justify-between font-mono text-[11px] tracking-[0.3em] text-muted-foreground md:mb-12"
        >
          <span>FRAME 001 / ROLLING</span>
          <span className="hidden md:inline">BASED IN 中国 · 可远程合作</span>
        </motion.div>

        {/* 超大标题 */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="font-display text-[clamp(4.2rem,13vw,13rem)] leading-[0.88] tracking-tight"
        >
          <span className="text-primary">AI</span> DIRECTOR
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: 'easeOut' }}
          className="mt-8 space-y-4 md:mt-10"
        >
          <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground md:text-sm">
            SHORT-FORM VIDEO <span className="text-primary">·</span> AI FILM{' '}
            <span className="text-primary">·</span> CONTENT OPERATIONS
          </p>
          <p className="max-w-xl text-base leading-relaxed text-foreground/80 md:text-lg">
            用 AI 与电影感，做出让人停下来的短视频。从创意策划、AI
            制作到运营复盘，一个人跑通整条产线。
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <AnchorLink
            id="work"
            className="group inline-flex items-center gap-3 bg-primary px-8 py-4 font-mono text-sm font-bold tracking-[0.2em] text-primary-foreground transition-colors hover:bg-primary/90"
          >
            VIEW MY WORK
            <ArrowDown aria-hidden className="size-4 transition-transform group-hover:translate-y-0.5" />
          </AnchorLink>
          <AnchorLink
            id="contact"
            className="inline-flex items-center gap-3 border border-border px-8 py-4 font-mono text-sm font-semibold tracking-[0.2em] text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            GET IN TOUCH
          </AnchorLink>
        </motion.div>
      </div>

      {/* 底部数据栏 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="relative z-10 border-t border-border/80 bg-background/60 backdrop-blur-sm"
      >
        <div className="mx-auto grid w-full max-w-[1700px] grid-cols-2 gap-y-6 px-6 py-7 md:grid-cols-4 md:px-10">
          {HERO_STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <span className="font-display text-3xl text-primary md:text-4xl">
                {stat.value}
              </span>
              <span className="font-mono text-[11px] tracking-[0.28em] text-muted-foreground">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
