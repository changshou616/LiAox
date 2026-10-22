import { motion } from 'framer-motion';
import { ABOUT_INFO, ABOUT_STATS, TAGS, WORK_EXPERIENCE } from '@/data/portfolio';
import { BASE } from '@/lib/base';

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative scroll-mt-20 overflow-hidden border-t border-white/10 bg-[#0a1424]"
    >
      {/* 背景氛围光 */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-48 -top-48 size-[38rem] rounded-full bg-primary/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-56 -left-40 size-[30rem] rounded-full bg-blue-600/10 blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-[1700px] px-6 py-24 md:px-10 md:py-32">
        {/* 标题模块 */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <p className="frame-label">个人经历 / ABOUT</p>
          <h2 className="mt-5 font-display text-5xl leading-[0.95] tracking-tight md:text-7xl">
            WORK <span className="text-primary">EXPERIENCE</span>
          </h2>
        </motion.div>

        {/* 个人 IP 图 + 介绍/身份信息 */}
        <div className="mt-14 grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          {/* 个人 IP 图 */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative"
          >
            <div
              aria-hidden
              className="absolute -left-4 -top-4 hidden h-full w-full border border-primary/40 md:block"
            />
            <div className="relative overflow-hidden border border-white/15">
              <img
                src={`${BASE}images/portrait-dark.jpg`}
                alt="AI 编导 李翱翔"
                loading="lazy"
                decoding="async"
                className="aspect-square w-full object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-[#0a1424]/85 via-transparent to-transparent"
              />
              <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-5 py-4 font-mono text-[11px] tracking-[0.26em] text-white/85">
                <span>THE DIRECTOR</span>
                <span className="text-primary">● REC</span>
              </div>
            </div>
          </motion.div>

          {/* 右侧：介绍 + 身份信息 */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          >
            <h3 className="font-display text-3xl leading-tight tracking-tight text-white md:text-5xl">
              Hi, I am <span className="text-primary">李翱翔</span>
            </h3>
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-white/75 md:text-base">
              专注短视频的 AI 编导与运营：用「电影感 + AI 工具链」把选题、脚本、拍摄、生成、剪辑到数据复盘整条产线跑通，让内容在信息流里停得下来。
            </p>

            {/* 身份 / 服务方向 / 联系方式 */}
            <div className="mt-9 grid grid-cols-1 gap-px border border-white/10 bg-white/10 sm:grid-cols-2">
              {ABOUT_INFO.map((info) => (
                <div key={info.label} className="bg-[#0a1424] px-5 py-5">
                  <p className="font-mono text-[11px] tracking-[0.26em] text-white/50">
                    {info.label}
                  </p>
                  <p className="mt-2 text-[15px] font-medium tracking-wide text-white/90">
                    {info.value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* 数据亮点 */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          className="mt-14"
        >
          <div className="grid grid-cols-1 gap-px border border-white/10 bg-white/10 sm:grid-cols-3">
            {ABOUT_STATS.map((s) => (
              <div key={s.label} className="bg-[#0a1424] px-5 py-6">
                <span className="font-display text-4xl text-white md:text-5xl">{s.value}</span>
                <span className="mt-2 block font-mono text-[11px] tracking-[0.22em] text-white/55">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 标签展示 */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          className="mt-8"
        >
          <div className="flex flex-wrap gap-2">
            {TAGS.map((tag) => (
              <span
                key={tag}
                className="border border-primary/40 bg-primary/5 px-3.5 py-1.5 font-mono text-[11px] tracking-[0.16em] text-white/85"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* 工作经历时间线 */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          className="mt-20"
        >
          <p className="frame-label">WORK EXPERIENCE / 工作经历</p>
          <div className="mt-6 border-y border-white/10">
            {WORK_EXPERIENCE.map((job, i) => (
              <div
                key={job.id}
                className="grid gap-2 border-b border-white/10 py-6 last:border-b-0 md:grid-cols-[220px_1fr_auto] md:items-baseline md:gap-6"
              >
                <span className="font-mono text-[13px] tracking-[0.14em] text-primary">
                  {job.period}
                </span>
                <div>
                  <h4 className="font-display text-2xl tracking-wide text-white md:text-3xl">
                    {job.company}
                  </h4>
                  <p className="mt-1 font-mono text-[12px] tracking-[0.18em] text-white/55">
                    {job.position}
                  </p>
                </div>
                <span className="font-mono text-[11px] tracking-[0.24em] text-white/35 md:text-right">
                  NO.{String(i + 1).padStart(2, '0')}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
