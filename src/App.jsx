import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, LayoutGroup, motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight, Award, Download, ExternalLink, Eye, Github, X } from 'lucide-react'

function App() {
  const [activeCard, setActiveCard] = useState(null)
  const [activeDocument, setActiveDocument] = useState(null)

  const { scrollYProgress } = useScroll()
  const marqueeX = useTransform(scrollYProgress, [0.12, 0.75], ['8%', '-45%'])

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

  const openDocument = (title, source, downloadLabel) => {
    setActiveDocument({ title, source, downloadLabel })
  }

  const activeItem =
    activeCard?.type === 'project'
      ? projects.find((project) => project.id === activeCard.id)
      : certifications.find((certification) => certification.id === activeCard?.id)

  return (
    <div className="relative min-h-screen overflow-x-clip bg-slate-950 text-slate-100">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.15),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(34,211,238,0.12),transparent_35%),radial-gradient(circle_at_50%_100%,rgba(168,85,247,0.14),transparent_45%)]" />

      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/60 backdrop-blur-2xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="cursor-pointer text-2xl font-semibold tracking-tight text-violet-200" data-cursor-target="true">
            Osman Jah
          </a>
          <ul className="hidden items-center gap-7 text-lg text-slate-300 md:flex">
            <li>
              <a href="#about" className="cursor-pointer transition hover:text-violet-200" data-cursor-target="true">
                About
              </a>
            </li>
            <li>
              <a href="#work" className="cursor-pointer transition hover:text-violet-200" data-cursor-target="true">
                Work
              </a>
            </li>
            <li>
              <a href="#credentials" className="cursor-pointer transition hover:text-violet-200" data-cursor-target="true">
                Credentials
              </a>
            </li>
            <li>
              <a href="#contact" className="cursor-pointer transition hover:text-violet-200" data-cursor-target="true">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="relative z-10">
        <section id="home" className="min-h-screen">
          <div className="mx-auto grid min-h-screen w-full max-w-7xl grid-cols-1 gap-8 px-6 py-8 lg:grid-cols-2 lg:gap-10 lg:py-10">
            <div className="flex items-center justify-center">
              <div className="w-full rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md md:p-10">
                <p className="inline-flex rounded-full border border-violet-300/30 bg-violet-500/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-violet-200">
                  GENERAL VA • OPERATIONS • AI-FLUENT
                </p>
                <h1 className="mt-5 text-4xl font-black leading-[0.96] tracking-tight text-white sm:text-6xl">
                  Tech-Fluent Remote Operations, Delivered With Precision.
                </h1>
                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-200/90">
                  I am Osman Jah, a Computer Science graduate helping modern teams execute complex workflows with clarity,
                  accountability, and automation-first thinking.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href="https://github.com/OsmanJah"
                    target="_blank"
                    rel="noreferrer"
                    className="cursor-pointer inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-base font-semibold text-white transition hover:border-violet-300/60 hover:bg-violet-400/15"
                    data-cursor-target="true"
                  >
                    <Github className="h-4 w-4" />
                    GitHub Profile
                  </a>
                  <button
                    type="button"
                    onClick={() => openDocument('Resume / CV', '/Osman_Jah_Resume.pdf', 'Download Resume/CV')}
                    className="cursor-pointer inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 text-base font-semibold text-slate-950 transition hover:bg-cyan-300"
                    data-cursor-target="true"
                  >
                    <Eye className="h-4 w-4" />
                    Preview Resume/CV
                  </button>
                </div>
              </div>
            </div>

            <div className="h-[50vh] min-h-[340px] overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md lg:h-full">
              <iframe
                src="https://my.spline.design/cybermannequin-kU44TVJEWW94Ok5QdtDhioV2/"
                frameBorder="0"
                width="100%"
                height="100%"
                className="w-full h-full pointer-events-auto"
                title="Interactive 3D Mannequin"
              ></iframe>
            </div>
          </div>
        </section>

        <section id="about" className="relative mx-auto mt-6 w-full max-w-7xl px-6 pb-8 pt-6">
          <motion.p
            style={{ x: marqueeX }}
            className="pointer-events-none absolute left-0 top-0 whitespace-nowrap text-[11vw] font-black uppercase tracking-[0.08em] text-white/6"
          >
            OPERATIONS • AUTOMATION • TECH-FLUENT •
          </motion.p>

          <div className="relative grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex flex-col gap-6">
              <article className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
                <h3 className="text-xl font-semibold text-white">Profile Snapshot</h3>
                <div className="mt-4 space-y-2 text-slate-200/90">
                  <p>
                    <span className="text-slate-400">Name:</span> Osman Jah
                  </p>
                  <p>
                    <span className="text-slate-400">Location:</span> Budapest, Hungary
                  </p>
                  <p>
                    <span className="text-slate-400">Focus:</span> Remote Operations & VA Excellence
                  </p>
                </div>
              </article>

              <article className="w-full rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
                <h2 className="text-3xl font-bold text-white md:text-4xl">About & Skills</h2>
                <p className="mt-4 text-lg leading-relaxed text-slate-200/90">
                  Born in Freetown, Sierra Leone, currently based in Hungary. I hold a{' '}
                  <button
                    type="button"
                    onClick={() =>
                      openDocument('Bachelor Degree Certificate', '/Osman_Jah_Degree.pdf', 'Download Degree PDF')
                    }
                    className="cursor-pointer font-semibold text-violet-200 underline decoration-violet-300/70 underline-offset-4 transition hover:text-violet-100 hover:drop-shadow-[0_0_8px_rgba(196,181,253,0.65)]"
                    data-cursor-target="true"
                  >
                    Bachelor of Science in Computer Science
                  </button>{' '}
                  from the University of Debrecen (graduated January 2026, classification: good). I thrive in remote environments where
                  clear communication, ownership, and technical problem-solving matter.
                </p>
                <button
                  type="button"
                  onClick={() =>
                    openDocument('Bachelor Degree Certificate', '/Osman_Jah_Degree.pdf', 'Download Degree PDF')
                  }
                  className="cursor-pointer mt-6 inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-4 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-violet-300/60 hover:bg-violet-400/15"
                  data-cursor-target="true"
                >
                  <Eye className="h-4 w-4" />
                  Preview Degree
                </button>
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
                      className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-sm font-medium text-slate-100 backdrop-blur-md transition hover:border-violet-300/60 hover:bg-violet-500/20"
                      data-cursor-target="true"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            </div>

            <article className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3 backdrop-blur-md">
              <div className="h-full min-h-[500px] overflow-hidden rounded-2xl">
                <img
                  src="/Osman_Jah_Profile.jpeg"
                  alt="Osman Jah"
                  className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                />
              </div>
            </article>
          </div>
        </section>

        <LayoutGroup>
          <section id="work" className="mx-auto mt-4 w-full max-w-7xl px-6 pb-10 pt-6">
            <h2 className="text-3xl font-bold text-white md:text-4xl">Selected Work</h2>
            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-12">
              {projects.map((project, index) => (
                <motion.button
                  key={project.id}
                  layoutId={`project-card-${project.id}`}
                  onClick={() => setActiveCard({ type: 'project', id: project.id })}
                  className={`group relative cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 text-left backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/30 ${
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
                    <div className="mt-6 flex items-center justify-end gap-1 text-xs text-slate-400 transition-colors group-hover:text-violet-200">
                      <span>View Details</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </section>

          <section id="credentials" className="mx-auto w-full max-w-7xl px-6 pb-12 pt-2">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <h2 className="text-3xl font-bold text-white md:text-4xl">Certifications & Credentials</h2>
              <button
                type="button"
                onClick={() =>
                  openDocument('Certifications Transcript', '/Osman_Jah_Certifications.pdf', 'Download Full Transcript')
                }
                className="cursor-pointer inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-4 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-violet-300/60 hover:bg-violet-400/15"
                data-cursor-target="true"
              >
                <Eye className="h-4 w-4" />
                Preview Transcript
              </button>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-12">
              {certifications.map((certification, index) => (
                <motion.button
                  key={certification.id}
                  layoutId={`cert-card-${certification.id}`}
                  onClick={() => setActiveCard({ type: 'cert', id: certification.id })}
                  className={`group relative cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 text-left backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/30 ${
                    index === 0 ? 'md:col-span-5' : 'md:col-span-3'
                  }`}
                  data-cursor-target="true"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-violet-500/15 to-transparent" />
                  <div className="relative z-10">
                    <Award className="h-5 w-5 text-cyan-200" />
                    <h3 className="mt-3 text-xl font-semibold leading-snug text-white">{certification.title}</h3>
                    <p className="mt-3 text-sm text-slate-200">{certification.issued}</p>
                    <div className="mt-6 flex items-center justify-end gap-1 text-xs text-slate-400 transition-colors group-hover:text-cyan-200">
                      <span>View Details</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </div>
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
                  className="w-full max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md"
                  onClick={(event) => event.stopPropagation()}
                >
                  <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
                    <h3 className="text-xl font-semibold text-white">{activeCard.type === 'project' ? activeItem.name : activeItem.title}</h3>
                    <button
                      type="button"
                      onClick={() => setActiveCard(null)}
                      className="cursor-pointer rounded-lg border border-white/20 p-2 text-slate-200 transition hover:border-violet-300/60 hover:text-violet-100"
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
                              className="cursor-pointer inline-flex items-center gap-2 rounded-xl bg-violet-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-violet-400"
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
                            className="cursor-pointer inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:border-violet-300/60 hover:bg-violet-400/20"
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
                          className="cursor-pointer inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
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

        <section id="contact" className="mx-auto w-full max-w-7xl px-6 pb-20 pt-8">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-md md:p-12">
            <h2 className="text-3xl font-bold text-white md:text-4xl">Let’s Work Together</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-200/90">
              Open to remote General VA opportunities with high-performance teams, including U.S.-focused recruiting and operations organizations.
            </p>
            <a
              href="https://github.com/OsmanJah"
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer mx-auto mt-6 inline-flex items-center gap-2 rounded-xl bg-violet-500 px-5 py-3 text-base font-semibold text-white transition hover:bg-violet-400"
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
              className="w-full max-w-5xl rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-md md:p-6"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="mb-4 flex items-center justify-between gap-4">
                <h3 className="text-lg font-semibold text-white">{activeDocument.title}</h3>
                <button
                  type="button"
                  onClick={() => setActiveDocument(null)}
                  className="cursor-pointer rounded-lg border border-white/20 p-2 text-slate-200 transition hover:border-violet-300/60 hover:text-violet-100"
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
                  className="cursor-pointer inline-flex items-center gap-2 rounded-xl bg-violet-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-violet-400"
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
