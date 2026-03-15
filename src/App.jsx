import { useEffect, useState } from 'react'
import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion'
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {
  const [isDegreeModalOpen, setIsDegreeModalOpen] = useState(false)

  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)
  const smoothX = useSpring(pointerX, { stiffness: 120, damping: 18 })
  const smoothY = useSpring(pointerY, { stiffness: 120, damping: 18 })

  const rotateY = useTransform(smoothX, [-40, 40], [-12, 12])
  const rotateX = useTransform(smoothY, [-40, 40], [12, -12])

  const { scrollY } = useScroll()
  const imageShiftY = useTransform(scrollY, [0, 800], [0, 50])

  useEffect(() => {
    document.documentElement.classList.add('scroll-smooth')

    AOS.init({
      duration: 850,
      easing: 'ease-out-cubic',
      once: true,
      offset: 70,
    })

    return () => {
      document.documentElement.classList.remove('scroll-smooth')
    }
  }, [])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsDegreeModalOpen(false)
      }
    }

    window.addEventListener('keydown', onKeyDown)

    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [])

  const skills = [
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
  ]

  const projects = [
    {
      name: 'MarieCare',
      type: 'Full-Stack Medical Appointment Platform',
      description:
        'A thesis project with patient and doctor dashboards, appointment scheduling, JWT authentication, Stripe payments, Socket.IO notifications, email confirmations, and cloud image storage.',
      stack: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Socket.IO', 'Stripe'],
      liveUrl: 'https://doctor-appointment-frontend-one.vercel.app',
      githubUrl: 'https://github.com/OsmanJah/doctor-appointment',
      mockupTitle: 'Dashboard + Booking Flow',
    },
    {
      name: 'Toy Catcher',
      type: 'Python Arcade Game',
      description:
        'An arcade game built with Pygame featuring multiple difficulty levels, combo scoring, power-ups, sound effects, and a SQLite-based leaderboard system.',
      stack: ['Python', 'Pygame', 'SQLite'],
      githubUrl: 'https://github.com/OsmanJah/TeamPlasas',
      mockupTitle: 'Gameplay + Leaderboard',
    },
  ]

  const certifications = [
    {
      title: 'Microsoft Certified: Security, Compliance, and Identity Fundamentals',
      issued: 'Issued Jan 2025',
      verifyUrl: 'https://www.credly.com/badges/d917da52-4d6e-455f-aa45-5efa8ae62514/linked_in_profile',
    },
    {
      title: 'IT Specialist - HTML and CSS',
      issued: 'Issued Jan 2025',
      verifyUrl: 'https://www.credly.com/badges/6f368252-a862-49b5-ae8e-112c37a1e800/linked_in_profile',
    },
    {
      title: 'Unity Certified User: Programmer',
      issued: 'Issued Jan 2025',
      verifyUrl: 'https://www.credly.com/badges/534f7468-d444-4723-a1d1-23dfe3468c45/linked_in_profile',
    },
  ]

  const handleImageMove = (event) => {
    const { currentTarget, clientX, clientY } = event
    const rect = currentTarget.getBoundingClientRect()
    const offsetX = clientX - rect.left - rect.width / 2
    const offsetY = clientY - rect.top - rect.height / 2

    pointerX.set(offsetX / 4)
    pointerY.set(offsetY / 4)
  }

  const handleImageLeave = () => {
    pointerX.set(0)
    pointerY.set(0)
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased">
      <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-sm font-semibold tracking-wide text-violet-300">
            Osman Jah
          </a>
          <ul className="flex items-center gap-5 text-sm text-slate-300">
            <li>
              <a className="transition hover:text-violet-300" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="transition hover:text-violet-300" href="#skills">
                Skills
              </a>
            </li>
            <li>
              <a className="transition hover:text-violet-300" href="#projects">
                Projects
              </a>
            </li>
            <li>
              <a className="transition hover:text-violet-300" href="#credentials">
                Credentials
              </a>
            </li>
            <li>
              <a className="transition hover:text-violet-300" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-12 md:py-20">
        <section
          id="home"
          data-aos="fade-up"
          className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 p-8 md:p-12"
        >
          <div className="pointer-events-none absolute -right-16 -top-16 h-60 w-60 rounded-full bg-violet-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-14 h-52 w-52 rounded-full bg-cyan-500/20 blur-3xl" />

          <div className="relative grid items-center gap-10 lg:grid-cols-12">
            <div className="space-y-6 lg:col-span-7">
              <p className="inline-flex rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-1 text-xs font-medium uppercase tracking-widest text-violet-200">
                Tech-Savvy • AI-Fluent • Remote-Ready
              </p>
              <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
                I help teams run complex operations smoothly with smart systems, clear communication, and dependable execution.
              </h1>
              <p className="max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
                I am Osman Jah, a Computer Science graduate focused on delivering high-quality administrative and operational support.
                I combine technical depth with practical workflow thinking to help remote teams move faster and stay organized.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="rounded-lg bg-violet-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-400"
                >
                  View My Work
                </a>
                <a
                  href="https://github.com/OsmanJah"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-violet-400 hover:text-violet-200"
                >
                  GitHub Profile
                </a>
                <a
                  href="/CV_signed.pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                    <path d="M12 3a1 1 0 0 1 1 1v8.59l2.3-2.3a1 1 0 1 1 1.4 1.42l-4 3.99a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.41l2.3 2.3V4a1 1 0 0 1 1-1Zm-7 14a1 1 0 0 1 1 1v1h12v-1a1 1 0 1 1 2 0v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1Z" />
                  </svg>
                  Download Resume/CV
                </a>
              </div>
            </div>

            <div className="flex justify-center lg:col-span-5">
              <motion.div
                style={{ rotateX, rotateY, y: imageShiftY, transformStyle: 'preserve-3d' }}
                transition={{ type: 'spring', stiffness: 140, damping: 16 }}
                whileHover={{ scale: 1.03 }}
                onMouseMove={handleImageMove}
                onMouseLeave={handleImageLeave}
                className="group relative"
              >
                <div className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-violet-500/20 blur-2xl" />
                <img
                  src="/profile.jpeg"
                  alt="Osman Jah"
                  className="relative z-10 h-80 w-72 rounded-[1.5rem] border border-slate-700 object-cover shadow-2xl shadow-violet-900/30 md:h-[24rem] md:w-80"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <section id="about" data-aos="fade-up" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8">
          <h2 className="text-2xl font-semibold text-white">About Me</h2>
          <div className="mt-5 grid gap-6 md:grid-cols-3">
            <p className="md:col-span-2 text-slate-300 leading-relaxed">
              Born in Freetown, Sierra Leone and currently based in Hungary, I recently completed a{' '}
              <button
                type="button"
                onClick={() => setIsDegreeModalOpen(true)}
                className="font-semibold text-violet-300 underline decoration-violet-400/60 underline-offset-4 transition hover:text-violet-200"
              >
                Bachelor of Science in Computer Science
              </button>{' '}
              at the University of Debrecen (graduated January 2026, classification: good). I bring a calm, organized, and
              proactive approach to remote work, with a strong ability to learn tools quickly and handle detailed tasks with
              consistency.
            </p>
            <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-4 text-sm text-slate-300">
              <p>
                <span className="text-slate-400">Name:</span> Osman Jah
              </p>
              <p className="mt-2">
                <span className="text-slate-400">Degree:</span> BSc Computer Science
              </p>
              <p className="mt-2">
                <span className="text-slate-400">University:</span> University of Debrecen
              </p>
              <p className="mt-2">
                <span className="text-slate-400">Graduation:</span> January 2026
              </p>
              <p className="mt-2">
                <span className="text-slate-400">Classification:</span> Good
              </p>
            </div>
          </div>
        </section>

        <section id="skills" data-aos="fade-up" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8">
          <h2 className="text-2xl font-semibold text-white">Skills</h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            Strong technical foundations and practical automation mindset for high-impact virtual assistant work.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-slate-700 bg-slate-950/80 px-4 py-2 text-sm font-medium text-slate-200 transition duration-300 hover:border-violet-400 hover:bg-violet-500/20 hover:text-violet-100 hover:shadow-[0_0_18px_rgba(167,139,250,0.38)]"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section id="projects" data-aos="fade-up" className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-white">Projects</h2>
            <p className="mt-3 text-slate-300">Selected work demonstrating full-stack development, automation logic, and product execution.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-12">
            {projects.map((project, index) => (
              <article
                key={project.name}
                data-aos="fade-up"
                data-aos-delay={index * 120}
                className={`group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 transition hover:border-violet-400/50 ${
                  index === 0 ? 'md:col-span-7 md:row-span-1' : 'md:col-span-5 md:mt-10'
                }`}
              >
                <div className="border-b border-slate-800 bg-gradient-to-br from-slate-900 via-slate-800 to-violet-950/60 p-5">
                  <div className="rounded-lg border border-slate-700 bg-slate-900/90 p-4">
                    <p className="text-xs uppercase tracking-widest text-violet-200">Project Mockup</p>
                    <p className="mt-2 text-sm text-slate-200">{project.mockupTitle}</p>
                    <div className="mt-4 grid grid-cols-3 gap-2">
                      <div className="h-10 rounded bg-violet-500/30" />
                      <div className="h-10 rounded bg-cyan-500/25" />
                      <div className="h-10 rounded bg-slate-700" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4 p-5">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{project.name}</h3>
                    <p className="mt-1 text-sm text-violet-200">{project.type}</p>
                  </div>

                  <p className="text-sm leading-relaxed text-slate-300">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span key={item} className="rounded-md border border-slate-700 px-2.5 py-1 text-xs text-slate-300">
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3 pt-1">
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-lg bg-violet-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-violet-400"
                      >
                        Live Demo
                      </a>
                    ) : null}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-violet-400 hover:text-violet-200"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="credentials" data-aos="fade-up" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-2xl font-semibold text-white">Certifications & Credentials</h2>
            <a
              href="/Certiport Transcripts.pdf"
              download
              className="rounded-lg bg-violet-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-violet-400"
            >
              Download Full Transcript
            </a>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {certifications.map((certification, index) => (
              <article
                key={certification.title}
                data-aos="fade-up"
                data-aos-delay={index * 90}
                className="rounded-xl border border-slate-800 bg-slate-950/70 p-5"
              >
                <h3 className="text-base font-semibold leading-snug text-white">{certification.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{certification.issued}</p>
                <a
                  href={certification.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex rounded-lg border border-slate-700 px-3 py-2 text-sm font-semibold text-slate-200 transition hover:border-violet-400 hover:text-violet-200"
                >
                  Verify Credential
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" data-aos="fade-up" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8">
          <h2 className="text-2xl font-semibold text-white">Contact</h2>
          <p className="mt-3 text-slate-300">
            Open to remote General VA opportunities at U.S.-focused teams, including Remote Leverage.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://github.com/OsmanJah"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-violet-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-400"
            >
              github.com/OsmanJah
            </a>
          </div>
        </section>
      </main>

      {isDegreeModalOpen ? (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm">
          <div className="w-full max-w-4xl rounded-2xl border border-slate-700 bg-slate-900 p-4 md:p-6">
            <div className="mb-4 flex items-center justify-between gap-4">
              <h3 className="text-lg font-semibold text-white">Bachelor Degree Certificate</h3>
              <button
                type="button"
                onClick={() => setIsDegreeModalOpen(false)}
                className="rounded-lg border border-slate-700 px-3 py-1.5 text-sm text-slate-200 transition hover:border-violet-400 hover:text-violet-200"
              >
                Close
              </button>
            </div>
            <div className="h-[60vh] overflow-hidden rounded-xl border border-slate-700 bg-slate-950">
              <iframe title="Osman Degree" src="/Degree _EN.pdf" className="h-full w-full" />
            </div>
            <div className="mt-4 flex justify-end">
              <a
                href="/Degree _EN.pdf"
                download
                className="rounded-lg bg-violet-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-violet-400"
              >
                Download Degree PDF
              </a>
            </div>
          </div>
        </div>
      ) : null}

      <footer className="border-t border-slate-800 py-6 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Osman Jah • Built with React, Vite, Tailwind CSS, Framer Motion, and AOS
      </footer>
    </div>
  )
}

export default App
