import { useEffect, useState } from 'react'
import { AnimatePresence, LayoutGroup, motion, useScroll, useSpring } from 'framer-motion'
import {
  ArrowUpRight,
  Award,
  Bot,
  Briefcase,
  Download,
  ExternalLink,
  Eye,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
  Workflow,
  X,
} from 'lucide-react'

const projects = [
  {
    id: 'mariecare',
    name: 'MarieCare',
    type: 'Full-Stack Medical Appointment Platform',
    summary: 'A healthcare workflow platform connecting scheduling, payments, and notifications.',
    details:
      'Built with React.js, Node.js, Express, and MongoDB. It includes appointment booking, JWT authentication, Stripe payments, Socket.IO notifications, emails, and cloud image storage.',
    stack: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Socket.IO', 'Stripe'],
    liveUrl: 'https://doctor-appointment-frontend-one.vercel.app',
    githubUrl: 'https://github.com/OsmanJah/doctor-appointment',
    accent: 'from-[#ff8a1f]/42 via-[#ffe27a]/20 to-[#67f3de]/24',
  },
  {
    id: 'toycatcher',
    name: 'Toy Catcher',
    type: 'Python Arcade Game',
    summary: 'A gameplay-focused project with scoring systems, power-ups, and local persistence.',
    details:
      'Developed with Python and Pygame. Includes difficulty levels, combo scoring, sound effects, power-ups, and a SQLite leaderboard.',
    stack: ['Python', 'Pygame', 'SQLite'],
    githubUrl: 'https://github.com/OsmanJah/TeamPlasas',
    accent: 'from-[#67f3de]/34 via-[#70a8ff]/18 to-[#ff8a1f]/24',
  },
]

const certifications = [
  {
    id: 'sc900',
    title: 'Microsoft Certified: Security, Compliance, and Identity Fundamentals',
    issued: 'Issued January 2025',
    verifyUrl: 'https://www.credly.com/badges/d917da52-4d6e-455f-aa45-5efa8ae62514/linked_in_profile',
  },
  {
    id: 'htmlcss',
    title: 'IT Specialist - HTML and CSS',
    issued: 'Issued January 2025',
    verifyUrl: 'https://www.credly.com/badges/6f368252-a862-49b5-ae8e-112c37a1e800/linked_in_profile',
  },
  {
    id: 'unity',
    title: 'Unity Certified User: Programmer',
    issued: 'Issued January 2025',
    verifyUrl: 'https://www.credly.com/badges/534f7468-d444-4723-a1d1-23dfe3468c45/linked_in_profile',
  },
]

const documents = [
  ['Resume / CV', '/Osman_Jah_CV.pdf', 'Download Resume / CV'],
  ['Bachelor Degree', '/Osman_Jah_Degree.pdf', 'Download Degree PDF'],
  ['Certifications Transcript', '/Osman_Jah_Certifications.pdf', 'Download Transcript'],
  ['Recommendation Letter', '/Osman_Jah_GOAL_Recommendation.pdf', 'Download Recommendation Letter'],
]

const skills = [
  'Google Workspace',
  'Inbox and Calendar Management',
  'AI Tools and Automation',
  'WordPress CMS',
  'Process Documentation',
  'React.js',
  'Node.js',
  'JavaScript',
  'Python',
  'REST APIs',
  'Git and GitHub',
]

const facts = [
  { icon: MapPin, label: 'Based in', value: 'Budapest, Hungary' },
  { icon: GraduationCap, label: 'Degree', value: 'B.Sc. Computer Science' },
  { icon: Bot, label: 'Approach', value: 'Automation-first support' },
]

const pillars = [
  {
    icon: Briefcase,
    title: 'Remote Operations',
    text: 'Reliable support across inboxes, schedules, follow-ups, and execution-heavy admin work.',
  },
  {
    icon: Workflow,
    title: 'Process Thinking',
    text: 'Cleaner workflows, better handoffs, and systems that reduce friction over time.',
  },
  {
    icon: Sparkles,
    title: 'Technical Range',
    text: 'Comfortable switching between business support, tooling, and product-minded tasks.',
  },
]

const section = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

