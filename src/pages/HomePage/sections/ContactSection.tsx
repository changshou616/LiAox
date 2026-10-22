import { motion } from 'framer-motion';
import { ArrowUp, Mail } from 'lucide-react';
import ContactRow from '@/components/ContactRow';
import { CONTACTS } from '@/data/portfolio';

const EMAIL = '3105627431@qq.com';

export default function ContactSection() {
  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section
      id="contact"
      className="relative flex min-h-screen flex-col overflow-hidden border-t border-border/70 bg-[#0b0a09]"
    >
      {/* 巨型背景字 */}
      <span
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-10 -translate-x-1/2 select-none whitespace-nowrap font-display text-[clamp(6rem,20vw,20rem)] leading-none text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.05)]"
      >
        CONTACT
      </span>

      <div className="relative z-10 mx-auto flex w-full max-w-[1700px] flex-1 flex-col justify-center px-6 py-28 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="frame-label">CONTACT / 联系我</p>
          <h2 className="mt-6 font-display text-[clamp(3rem,8vw,7.5rem)] leading-[0.9] tracking-tight">
            LET'S MAKE
            <br />
            <span className="text-primary">SOMETHING.</span>
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-foreground/70 md:text-lg">
            有项目想法、合作需求，或者只是想聊聊内容？随时找我，
            一起做点能让人停下来看完的片子。
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-3 bg-primary px-8 py-4 font-mono text-sm font-bold tracking-[0.2em] text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Mail aria-hidden className="size-4" />
              SEND AN EMAIL
            </a>
          </div>
        </motion.div>

        {/* 联系方式网格 */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
          className="mx-auto mt-16 grid w-full max-w-3xl gap-3 sm:grid-cols-3"
        >
          {CONTACTS.map((item) => (
            <ContactRow key={item.id} item={item} />
          ))}
        </motion.div>
      </div>

      {/* 页脚 */}
      <footer className="relative z-10 border-t border-border/70">
        <div className="mx-auto flex w-full max-w-[1700px] flex-wrap items-center justify-between gap-4 px-6 py-6 md:px-10">
          <p className="font-mono text-[11px] tracking-[0.24em] text-muted-foreground">
            © 2026 AI·DIRECTOR — 短视频导演 · AI 影像 · 内容运营
          </p>
          <button
            type="button"
            onClick={backToTop}
            className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.24em] text-muted-foreground transition-colors hover:text-primary"
          >
            BACK TO TOP
            <ArrowUp aria-hidden className="size-4" />
          </button>
        </div>
      </footer>
    </section>
  );
}
