import { motion } from 'framer-motion';
import ProjectCard from '@/pages/HomePage/sections/ProjectCard';
import { PROJECTS } from '@/data/portfolio';

export default function WorksSection() {
  return (
    <section id="work" className="scroll-mt-20 border-t border-border/70 bg-[#0b0a09]">
      <div className="mx-auto w-full max-w-[1700px] px-6 py-24 md:px-10 md:py-32">
        {/* 标题区 */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-14 flex flex-wrap items-end justify-between gap-6 md:mb-20"
        >
          <div>
            <p className="frame-label">SELECTED WORKS / 精选项目</p>
            <h2 className="mt-5 font-display text-5xl leading-[0.95] tracking-tight md:text-7xl">
              WORKS THAT STOP
              <br />
              <span className="text-primary">THE SCROLL</span>
            </h2>
          </div>
          <p className="max-w-xs font-mono text-[11px] leading-relaxed tracking-[0.2em] text-muted-foreground">
            2023 — 2025 · 点击带播放键的卡片预览成片
          </p>
        </motion.div>

        {/* 瀑布式卡片网格 */}
        <div className="columns-1 gap-6 md:columns-2">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.08, ease: 'easeOut' }}
              className="mb-6"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
