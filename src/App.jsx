import { useEffect, useState } from 'react'
import { education, experience, personal, projects, skills } from './data'
import { useReveal, useScrollScene, useTheme } from './hooks'

const Arrow = ({ down = false }) => <span aria-hidden="true">{down ? '↓' : '↗'}</span>
const links = [['Sobre mí', 'about'], ['Proyectos', 'projects'], ['Experiencia', 'experience'], ['Habilidades', 'skills'], ['Educación', 'education'], ['Contacto', 'contact']]

function App() {
  const { theme, toggleTheme } = useTheme()
  useReveal()
  useScrollScene()
  return <div className="app-shell">
    <a className="skip-link" href="#main">Saltar al contenido</a>
    <Header theme={theme} toggleTheme={toggleTheme} />
    <main id="main"><Hero /><About /><Projects /><Experience /><Skills /><Education /><Contact /></main>
    <footer className="container footer-wrap"><a className="wordmark" href="#hero">SW<span>.</span></a><p>© {new Date().getFullYear()} Sebastián Webb Vargas</p><a href="#hero">Volver arriba ↑</a></footer>
  </div>
}

function Header({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    if (!open) return
    const close = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
        document.querySelector('.menu-toggle')?.focus()
      }
    }
    document.addEventListener('keydown', close)
    return () => document.removeEventListener('keydown', close)
  }, [open])
  return <header className="site-header"><div className="container nav-wrap">
    <a className="brand" href="#hero" onClick={() => setOpen(false)} aria-label="Sebastián Webb, inicio"><span className="wordmark">SW<span>.</span></span><span className="brand-copy">SEBASTIÁN WEBB<br /><small>DESARROLLO & SISTEMAS</small></span></a>
    <nav className={`nav-links ${open ? 'is-open' : ''}`} id="navigation" aria-label="Principal">{links.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}</nav>
    <div className="nav-controls"><button className="theme-toggle" onClick={toggleTheme} aria-label={`Activar modo ${theme === 'dark' ? 'claro' : 'oscuro'}`} title={`Modo ${theme === 'dark' ? 'claro' : 'oscuro'}`}><span aria-hidden="true">{theme === 'dark' ? '☼' : '☾'}</span></button><button className="menu-toggle" aria-controls="navigation" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? 'Cerrar −' : 'Menú +'}</button></div>
  </div><div className="reading-progress" aria-hidden="true" /></header>
}

function Hero() {
  return <section id="hero" className="hero-section">
    <div className="hero-art" aria-hidden="true"><div className="art-grid" /><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="art-monogram">SW</div><span className="art-coordinate">09°56′ N / 84°05′ W</span></div>
    <div className="container hero-content"><div className="hero-kicker"><p className="eyebrow">PORTAFOLIO / 2026</p><span className="location">COSTA RICA — DESARROLLO WEB</span></div>
      <div className="hero-copy"><p className="hero-intro">Ideas claras. Sistemas sólidos.</p><h1><span>Sebastián</span><span>Webb<span className="hero-dot">.</span></span></h1><p className="hero-title">{personal.title}</p></div>
      <div className="hero-bottom"><p className="hero-text">{personal.tagline}</p><div className="hero-actions"><a className="btn btn-primary" href="#projects">Explorar proyectos <Arrow down /></a><a className="text-link" href={personal.cvPath} target="_blank" rel="noreferrer">Ver CV <Arrow /></a></div></div>
      <div className="hero-foot"><a href="#about">DESPLÁZATE PARA EXPLORAR <Arrow down /></a><span>ESTRUCTURA · EXPERIENCIA · SEGURIDAD</span></div>
    </div>
  </section>
}

function SectionHeading({ number, label, children, description }) {
  return <div className="section-heading reveal"><p className="eyebrow"><span>{number} /</span> {label}</p><h2>{children}</h2>{description && <p className="section-description">{description}</p>}</div>
}

function About() {
  return <section id="about" className="section-block about-section"><div className="container about-grid">
    <SectionHeading number="01" label="SOBRE MÍ">La tecnología<br />con <em>propósito.</em></SectionHeading>
    <div className="about-copy reveal"><p className="lead">Desarrollo web, auditoría y seguridad aplicada.</p><p>{personal.profile}</p><div className="about-details"><span>{personal.location}</span><span>{personal.availability}</span></div><a className="text-link" href={`mailto:${personal.email}`}>Conversemos <Arrow /></a></div>
    <div className="metrics reveal"><div><strong>{String(projects.length).padStart(2, '0')}</strong><span>Proyectos seleccionados</span></div><div><strong>2026</strong><span>Práctica profesional</span></div><div><strong>C1</strong><span>Inglés avanzado certificado</span></div></div>
  </div></section>
}