function App() {
  const [activeCard, setActiveCard] = useState(null)
  const [activeDocument, setActiveDocument] = useState(null)
  const motionEnabled = Boolean(motion)

  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 26, mass: 0.35 })

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveCard(null)
        setActiveDocument(null)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  useEffect(() => {
    document.body.style.overflow = activeCard || activeDocument ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [activeCard, activeDocument])

  const activeItem =
    activeCard?.type === 'project'
      ? projects.find((project) => project.id === activeCard.id)
      : certifications.find((certification) => certification.id === activeCard?.id)

  const openDocument = (title, source, downloadLabel) => {
    setActiveDocument({ title, source, downloadLabel })
  }

  return (
    <div data-motion={motionEnabled ? 'enabled' : 'disabled'} className="relative min-h-screen overflow-x-clip bg-[var(--bg)] text-[var(--text)]">
      <div className="pointer-events-none fixed inset-0 -z-20 bg-[linear-gradient(180deg,rgba(8,26,45,0.98),rgba(6,19,33,0.98))]" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_12%_14%,rgba(255,138,31,0.24),transparent_18%),radial-gradient(circle_at_84%_16%,rgba(103,243,222,0.18),transparent_20%),radial-gradient(circle_at_70%_72%,rgba(120,167,255,0.16),transparent_24%)]" />
      <div className="pointer-events-none fixed left-[-7rem] top-[7rem] -z-10 h-[24rem] w-[24rem] rounded-full bg-[rgba(255,138,31,0.16)] blur-[130px]" />
      <div className="pointer-events-none fixed right-[-8rem] top-[18rem] -z-10 h-[28rem] w-[28rem] rounded-full bg-[rgba(103,243,222,0.12)] blur-[140px]" />
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:72px_72px]" />
      <motion.div
        style={{ scaleX: progress }}
        className="fixed left-0 right-0 top-0 z-[70] h-1 origin-left bg-gradient-to-r from-[var(--accent)] via-[#ffd166] to-[var(--accent-2)]"
      />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(8,20,34,0.68)] backdrop-blur-2xl">
        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-6 py-4">
          <a href="#home" className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.24em] text-[var(--text)]">
            <span className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-[linear-gradient(145deg,rgba(255,138,31,0.16),rgba(120,167,255,0.14))] font-[family-name:var(--font-display)] text-base tracking-normal shadow-[0_0_24px_rgba(120,167,255,0.08)]">
              OJ
            </span>
            <span className="hidden sm:block">Osman Jah</span>
          </a>

          <div className="hidden items-center gap-7 text-sm text-[var(--text-soft)] md:flex">
            <a href="#about" className="transition hover:text-[var(--text)]">About</a>
            <a href="#work" className="transition hover:text-[var(--text)]">Work</a>
            <a href="#credentials" className="transition hover:text-[var(--text)]">Credentials</a>
            <a href="#contact" className="transition hover:text-[var(--text)]">Contact</a>
          </div>

          <a
            href="mailto:osmann5260@gmail.com"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white/5 px-4 py-2 text-sm font-semibold text-[var(--text)] transition hover:border-[var(--accent)] hover:bg-[rgba(255,122,24,0.12)]"
          >
            <Mail className="h-4 w-4" />
            <span className="hidden sm:inline">Let&apos;s Talk</span>
          </a>
        </nav>
      </header>

      <main className="relative z-10">
        <motion.section
          id="home"
          variants={section}
          initial="hidden"
          animate="show"
          className="mx-auto w-full max-w-7xl px-6 pb-20 pt-8 lg:pt-10"
        >
          <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
            <motion.article
              variants={item}
              className="relative overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[var(--surface)] p-8 shadow-[0_28px_90px_rgba(0,0,0,0.34)] backdrop-blur-xl sm:p-10 xl:p-12"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,138,31,0.2),transparent_36%),radial-gradient(circle_at_92%_10%,rgba(103,243,222,0.14),transparent_24%),linear-gradient(135deg,rgba(255,255,255,0.06),transparent_62%)]" />
              <div className="relative">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-[rgba(255,122,24,0.28)] bg-[rgba(255,122,24,0.12)] px-4 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#ffd4b0]">
                    Remote Operations and AI-Fluent Support
                  </span>
                  <span className="rounded-full border border-[rgba(110,231,216,0.22)] bg-[rgba(110,231,216,0.08)] px-4 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#bdf8f0]">
                    Available Worldwide
                  </span>
                </div>

                <h1 className="mt-8 max-w-4xl font-[family-name:var(--font-display)] text-5xl leading-[0.9] tracking-[-0.06em] text-[var(--text)] sm:text-6xl lg:text-7xl">
                  Calm, polished execution for teams that move fast and expect clarity.
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--text-muted)] sm:text-xl">
                  I am Osman Jah, a Computer Science graduate bringing structure, ownership, and automation-minded support
                  to modern remote teams.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => openDocument('Resume / CV', '/Osman_Jah_CV.pdf', 'Download Resume / CV')}
                    className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-[#111111] transition hover:bg-[#ff9340]"
                  >
                    <Eye className="h-4 w-4" />
                    Preview Resume
                  </button>
                  <a
                    href="#work"
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white/5 px-5 py-3 text-sm font-semibold text-[var(--text)] transition hover:border-[var(--accent)] hover:bg-[rgba(255,122,24,0.12)]"
                  >
                    View Work
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/osman-jah-51548a344"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white/5 px-5 py-3 text-sm font-semibold text-[var(--text)] transition hover:border-[var(--accent-2)] hover:bg-[rgba(110,231,216,0.1)]"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                </div>

                <div className="mt-10 grid gap-4 md:grid-cols-3">
                  {facts.map((fact) => {
                    const Icon = fact.icon
                    return (
                      <div key={fact.label} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                        <Icon className="h-5 w-5 text-[var(--accent-2)]" />
                        <p className="mt-4 text-xs uppercase tracking-[0.24em] text-[var(--text-soft)]">{fact.label}</p>
                        <p className="mt-2 text-base font-semibold leading-snug text-[var(--text)]">{fact.value}</p>
                      </div>
                    )
                  })}
                </div>
              </div>
            </motion.article>

            <div className="grid gap-6">
              <motion.article
                variants={item}
                className="relative min-h-[27rem] overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[var(--surface-strong)] shadow-[0_24px_80px_rgba(0,0,0,0.36)]"
              >
                <img src="/Osman_Jah_Profile.jpeg" alt="Osman Jah" className="h-full w-full object-cover object-top" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_18%,rgba(255,181,72,0.22),transparent_22%),linear-gradient(180deg,rgba(4,15,26,0)_18%,rgba(5,14,24,0.84)_100%)]" />
                <div className="absolute bottom-6 left-6 right-6 rounded-[1.6rem] border border-white/10 bg-[rgba(8,20,34,0.68)] p-5 backdrop-blur-xl">
                  <p className="font-[family-name:var(--font-mono)] text-[0.68rem] uppercase tracking-[0.34em] text-[var(--text-soft)]">Profile</p>
                  <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl leading-[0.94] tracking-[-0.04em] text-[var(--text)]">
                    Tech-fluent support with polished delivery and operational calm.
                  </h2>
                </div>
              </motion.article>

              <motion.div variants={item} className="grid gap-4 sm:grid-cols-2">
                <article className="rounded-[1.75rem] border border-[var(--line)] bg-white/5 p-6 backdrop-blur-xl">
                  <p className="font-[family-name:var(--font-mono)] text-[0.68rem] uppercase tracking-[0.34em] text-[var(--text-soft)]">Snapshot</p>
                  <p className="mt-4 text-lg font-semibold text-[var(--text)]">
                    Technical confidence paired with calm operational follow-through.
                  </p>
                </article>
                <article className="rounded-[1.75rem] border border-[var(--line)] bg-white/5 p-6 backdrop-blur-xl">
                  <p className="font-[family-name:var(--font-mono)] text-[0.68rem] uppercase tracking-[0.34em] text-[var(--text-soft)]">Direct Access</p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <a href="https://github.com/OsmanJah" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-[var(--text)]">
                      <Github className="h-4 w-4" />
                      GitHub
                    </a>
                    <a href="mailto:osmann5260@gmail.com" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-[var(--text)]">
                      <Mail className="h-4 w-4" />
                      Email
                    </a>
                  </div>
                </article>
              </motion.div>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="about"
          variants={section}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto w-full max-w-7xl px-6 pb-20"
        >
          <div className="grid gap-6 xl:grid-cols-[0.88fr_1.12fr]">
            <motion.article variants={item} className="rounded-[2rem] border border-[var(--line)] bg-[var(--surface)] p-8 backdrop-blur-xl sm:p-10">
              <p className="font-[family-name:var(--font-mono)] text-[0.72rem] uppercase tracking-[0.34em] text-[var(--text-soft)]">About and Skills</p>
              <h2 className="mt-4 max-w-3xl font-[family-name:var(--font-display)] text-4xl leading-[0.94] tracking-[-0.04em] text-[var(--text)] sm:text-5xl">
                Built for dependable support, sharper systems, and thoughtful execution.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">
                Born in Freetown, Sierra Leone and currently based in Hungary, I bring both technical fluency and calm operational discipline to the work.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {pillars.map((pillar) => {
                  const Icon = pillar.icon
                  return (
                    <div key={pillar.title} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                      <Icon className="h-5 w-5 text-[var(--accent)]" />
                      <h3 className="mt-4 text-lg font-semibold text-[var(--text)]">{pillar.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">{pillar.text}</p>
                    </div>
                  )
                })}
              </div>
            </motion.article>

            <motion.article variants={item} className="rounded-[2rem] border border-[var(--line)] bg-[linear-gradient(160deg,rgba(16,39,61,0.82),rgba(10,24,38,0.92))] p-8 backdrop-blur-xl sm:p-10">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="font-[family-name:var(--font-mono)] text-[0.72rem] uppercase tracking-[0.34em] text-[var(--text-soft)]">Toolkit</p>
                  <h3 className="mt-3 font-[family-name:var(--font-display)] text-3xl leading-[0.96] tracking-[-0.04em] text-[var(--text)] sm:text-4xl">
                    Operations fluency and hands-on technical skills.
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => openDocument('Bachelor Degree', '/Osman_Jah_Degree.pdf', 'Download Degree PDF')}
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white/5 px-4 py-2 text-sm font-semibold text-[var(--text)] transition hover:border-[var(--accent)]"
                >
                  <Eye className="h-4 w-4" />
                  Preview Degree
                </button>
              </div>
              <div className="mt-8 grid gap-6">
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <span key={skill} className="rounded-full border border-[var(--line)] bg-[rgba(255,255,255,0.08)] px-4 py-2 text-sm font-medium text-[var(--text)] shadow-[0_10px_20px_rgba(0,0,0,0.08)]">
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="overflow-hidden rounded-[1.8rem] border border-[rgba(255,255,255,0.12)] bg-[linear-gradient(145deg,rgba(17,45,70,0.92),rgba(8,23,37,0.96))] shadow-[0_24px_60px_rgba(0,0,0,0.26)]">
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-5 py-4">
                    <div>
                      <p className="font-[family-name:var(--font-mono)] text-[0.68rem] uppercase tracking-[0.34em] text-[var(--text-soft)]">3D Visual</p>
                      <p className="mt-1 text-sm text-[var(--text-muted)]">Bringing back the original energy inside the Toolkit section.</p>
                    </div>
                    <span className="rounded-full border border-[rgba(103,243,222,0.22)] bg-[rgba(103,243,222,0.1)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[#b9fff5]">
                      Live
                    </span>
                  </div>
                  <div className="relative h-[19rem] overflow-hidden sm:h-[22rem]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_22%,rgba(255,138,31,0.18),transparent_24%),radial-gradient(circle_at_80%_18%,rgba(103,243,222,0.16),transparent_24%)]" />
                    <iframe
                      src="https://my.spline.design/voiceaiassistant-5SyrentSPOqOLkryIBR5IZXu/"
                      title="3D Assistant Orb"
                      className="pointer-events-none h-full w-full scale-[1.06]"
                    />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-[linear-gradient(180deg,rgba(8,23,37,0)_0%,rgba(8,23,37,0.78)_100%)]" />
                  </div>
                </div>
              </div>
            </motion.article>
          </div>
        </motion.section>

        <LayoutGroup>
          <motion.section
            id="work"
            variants={section}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.16 }}
            className="mx-auto w-full max-w-7xl px-6 pb-20"
          >
            <motion.div variants={item}>
              <p className="font-[family-name:var(--font-mono)] text-[0.72rem] uppercase tracking-[0.34em] text-[var(--text-soft)]">Selected Work</p>
              <h2 className="mt-4 max-w-3xl font-[family-name:var(--font-display)] text-4xl leading-[0.94] tracking-[-0.04em] text-[var(--text)] sm:text-5xl">
                Projects that show range, product thinking, and real execution.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">
                A focused selection of work that highlights technical depth and how I approach complex systems.
              </p>
            </motion.div>

            <div className="mt-8 grid gap-5 md:grid-cols-12">
              {projects.map((project, index) => (
                <motion.button
                  key={project.id}
                  variants={item}
                  layoutId={`project-card-${project.id}`}
                  onClick={() => setActiveCard({ type: 'project', id: project.id })}
                  className={`group relative overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[var(--surface)] p-7 text-left backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/25 ${
                    index === 0 ? 'md:col-span-7' : 'md:col-span-5'
                  }`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.accent}`} />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.14),transparent_34%)] opacity-80" />
                  <div className="relative z-10 flex h-full flex-col">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-[family-name:var(--font-mono)] text-[0.72rem] uppercase tracking-[0.34em] text-[#d6dee7]">
                          Project {String(index + 1).padStart(2, '0')}
                        </p>
                        <h3 className="mt-4 font-[family-name:var(--font-display)] text-3xl leading-[0.95] tracking-[-0.04em] text-[var(--text)] sm:text-[2.2rem]">
                          {project.name}
                        </h3>
                      </div>
                      <div className="rounded-full border border-white/15 bg-white/10 p-3">
                        <ArrowUpRight className="h-4 w-4 text-[var(--text)] transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>
                    <p className="mt-3 text-sm uppercase tracking-[0.22em] text-[#f4e2d3]">{project.type}</p>
                    <p className="mt-5 text-base leading-relaxed text-[var(--text-muted)]">{project.summary}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.stack.map((stackItem) => (
                        <span key={stackItem} className="rounded-full border border-white/12 bg-[rgba(255,255,255,0.08)] px-3 py-1 text-xs font-medium text-[var(--text)]">
                          {stackItem}
                        </span>
                      ))}
                    </div>
                    <div className="mt-auto pt-8 text-sm font-semibold text-[var(--text)]">Open case study</div>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.section>

          <motion.section
            id="credentials"
            variants={section}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.16 }}
            className="mx-auto w-full max-w-7xl px-6 pb-20"
          >
            <div className="grid gap-6 xl:grid-cols-[0.84fr_1.16fr]">
              <motion.article variants={item} className="rounded-[2rem] border border-[var(--line)] bg-[var(--surface)] p-8 backdrop-blur-xl sm:p-10">
                <p className="font-[family-name:var(--font-mono)] text-[0.72rem] uppercase tracking-[0.34em] text-[var(--text-soft)]">Credentials</p>
                <h2 className="mt-4 max-w-3xl font-[family-name:var(--font-display)] text-4xl leading-[0.94] tracking-[-0.04em] text-[var(--text)] sm:text-5xl">
                  Proof points that support the story.
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">
                  Verifiable certifications, formal education, and direct document previews are built into the site.
                </p>
                <div className="mt-8 grid gap-4">
                  {documents.map(([title, source, label]) => (
                    <button
                      key={title}
                      type="button"
                      onClick={() => openDocument(title, source, label)}
                      className="group flex items-center justify-between gap-4 rounded-[1.4rem] border border-white/10 bg-white/5 p-4 text-left transition hover:border-[var(--accent)] hover:bg-[rgba(255,122,24,0.08)]"
                    >
                      <div>
                        <p className="text-base font-semibold text-[var(--text)]">{title}</p>
                        <p className="mt-1 text-sm text-[var(--text-muted)]">Preview directly inside the portfolio.</p>
                      </div>
                      <span className="rounded-full border border-white/10 bg-white/5 p-3 transition group-hover:border-[var(--accent)]">
                        <Eye className="h-4 w-4 text-[var(--text)]" />
                      </span>
                    </button>
                  ))}
                </div>
              </motion.article>

              <motion.div variants={item} className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {certifications.map((certification) => (
                  <motion.button
                    key={certification.id}
                    layoutId={`cert-card-${certification.id}`}
                    onClick={() => setActiveCard({ type: 'cert', id: certification.id })}
                    whileHover={{ y: -4 }}
                    className="relative overflow-hidden rounded-[1.8rem] border border-[var(--line)] bg-white/5 p-6 text-left backdrop-blur-xl"
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(110,231,216,0.16),transparent_30%),linear-gradient(160deg,rgba(255,255,255,0.04),transparent_65%)]" />
                    <div className="relative z-10 flex h-full flex-col">
                      <div className="inline-flex w-fit rounded-full border border-[rgba(110,231,216,0.24)] bg-[rgba(110,231,216,0.08)] p-3">
                        <Award className="h-5 w-5 text-[var(--accent-2)]" />
                      </div>
                      <h3 className="mt-5 text-xl font-semibold leading-snug text-[var(--text)]">{certification.title}</h3>
                      <p className="mt-3 text-sm text-[var(--text-soft)]">{certification.issued}</p>
                      <div className="mt-auto pt-6 text-sm font-semibold text-[var(--text)]">View credential</div>
                    </div>
                  </motion.button>
                ))}
              </motion.div>
            </div>
          </motion.section>

          <AnimatePresence>
            {activeCard && activeItem ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[80] flex items-center justify-center bg-[rgba(5,11,18,0.84)] p-4 backdrop-blur-md"
                onClick={() => setActiveCard(null)}
              >
                <motion.div
                  layoutId={`${activeCard.type === 'project' ? 'project' : 'cert'}-card-${activeItem.id}`}
                  initial={{ y: 24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 16, opacity: 0 }}
                  className="relative w-full max-w-3xl overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[var(--surface-strong)] shadow-[0_28px_90px_rgba(0,0,0,0.45)]"
                  onClick={(event) => event.stopPropagation()}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,122,24,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(110,231,216,0.12),transparent_30%)]" />
                  <div className="relative z-10 border-b border-white/10 px-6 py-5 sm:px-8">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-[family-name:var(--font-mono)] text-[0.68rem] uppercase tracking-[0.34em] text-[var(--text-soft)]">
                          {activeCard.type === 'project' ? 'Project Detail' : 'Credential Detail'}
                        </p>
                        <h3 className="mt-3 font-[family-name:var(--font-display)] text-3xl leading-[0.96] tracking-[-0.04em] text-[var(--text)]">
                          {activeCard.type === 'project' ? activeItem.name : activeItem.title}
                        </h3>
                      </div>
                      <button
                        type="button"
                        onClick={() => setActiveCard(null)}
                        className="rounded-full border border-white/10 bg-white/5 p-3 text-[var(--text)] transition hover:border-[var(--accent)]"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  <div className="relative z-10 p-6 sm:p-8">
                    {activeCard.type === 'project' ? (
                      <>
                        <p className="text-sm uppercase tracking-[0.24em] text-[#ffd4b0]">{activeItem.type}</p>
                        <p className="mt-5 text-base leading-relaxed text-[var(--text-muted)]">{activeItem.details}</p>
                        <div className="mt-6 flex flex-wrap gap-2">
                          {activeItem.stack.map((stackItem) => (
                            <span key={stackItem} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-[var(--text)]">
                              {stackItem}
                            </span>
                          ))}
                        </div>
                        <div className="mt-8 flex flex-wrap gap-3">
                          {activeItem.liveUrl ? (
                            <a href={activeItem.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-[#111111] transition hover:bg-[#ff9340]">
                              <ExternalLink className="h-4 w-4" />
                              Live Demo
                            </a>
                          ) : null}
                          <a href={activeItem.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white/5 px-5 py-3 text-sm font-semibold text-[var(--text)] transition hover:border-[var(--accent-2)]">
                            <Github className="h-4 w-4" />
                            GitHub
                          </a>
                        </div>
                      </>
                    ) : (
                      <>
                        <p className="text-sm uppercase tracking-[0.24em] text-[#bdf8f0]">{activeItem.issued}</p>
                        <p className="mt-5 text-base leading-relaxed text-[var(--text-muted)]">
                          Credential available on Credly for independent verification.
                        </p>
                        <div className="mt-8">
                          <a href={activeItem.verifyUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[var(--accent-2)] px-5 py-3 text-sm font-semibold text-[#062025] transition hover:bg-[#8af2e5]">
                            <ExternalLink className="h-4 w-4" />
                            Verify Credential
                          </a>
                        </div>
                      </>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </LayoutGroup>

        <motion.section
          id="contact"
          variants={section}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto w-full max-w-7xl px-6 pb-20"
        >
          <motion.article variants={item} className="relative overflow-hidden rounded-[2.25rem] border border-[var(--line)] bg-[var(--surface)] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.32)] backdrop-blur-xl sm:p-10 lg:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(110,231,216,0.16),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,122,24,0.18),transparent_30%)]" />
            <div className="relative z-10 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
              <div>
                <p className="font-[family-name:var(--font-mono)] text-[0.72rem] uppercase tracking-[0.34em] text-[var(--text-soft)]">Contact</p>
                <h2 className="mt-4 max-w-3xl font-[family-name:var(--font-display)] text-4xl leading-[0.92] tracking-[-0.05em] text-[var(--text)] sm:text-5xl">
                  Open to remote operations and VA roles with teams that care about quality.
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--text-muted)]">
                  If you need calm execution, technical confidence, and reliable follow-through, I&apos;d love to connect.
                </p>
              </div>

              <div className="grid gap-3">
                <a href="mailto:osmann5260@gmail.com" className="inline-flex items-center justify-between rounded-[1.4rem] border border-[var(--line)] bg-[rgba(255,255,255,0.06)] px-5 py-4 text-sm font-semibold text-[var(--text)] transition hover:border-[var(--accent)] hover:bg-[rgba(255,122,24,0.12)]">
                  <span className="inline-flex items-center gap-3"><Mail className="h-4 w-4" />Email Me</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a href="https://www.linkedin.com/in/osman-jah-51548a344" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-between rounded-[1.4rem] border border-[var(--line)] bg-[rgba(255,255,255,0.06)] px-5 py-4 text-sm font-semibold text-[var(--text)] transition hover:border-[var(--accent-2)] hover:bg-[rgba(110,231,216,0.1)]">
                  <span className="inline-flex items-center gap-3"><Linkedin className="h-4 w-4" />LinkedIn</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a href="https://github.com/OsmanJah" target="_blank" rel="noreferrer" className="inline-flex items-center justify-between rounded-[1.4rem] border border-[var(--line)] bg-[rgba(255,255,255,0.06)] px-5 py-4 text-sm font-semibold text-[var(--text)] transition hover:border-[var(--accent-2)] hover:bg-[rgba(110,231,216,0.1)]">
                  <span className="inline-flex items-center gap-3"><Github className="h-4 w-4" />GitHub</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.article>
        </motion.section>
      </main>

      <AnimatePresence>
        {activeDocument ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-[rgba(5,11,18,0.88)] p-4 backdrop-blur-md"
            onClick={() => setActiveDocument(null)}
          >
            <motion.div
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 16, opacity: 0 }}
              className="w-full max-w-6xl rounded-[2rem] border border-[var(--line)] bg-[var(--surface-strong)] p-4 shadow-[0_28px_90px_rgba(0,0,0,0.45)] backdrop-blur-xl md:p-6"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="mb-4 flex items-center justify-between gap-4">
                <div>
                  <p className="font-[family-name:var(--font-mono)] text-[0.68rem] uppercase tracking-[0.34em] text-[var(--text-soft)]">Document Preview</p>
                  <h3 className="mt-2 text-lg font-semibold text-[var(--text)]">{activeDocument.title}</h3>
                </div>
                <button type="button" onClick={() => setActiveDocument(null)} className="rounded-full border border-white/10 bg-white/5 p-3 text-[var(--text)] transition hover:border-[var(--accent)]">
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="h-[68vh] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[rgba(4,10,15,0.8)]">
                <iframe title={activeDocument.title} src={activeDocument.source} className="h-full w-full" />
              </div>
              <div className="mt-4 flex justify-end">
                <a href={activeDocument.source} download className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-[#111111] transition hover:bg-[#ff9340]">
                  <Download className="h-4 w-4" />
                  {activeDocument.downloadLabel}
                </a>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  )
}

export default App
