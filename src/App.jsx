import { education, experience, personal, projects, skills } from './data'
import { useReveal, useTheme } from './hooks'

function App() {
  const { theme, toggleTheme } = useTheme()
  useReveal()

  return (
    <div className="app-shell">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

function Header({ theme, toggleTheme }) {
  const links = [
    ['Inicio', '#hero'],
    ['Sobre mí', '#about'],
    ['Experiencia', '#experience'],
    ['Proyectos', '#projects'],
    ['Habilidades', '#skills'],
    ['Educación', '#education'],
    ['Contacto', '#contact'],
  ]

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <a className="brand" href="#hero">
          <span className="brand-mark">SW</span>
          <span className="brand-copy">
            <strong>Sebastián Webb</strong>
            <small>Systems Portfolio</small>
          </span>
        </a>

        <nav className="nav-links" aria-label="Principal">
          {links.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>

        <button className="theme-toggle" onClick={toggleTheme} aria-label="Cambiar tema">
          <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
        </button>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-grid">
        <div className="hero-copy reveal">
          <p className="eyebrow">Portafolio personal</p>
          <h1>{personal.name}</h1>
          <p className="hero-title">{personal.title}</p>
          <p className="hero-text">{personal.tagline}</p>

          <div className="hero-meta">
            <span>{personal.location}</span>
            <span>{personal.availability}</span>
            <span>{personal.english}</span>
          </div>

          <div className="hero-actions">
            <a className="btn btn-primary" href={`mailto:${personal.email}`}>
              Contactar
            </a>
            <a className="btn btn-secondary" href={personal.cvPath} target="_blank" rel="noreferrer">
              Ver CV
            </a>
          </div>

          <div className="social-links">
            <a href={personal.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={personal.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>

        <div className="hero-panel reveal">
          <div className="hero-card glass">
            <p className="card-label">Enfoque actual</p>
            <h2>Desarrollo web, auditoría y seguridad aplicada</h2>
            <p>
              Experiencia práctica en sistemas internos, control por roles, trazabilidad de usuarios y soluciones web orientadas a operación real.
            </p>
            <div className="metric-list">
              <div>
                <strong>4+</strong>
                <span>proyectos clave</span>
              </div>
              <div>
                <strong>2026</strong>
                <span>práctica profesional</span>
              </div>
              <div>
                <strong>C1</strong>
                <span>inglés certificado</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="section-block">
      <div className="container about-grid">
        <div className="section-heading reveal">
          <p className="eyebrow">Sobre mí</p>
          <h2>Perfil profesional</h2>
          <p>{personal.profile}</p>
        </div>

        <div className="about-side reveal">
          <div className="portrait-card glass">
            <img src="./profile-placeholder.svg" alt="Placeholder de foto de perfil" />
          </div>
          <div className="info-card glass">
            <div>
              <span>Ubicación</span>
              <strong>{personal.location}</strong>
            </div>
            <div>
              <span>Email</span>
              <strong>{personal.email}</strong>
            </div>
            <div>
              <span>Teléfono</span>
              <strong>{personal.phone}</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section id="experience" className="section-block alt-surface">
      <div className="container">
        <div className="section-heading reveal">
          <p className="eyebrow">Experiencia</p>
          <h2>Trayectoria con impacto operativo</h2>
        </div>

        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline-item glass reveal" key={item.company + item.role}>
              <p className="timeline-period">{item.period}</p>
              <h3>{item.role}</h3>
              <h4>{item.company}</h4>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects" className="section-block">
      <div className="container">
        <div className="section-heading reveal">
          <p className="eyebrow">Proyectos</p>
          <h2>Construidos para resolver necesidades reales</h2>
        </div>

        <div className="cards-grid">
          {projects.map((project) => (
            <article className="project-card glass reveal" key={project.name}>
              <div className="project-top">
                <p className="card-label">Proyecto destacado</p>
                <h3>{project.name}</h3>
              </div>
              <p>{project.description}</p>
              <div className="stack-list">
                {project.stack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              {project.link ? (
                <a className="inline-link" href={project.link} target="_blank" rel="noreferrer">
                  Ver proyecto
                </a>
              ) : (
                <span className="inline-link muted">Link disponible al publicar</span>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="section-block alt-surface">
      <div className="container">
        <div className="section-heading reveal">
          <p className="eyebrow">Habilidades</p>
          <h2>Base técnica orientada a desarrollo y operación</h2>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => (
            <article className="skill-chip glass reveal" key={skill.label}>
              <span>{skill.label}</span>
              <strong>{skill.level}</strong>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Education() {
  return (
    <section id="education" className="section-block">
      <div className="container">
        <div className="section-heading reveal">
          <p className="eyebrow">Educación</p>
          <h2>Formación académica</h2>
        </div>

        <div className="education-list">
          {education.map((item) => (
            <article className="education-card glass reveal" key={item.institution}>
              <p className="timeline-period">{item.period}</p>
              <h3>{item.degree}</h3>
              <p>{item.institution}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="section-block contact-section">
      <div className="container contact-card glass reveal">
        <div>
          <p className="eyebrow">Contacto</p>
          <h2>Disponible para práctica, empleo y colaboración</h2>
          <p>
            Si buscas a alguien con base técnica, orden en la ejecución y enfoque en soluciones funcionales, aquí están mis canales directos.
          </p>
        </div>

        <div className="contact-links">
          <a href={`mailto:${personal.email}`}>{personal.email}</a>
          <a href={`tel:${personal.phone.replace(/-/g, '')}`}>{personal.phone}</a>
          <a href={personal.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={personal.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-wrap">
        <p>© 2026 Sebastián Webb Vargas</p>
        <a href="#hero">Volver arriba</a>
      </div>
    </footer>
  )
}

export default App