const projectVisuals = [
  { title: 'CONTROL / TRAZABILIDAD', word: 'Gestión', sub: 'SISTEMA VEHICULAR', type: 'fleet' },
  { title: 'PROGRESO / CONSTANCIA', word: 'LifeLevel', sub: 'CADA PASO CUENTA', type: 'levels' },
  { title: 'DEPORTE / OPERACIÓN', word: 'FutManager', sub: 'EL JUEGO, EN ORDEN', type: 'field' },
  { title: 'IDIOMAS / APRENDIZAJE', word: 'Polyglot', sub: 'UN MUNDO DE PALABRAS', type: 'language' },
  { title: 'BIENESTAR / HÁBITOS', word: 'Forma', sub: 'CONSTRUYE TU MEJOR VERSIÓN', type: 'fitness' },
]
function Projects() {
  return <section id="projects" className="section-block projects-section"><div className="container">
    <div className="heading-row"><SectionHeading number="02" label="TRABAJO SELECCIONADO">De la idea<br />a lo <em>funcional.</em></SectionHeading><p className="heading-note reveal">Cinco proyectos. Distintos desafíos.<br />El mismo cuidado por los detalles.</p></div>
    <div className="projects-grid">{projects.map((project, index) => {
      const visual = projectVisuals[index]
      return <article className={`project-card project-${visual.type} reveal ${index === 0 ? 'project-featured' : ''}`} key={project.name}>
        <div className="project-visual" aria-hidden="true"><span className="visual-label">{visual.title}</span><div className={`project-drawing drawing-${visual.type}`}><i /><i /><i /><i /><i /></div><div className="visual-word">{visual.word}<small>{visual.sub}</small></div><span className="visual-index">0{index + 1}</span></div>
        <div className="project-info"><div className="project-title-row"><span className="project-number">0{index + 1}</span><h3>{project.name}</h3></div><p>{project.description}</p><div className="stack-list">{project.stack.map(tech => <span key={tech}>{tech}</span>)}</div>{project.link ? <a className="text-link project-link" href={project.link} target="_blank" rel="noreferrer" aria-label={`Explorar ${project.name} (abre en otra pestaña)`}>Explorar proyecto <Arrow /></a> : <span className="project-private">Proyecto institucional · Sin demo pública</span>}</div>
      </article>
    })}</div>
  </div></section>
}

function Experience() {
  return <section id="experience" className="section-block experience-section"><div className="container experience-grid"><SectionHeading number="03" label="EXPERIENCIA">Código con<br /><em>contexto real.</em></SectionHeading><div className="timeline">{experience.map((item, index) => <article className="timeline-item reveal" key={item.company}><div className="timeline-top"><span className="eyebrow">{item.period}</span><span className="item-index">0{index + 1}</span></div><h3>{item.role}</h3><h4>{item.company}</h4><p>{item.description}</p></article>)}</div></div></section>
}
function Skills() {
  return <section id="skills" className="section-block"><div className="container"><div className="heading-row"><SectionHeading number="04" label="HABILIDADES">Las herramientas.<br /><em>El criterio.</em></SectionHeading><p className="heading-note reveal">Una base técnica para construir,<br />mantener y mejorar.</p></div><div className="skills-grid">{skills.map((skill, index) => <div className="skill-item reveal" key={skill.label} style={{ '--reveal-delay': `${index % 3 * 65}ms` }}><span className="skill-index">{String(index + 1).padStart(2, '0')}</span><h3>{skill.label}</h3><span className="skill-level">{skill.level}</span></div>)}</div></div></section>
}
function Education() {
  return <section id="education" className="section-block education-section"><div className="container education-grid"><SectionHeading number="05" label="FORMACIÓN">Aprender.<br /><em>Evolucionar.</em></SectionHeading><div>{education.map(item => <article className="education-item reveal" key={item.institution}><p className="eyebrow">{item.period}</p><h3>{item.degree}</h3><p>{item.institution}</p></article>)}</div></div></section>
}
function Contact() {
  return <section id="contact" className="contact-section"><div className="container"><p className="eyebrow reveal">06 / EL SIGUIENTE PASO</p><h2 className="reveal">Construyamos<br /><em>algo juntos.</em></h2><div className="contact-bottom reveal"><p>Disponible para práctica, empleo y colaboración.<br />Una buena solución empieza con una conversación.</p><a className="contact-email" href={`mailto:${personal.email}`}>{personal.email} <Arrow /></a></div><div className="contact-socials reveal"><span>{personal.location}</span><a href={`tel:+506${personal.phone.replace(/-/g, '')}`}>{personal.phone} <Arrow /></a><a href={personal.github} target="_blank" rel="noreferrer">GitHub <Arrow /></a><a href={personal.linkedin} target="_blank" rel="noreferrer">LinkedIn <Arrow /></a></div></div></section>
}
export default App
