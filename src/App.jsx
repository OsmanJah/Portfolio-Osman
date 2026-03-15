import { useEffect, useMemo, useState } from 'react'
import Spline from '@splinetool/react-spline'
import { AnimatePresence, LayoutGroup, motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion'
import { Award, Download, ExternalLink, Github, X } from 'lucide-react'

function App() {
  const [activeCard, setActiveCard] = useState(null)
  const [activeDocument, setActiveDocument] = useState(null)

  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)
  const smoothMouseX = useSpring(mouseX, { stiffness: 420, damping: 34, mass: 0.35 })
  const smoothMouseY = useSpring(mouseY, { stiffness: 420, damping: 34, mass: 0.35 })
  const cursorScale = useMotionValue(1)
  const cursorOpacity = useMotionValue(0)

  const { scrollYProgress } = useScroll()
  const marqueeX = useTransform(scrollYProgress, [0.1, 0.7], ['6%', '-48%'])

  useEffect(() => {
    document.documentElement.classList.add('scroll-smooth')

    return () => {
      document.documentElement.classList.remove('scroll-smooth')
    }
  }, [])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveCard(null)
        setActiveDocument(null)
      }
    }

    window.addEventListener('keydown', onKeyDown)

    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [])

  const projects = useMemo(
    () => [
      {
        id: 'mariecare',
        name: 'MarieCare',
        type: 'Full-Stack Medical Appointment Platform',
        summary:
          'A thesis-grade healthcare booking system with patient/doctor dashboards and secure end-to-end workflow automation.',
        details:
          'Built with React.js, Node.js, Express, and MongoDB. Features include appointment scheduling, JWT authentication, Stripe payments, real-time notifications with Socket.IO, transactional email confirmations, and cloud image storage.',
        stack: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Socket.IO', 'Stripe', 'Tailwind CSS'],
        liveUrl: 'https://doctor-appointment-frontend-one.vercel.app',
        githubUrl: 'https://github.com/OsmanJah/doctor-appointment',
        accent: 'from-violet-500/35 via-blue-500/20 to-cyan-500/10',
      },
      {
        id: 'toycatcher',
        name: 'Toy Catcher',
        type: 'Python Arcade Game',
        summary:
          'A gameplay-focused Python project demonstrating systems thinking, scoring logic, and local persistence.',
        details:
          'Developed with Python and Pygame. Includes multiple difficulty levels, combo scoring mechanics, power-ups, sound effects, and a SQLite leaderboard to track high scores and progression.',
        stack: ['Python', 'Pygame', 'SQLite'],
        githubUrl: 'https://github.com/OsmanJah/TeamPlasas',
        accent: 'from-cyan-500/30 via-sky-500/20 to-violet-500/10',
      },
    ],
    [],
  )

  const certifications = useMemo(
    () => [
      {
        id: 'sc900',
        title: 'Microsoft Certified: Security, Compliance, and Identity Fundamentals',
        issued: 'Issued Jan 2025',
        verifyUrl: 'https://www.credly.com/badges/d917da52-4d6e-455f-aa45-5efa8ae62514/linked_in_profile',
      },
      {
        id: 'htmlcss',
        title: 'IT Specialist - HTML and CSS',
        issued: 'Issued Jan 2025',
        verifyUrl: 'https://www.credly.com/badges/6f368252-a862-49b5-ae8e-112c37a1e800/linked_in_profile',
      },
      {
        id: 'unity',
        title: 'Unity Certified User: Programmer',
        issued: 'Issued Jan 2025',
        verifyUrl: 'https://www.credly.com/badges/534f7468-d444-4723-a1d1-23dfe3468c45/linked_in_profile',
      },
    ],
    [],
  )

  const handlePointerMove = (event) => {
    mouseX.set(event.clientX)
    mouseY.set(event.clientY)
    cursorOpacity.set(1)

    const interactiveTarget = event.target.closest('a,button,[data-cursor-target="true"]')
    cursorScale.set(interactiveTarget ? 2.35 : 1)
  }

  const openDocument = (title, source, downloadLabel) => {
    setActiveDocument({ title, source, downloadLabel })
  }

  const activeItem =
    activeCard?.type === 'project'
      ? projects.find((project) => project.id === activeCard.id)
      : certifications.find((certification) => certification.id === activeCard?.id)

  return (
    <div
      className="relative min-h-screen cursor-none overflow-x-clip bg-slate-950 text-slate-100"
      onPointerMove={handlePointerMove}
      onPointerLeave={() => cursorOpacity.set(0)}
    >
      <div className="fixed left-0 top-0 -z-10 h-screen w-full">
        <Spline scene="https://prod.spline.design/kU44TVJEWW94Ok5QdtDhioV2/scene.splinecode" />
      </div>

      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-slate-950/65 via-slate-950/72 to-slate-950/92" />

      <motion.div
        style={{ x: smoothMouseX, y: smoothMouseY, scale: cursorScale, opacity: cursorOpacity }}
        className="pointer-events-none fixed left-0 top-0 z-[90] h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/80 bg-cyan-300/20 mix-blend-difference shadow-[0_0_28px_rgba(34,211,238,0.65)]"
      />

      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/40 backdrop-blur-2xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-2xl font-semibold tracking-tight text-violet-200" data-cursor-target="true">
            Osman Jah
          </a>
          <ul className="hidden items-center gap-7 text-lg text-slate-300 md:flex">
            <li>
              <a href="#about" className="transition hover:text-violet-200" data-cursor-target="true">
                About
              </a>
            </li>
            <li>
              <a href="#work" className="transition hover:text-violet-200" data-cursor-target="true">
                Work
              </a>
            </li>
            <li>
              <a href="#credentials" className="transition hover:text-violet-200" data-cursor-target="true">
                Credentials
              </a>
            </li>
            <li>
              <a href="#contact" className="transition hover:text-violet-200" data-cursor-target="true">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="relative z-10">
        <section id="home" className="mx-auto flex min-h-[calc(100vh-73px)] w-full max-w-6xl items-center px-6 py-16 md:py-24">
          <div className="grid w-full items-center gap-10 rounded-[2.5rem] border border-white/10 bg-slate-900/35 p-7 backdrop-blur-2xl md:grid-cols-12 md:p-10">
            <div className="space-y-6 md:col-span-7">
              <p className="inline-flex rounded-full border border-violet-300/30 bg-violet-500/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-violet-200">
                GENERAL VA • OPERATIONS • AI-FLUENT
              </p>
              <h1 className="text-4xl font-black leading-[0.96] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Tech-Fluent Remote Operations, Delivered With Precision.
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-slate-200/90">
                I am Osman Jah, a Computer Science graduate helping modern teams execute complex workflows with clarity,
                accountability, and automation-first thinking.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/OsmanJah"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-base font-semibold text-white transition hover:border-violet-300/60 hover:bg-violet-400/15"
                  data-cursor-target="true"
                >
                  <Github className="h-4 w-4" />
                  GitHub Profile
                </a>
                <button
                  type="button"
                  onClick={() => openDocument('Resume / CV', '/Osman_Jah_Resume.pdf', 'Download Resume/CV')}
                  className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 text-base font-semibold text-slate-950 transition hover:bg-cyan-300"
                  data-cursor-target="true"
                >
                  <Download className="h-4 w-4" />
                  Preview Resume/CV
                </button>
              </div>
            </div>

            <div className="relative flex justify-center md:col-span-5">
              <motion.div
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="relative"
              >
                <div className="absolute -inset-5 rounded-full bg-violet-500/35 blur-3xl" />
                <div className="absolute -inset-2 rounded-full border border-violet-300/40" />
                <img
                  src="/Osman_Jah_Profile.jpeg"
                  alt="Osman Jah"
                  className="relative h-72 w-72 rounded-full border border-white/20 object-cover object-top shadow-[0_0_80px_rgba(139,92,246,0.45)] md:h-96 md:w-96"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <section id="about" className="relative mx-auto mt-8 w-full max-w-6xl px-6 pb-8 pt-6">
          <motion.p
            style={{ x: marqueeX }}
            className="pointer-events-none absolute left-0 top-0 whitespace-nowrap text-[11vw] font-black uppercase tracking-[0.08em] text-white/6"
          >
            OPERATIONS • AUTOMATION • TECH-FLUENT •
          </motion.p>

          <div className="relative grid gap-6 md:grid-cols-12">
            <article className="rounded-3xl border border-white/10 bg-slate-900/40 p-8 backdrop-blur-2xl md:col-span-8">
              <h2 className="text-3xl font-bold text-white md:text-4xl">About & Skills</h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-200/90">
                Born in Freetown, Sierra Leone, currently based in Hungary. I hold a{' '}
                <button
                  type="button"
                  onClick={() =>
                    openDocument('Bachelor Degree Certificate', '/Osman_Jah_Degree.pdf', 'Download Degree PDF')
                  }
                  className="font-semibold text-violet-200 underline decoration-violet-300/70 underline-offset-4"
                  data-cursor-target="true"
                >
                  Bachelor of Science in Computer Science
                </button>{' '}
                from the University of Debrecen (graduated January 2026, classification: good). I thrive in remote environments where
                clear communication, ownership, and technical problem-solving matter.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  'React.js',
                  'Node.js',
                  'JavaScript',
                  'Python',
                  'MongoDB',
                  'REST APIs',
                  'Git & GitHub',
                  'AI Tools & Workflow Automation',
                  'Problem Solving',
                  'Technical Communication',
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-sm font-medium text-slate-100 backdrop-blur-md transition hover:border-violet-300/60 hover:bg-violet-500/20"
                    data-cursor-target="true"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>

            <article className="rounded-3xl border border-white/10 bg-slate-900/40 p-8 backdrop-blur-2xl md:col-span-4">
              <h3 className="text-xl font-semibold text-white">Profile Snapshot</h3>
              <div className="mt-4 space-y-2 text-slate-200/90">
                <p>
                  <span className="text-slate-400">Name:</span> Osman Jah
                </p>
                <p>
                  <span className="text-slate-400">Location:</span> Hungary
                </p>
                <p>
                  <span className="text-slate-400">Origin:</span> Freetown, Sierra Leone
                </p>
                <p>
                  <span className="text-slate-400">Focus:</span> Remote Operations & VA Excellence
                </p>
              </div>
              <button
                type="button"
                onClick={() =>
                  openDocument('Certifications Transcript', '/Osman_Jah_Certifications.pdf', 'Download Full Transcript')
                }
                className="mt-6 inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-4 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-violet-300/60 hover:bg-violet-400/15"
                data-cursor-target="true"
              >
                <Download className="h-4 w-4" />
                Preview Transcript
              </button>
            </article>
          </div>
        </section>

        <LayoutGroup>
          <section id="work" className="mx-auto mt-4 w-full max-w-6xl px-6 pb-10 pt-6">
            <h2 className="text-3xl font-bold text-white md:text-4xl">Selected Work</h2>
            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-12">
              {projects.map((project, index) => (
                <motion.button
                  key={project.id}
                  layoutId={`project-card-${project.id}`}
                  onClick={() => setActiveCard({ type: 'project', id: project.id })}
                  className={`group relative overflow-hidden rounded-3xl border border-white/15 bg-slate-900/40 p-6 text-left backdrop-blur-2xl transition hover:border-violet-300/55 ${
                    index === 0 ? 'md:col-span-8 md:min-h-[18rem]' : 'md:col-span-4 md:min-h-[18rem]'
                  }`}
                  data-cursor-target="true"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.accent}`} />
                  <div className="relative z-10">
                    <p className="text-xs uppercase tracking-[0.22em] text-slate-300">Project</p>
                    <h3 className="mt-3 text-2xl font-semibold text-white">{project.name}</h3>
                    <p className="mt-2 text-sm text-violet-200">{project.type}</p>
                    <p className="mt-4 text-sm leading-relaxed text-slate-100/90">{project.summary}</p>
                  </div>
                </motion.button>
              ))}
            </div>
          </section>

          <section id="credentials" className="mx-auto w-full max-w-6xl px-6 pb-12 pt-2">
            <h2 className="text-3xl font-bold text-white md:text-4xl">Certifications & Credentials</h2>
            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-12">
              {certifications.map((certification, index) => (
                <motion.button
                  key={certification.id}
                  layoutId={`cert-card-${certification.id}`}
                  onClick={() => setActiveCard({ type: 'cert', id: certification.id })}
                  className={`group relative overflow-hidden rounded-3xl border border-white/15 bg-slate-900/45 p-6 text-left backdrop-blur-2xl transition hover:border-cyan-300/55 ${
                    index === 0 ? 'md:col-span-5' : 'md:col-span-3.5 md:col-span-3'
                  }`}
                  data-cursor-target="true"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-violet-500/15 to-transparent" />
                  <div className="relative z-10">
                    <Award className="h-5 w-5 text-cyan-200" />
                    <h3 className="mt-3 text-xl font-semibold leading-snug text-white">{certification.title}</h3>
                    <p className="mt-3 text-sm text-slate-200">{certification.issued}</p>
                  </div>
                </motion.button>
              ))}
            </div>
          </section>

          <AnimatePresence>
            {activeCard && activeItem ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm"
                onClick={() => setActiveCard(null)}
              >
                <motion.div
                  layoutId={`${activeCard.type === 'project' ? 'project' : 'cert'}-card-${activeItem.id}`}
                  className="w-full max-w-3xl overflow-hidden rounded-3xl border border-white/15 bg-slate-900/80 backdrop-blur-3xl"
                  onClick={(event) => event.stopPropagation()}
                >
                  <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
                    <h3 className="text-xl font-semibold text-white">{activeCard.type === 'project' ? activeItem.name : activeItem.title}</h3>
                    <button
                      type="button"
                      onClick={() => setActiveCard(null)}
                      className="rounded-lg border border-white/20 p-2 text-slate-200 transition hover:border-violet-300/60 hover:text-violet-100"
                      data-cursor-target="true"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="space-y-5 p-6">
                    {activeCard.type === 'project' ? (
                      <>
                        <p className="text-sm uppercase tracking-[0.2em] text-violet-200">{activeItem.type}</p>
                        <p className="text-base leading-relaxed text-slate-100/90">{activeItem.details}</p>
                        <div className="flex flex-wrap gap-2">
                          {activeItem.stack.map((item) => (
                            <span key={item} className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs text-slate-100">
                              {item}
                            </span>
                          ))}
                        </div>
                        <div className="flex flex-wrap gap-3 pt-1">
                          {activeItem.liveUrl ? (
                            <a
                              href={activeItem.liveUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-2 rounded-xl bg-violet-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-violet-400"
                              data-cursor-target="true"
                            >
                              <ExternalLink className="h-4 w-4" />
                              Live Demo
                            </a>
                          ) : null}
                          <a
                            href={activeItem.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:border-violet-300/60 hover:bg-violet-400/20"
                            data-cursor-target="true"
                          >
                            <Github className="h-4 w-4" />
                            GitHub
                          </a>
                        </div>
                      </>
                    ) : (
                      <>
                        <p className="text-sm text-slate-200">{activeItem.issued}</p>
                        <p className="text-base leading-relaxed text-slate-100/90">
                          Credential available on Credly for independent verification.
                        </p>
                        <a
                          href={activeItem.verifyUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                          data-cursor-target="true"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Verify Credential
                        </a>
                      </>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </LayoutGroup>

        <section id="contact" className="mx-auto w-full max-w-6xl px-6 pb-20 pt-8">
          <div className="rounded-3xl border border-white/10 bg-slate-900/45 p-8 text-center backdrop-blur-2xl md:p-12">
            <h2 className="text-3xl font-bold text-white md:text-4xl">Let’s Work Together</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-200/90">
              Open to remote General VA opportunities with high-performance teams, including U.S.-focused recruiting and operations organizations.
            </p>
            <a
              href="https://github.com/OsmanJah"
              target="_blank"
              rel="noreferrer"
              className="mx-auto mt-6 inline-flex items-center gap-2 rounded-xl bg-violet-500 px-5 py-3 text-base font-semibold text-white transition hover:bg-violet-400"
              data-cursor-target="true"
            >
              <Github className="h-4 w-4" />
              github.com/OsmanJah
            </a>
          </div>
        </section>
      </main>

      <AnimatePresence>
        {activeDocument ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[75] flex items-center justify-center bg-slate-950/85 p-4 backdrop-blur-sm"
            onClick={() => setActiveDocument(null)}
          >
            <motion.div
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 24, opacity: 0 }}
              className="w-full max-w-5xl rounded-3xl border border-white/15 bg-slate-900/85 p-4 backdrop-blur-2xl md:p-6"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="mb-4 flex items-center justify-between gap-4">
                <h3 className="text-lg font-semibold text-white">{activeDocument.title}</h3>
                <button
                  type="button"
                  onClick={() => setActiveDocument(null)}
                  className="rounded-lg border border-white/20 p-2 text-slate-200 transition hover:border-violet-300/60 hover:text-violet-100"
                  data-cursor-target="true"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="h-[65vh] overflow-hidden rounded-2xl border border-white/10 bg-slate-950/70">
                <iframe title={activeDocument.title} src={activeDocument.source} className="h-full w-full" />
              </div>
              <div className="mt-4 flex justify-end">
                <a
                  href={activeDocument.source}
                  download
                  className="inline-flex items-center gap-2 rounded-xl bg-violet-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-violet-400"
                  data-cursor-target="true"
                >
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
